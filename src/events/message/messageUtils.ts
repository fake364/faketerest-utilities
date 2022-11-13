import EVENT_TYPE from "../types";

const createConversationId = (...ids: number[]) =>
  `${EVENT_TYPE.MESSAGE}:${ids.sort((a, b) => a - b).join(":")}`;

const MessageUtils = { createConversationId };

export default MessageUtils;
