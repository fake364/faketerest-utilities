import EVENT_TYPE from "../types";

const createConversationId = (...ids: number[]) =>
  `${EVENT_TYPE.MESSAGE}:${ids.sort((a, b) => a - b).join(":")}`;

const getParticipants = (dialogKey: string, myId: number) =>
  dialogKey
    .split(":")
    .slice(1)
    .filter((participant) => participant !== String(myId))
    .map(Number);

const MessageUtils = { createConversationId, getParticipants };

export default MessageUtils;
