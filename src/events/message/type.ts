import { BaseEvent } from "../types";

interface MessagePayload extends BaseEvent {
  text: string;
  authorId: number;
  messageId: string;
}

export default MessagePayload;
