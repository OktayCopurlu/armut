import { useContext } from "@nuxtjs/composition-api";
import { userInfo } from "./index";
import { CREATE_OFFER } from "./request";

export function useOffer(): {
  createOffer(
    canton: string,
    city: string,
    date: string,
    more_info: string,
    category: string
  ): Promise<void>;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;
  const createOffer = async (
    canton: string,
    city: string,
    date: string,
    more_info: string,
    category: string
  ) => {
    const payload = {
      canton,
      city,
      date,
      more_info,
      category,
      offeredUser: userInfo._id,
    };
    console.log(payload);
    const response = await client.mutate({
      mutation: CREATE_OFFER,
      variables: payload,
    });
  };
  return { createOffer };
}
