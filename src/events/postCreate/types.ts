import { BaseEvent, Nullable } from "../types";

interface PostCreatePayload extends BaseEvent {
  postId: string;
  authorId: number;
  authorFirstname: string;
  authorLastName: Nullable<string>;
  authorUsername: string;
}

export default PostCreatePayload;
