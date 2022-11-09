import uniqWith from "lodash/uniqWith";
import EVENT_TYPE, { NotificationType } from "./types";

export const filterDuplicateNotifications = (
  notifications: NotificationType[]
) => {
  return uniqWith(notifications, ({ payload: first }, { payload: second }) => {
    if (
      first.eventType === EVENT_TYPE.SUBSCRIPTION &&
      second.eventType === EVENT_TYPE.SUBSCRIPTION
    ) {
      return first.fromId === second.fromId && first.toId === second.toId;
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
