import { BaseEvent } from "../types";

export interface PostCommentedPayload extends BaseEvent {
  fromFirstname: string;
  fromLastname: string | null;
  fromUserId: number;
  postId: string;
}
