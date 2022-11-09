import { BaseEvent } from "../types";

export interface SubscriptionPayload extends BaseEvent {
  toId: string;
  fromId: string;
  fromFirstname: string;
  fromLastname: string | null;
  fromUsername: string;
  toFirstname: string;
  toLastname: string | null;
  toUsername: string;
}
