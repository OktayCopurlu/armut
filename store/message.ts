import { useContext } from "@nuxtjs/composition-api";
import {
  CREATE_MESSAGE,
  CREATE_OFFER,
  GET_OFFER,
  GET_OFFER_MESSAGES,
  GET_REZERVATIONS_OFFERS,
  GET_USER_MESSAGES,
} from "./request";

export function useMessage(): {
  createMessage(
    asked_service_id: string,
    price: String,
    message: String,
    senderID: String,
    receiverID: String
  ): Promise<void>;
  getUserMessages(userID: String): Promise<void>;
  getOfferMessages(_id: String): Promise<Object[]>;
  createOffer(
    price: String,
    clientID: String,
    bidderID: String,
    serviceID: String
  ): Promise<void>;
  getOffer(bidderID: String): Promise<
    {
      _id: String;
      price: String;
      clientID: String;
      bidderID: String;
      serviceID: String;
    }[]
  >;
  getRezervationsOffers(_id: String): Promise<Object[]>;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;
  const createMessage = async (
    asked_service_id: string,
    price: String,
    message: String,
    senderID: String,
    receiverID: String
  ) => {
    let payload;
    if (asked_service_id !== "") {
      payload = {
        price,
        message,
        senderID,
        receiverID,
        asked_service_id,
      };
    } else {
      payload = {
        price,
        message,
        senderID,
        receiverID,
      };
    }
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
  const createOffer = async (
    price: String,
    clientID: String,
    bidderID: String,
    serviceID: String
  ) => {
    try {
      const payload = {
        price,
        clientID,
        bidderID,
        serviceID,
      };
      await client.mutate({
        mutation: CREATE_OFFER,
        variables: payload,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const getOffer = async (bidderID: String) => {
    try {
      const payload = {
        bidderID,
      };
      const response = await client.mutate({
        mutation: GET_OFFER,
        variables: payload,
      });
      const offer = response.data.getOffer;
      return offer;
    } catch (error) {
      console.error(error);
    }
  };
  const getRezervationsOffers = async (_id: String) => {
    const response = await client.mutate({
      mutation: GET_REZERVATIONS_OFFERS,
      variables: { _id },
    });
    const offers = await response.data.getRezervationsOffers;
    return offers;
  };
  const getOfferMessages = async (_id: String) => {
    const response = await client.mutate({
      mutation: GET_OFFER_MESSAGES,
      variables: { _id },
    });

    return response.data.getOfferMessages;
  };

  return {
    createMessage,
    getUserMessages,
    createOffer,
    getOffer,
    getRezervationsOffers,
    getOfferMessages,
  };
}
