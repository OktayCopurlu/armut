import { useContext } from "@nuxtjs/composition-api";
import { userInfo } from "./index";
import { CREATE_ASKED_SERVICE } from "./request";

export function useAsked_service(): {
  createAsked_service(
    canton: string,
    city: string,
    date: string,
    more_info: string,
    category: string
  ): Promise<void>;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;
  const createAsked_service = async (
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
      asked_service_user: userInfo._id,
    };
    await client.mutate({
      mutation: CREATE_ASKED_SERVICE,
      variables: payload,
    });
  };
  return { createAsked_service };
}
