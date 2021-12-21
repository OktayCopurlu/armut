import { useContext } from "@nuxtjs/composition-api";
import { messageState } from ".";
import { CREATE_MESSAGE, GET_USER_MESSAGES } from "./request";

export function useMessage(): {
  createMessage(
    price: String,
    message: String,
    senderID: String,
    receiverID: String
  ): Promise<void>;
  getUserMessages(userID: String): Promise<void>;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;
  const createMessage = async (
    price: String,
    message: String,
    senderID: String,
    receiverID: String
  ) => {
    const payload = {
      price,
      message,
      senderID,
      receiverID,
    };
    await client.mutate({
      mutation: CREATE_MESSAGE,
      variables: payload,
    });
  };
  const getUserMessages = async (_id: String) => {
    const response = await client.mutate({
      mutation: GET_USER_MESSAGES,
      variables: { _id },
    });

    return response.data.getUserMessages;
  };
  return { createMessage, getUserMessages };
}
