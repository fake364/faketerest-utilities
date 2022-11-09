import uniqWith from "lodash/uniqWith";
import EVENT_TYPE, {NotificationType} from "./types";
import {SubscriptionPayload} from "./subscription/types";

const bothHaveEventType = (
  a: NotificationType["payload"],
  b: NotificationType["payload"],
  type: EVENT_TYPE
) => a.eventType === type && b.eventType === type;

export const filterDuplicateNotifications = (
  notifications: NotificationType[]
) => {
  return uniqWith(notifications, ({ payload: first }, { payload: second }) => {
    const compare = (type: EVENT_TYPE) =>
      bothHaveEventType(first, second, type);
    if (compare(EVENT_TYPE.SUBSCRIPTION)) {
      const firstSub = first as SubscriptionPayload;
      const secondSub = second as SubscriptionPayload;
      return (
        firstSub.fromId === secondSub.fromId && firstSub.toId === secondSub.toId
      );
    } else {
      return false;
    }
  });
};

export const sortNotificationByType = (
  first: NotificationType,
  second: NotificationType
) => {
  const firstDate = new Date(first.payload.createdAt);
  const secondDate = new Date(second.payload.createdAt);
  return secondDate.getTime() - firstDate.getTime();
};

export const filterAndSortNotifications = (notifications: NotificationType[]) =>
  filterDuplicateNotifications(notifications.sort(sortNotificationByType));
