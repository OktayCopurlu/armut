import { useContext } from "@nuxtjs/composition-api";
import { currentUserInfo } from "./index";
import { CREATE_ASKED_SERVICE } from "./request";

export function useAsked_service(): {
  createAsked_service(
    fullname: string,
    email: string,
    tel: string,
    canton: string,
    city: string,
    date: string,
    message: string,
    category: string
  ): Promise<void>;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;
  const createAsked_service = async (
    fullname: string,
    email: string,
    tel: string,
    canton: string,
    city: string,
    date: string,
    message: string,
    category: string
  ) => {
    const payload = {
      fullname,
      email,
      tel,
      canton,
      city,
      date,
      message,
      category,
      asked_service_user: currentUserInfo._id,
    };
    await client.mutate({
      mutation: CREATE_ASKED_SERVICE,
      variables: payload,
    });
  };
  return { createAsked_service };
}
