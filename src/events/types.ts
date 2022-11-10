import { SubscriptionPayload } from "./subscription/types";
import PostCreatePayload from "./postCreate/types";
import { PostCommentedPayload } from "./comment/types";

export enum DATABASE_ACTION {
  INSERT = "INSERT"
}

export type Nullable<T> = T | null;

export type Readable = { hasBeenRead: boolean };
export type CreatedAt = { createdAt: string };
export type EventType = { eventType: EVENT_TYPE };

export interface BaseEvent extends Readable, CreatedAt, EventType {}

export type NotificationType = {
  key: string;
  payload: SubscriptionPayload | PostCreatePayload | PostCommentedPayload;
};

export enum CLIENT_EVENTS {
  COMMON_NOTIFICATION = "common_notification",
  INIT_NOTIFICATIONS = "init-notifications",
  READ_NOTIFICATIONS = "read-notifications"
}

enum EVENT_TYPE {
  SUBSCRIPTION = "SUBSCRIPTION",
  POST_CREATE = "POST_CREATE",
  COMMENT = "COMMENT"
}

export default EVENT_TYPE;
