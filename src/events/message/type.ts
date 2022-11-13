import { BaseEvent } from "../types";

interface MessagePayload extends BaseEvent {
  text: string;
  authorId: number;
}

export default MessagePayload;
