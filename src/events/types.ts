import { SubscriptionPayload } from "./subscription/types";

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
  payload: SubscriptionPayload;
};

enum EVENT_TYPE {
  SUBSCRIPTION = "SUBSCRIPTION",
  POST_CREATE = "POST_CREATE"
}

export default EVENT_TYPE;
