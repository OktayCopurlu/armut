import { computed, useContext } from "@nuxtjs/composition-api";
import { askedService } from ".";
import { GET_ASKED_SERVICE } from "./request";
export function useAsked_service(): {
  getAsked_service(category: string): Promise<void>;
} {
  const getAsked_service = async (category: string): Promise<void> => {
    const context = useContext();
    const client = context.app?.apolloProvider.defaultClient;

    const payload = {
      category: category,
    };
    const result = await client.query({
      query: GET_ASKED_SERVICE,
      variables: payload,
    });

    const data = await result.data.getAsked_service;
    askedService.asked_services = data;
  };

  return { getAsked_service };
}
