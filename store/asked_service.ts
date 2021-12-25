import { useContext } from "@nuxtjs/composition-api";
import { askedService } from ".";
import { GET_ASKED_SERVICE, GET_USER_REZERVATIONS } from "./request";
export function useAsked_service(): {
  getAsked_service(category: string): Promise<void>;
  getUserRezervations(_id: string): Promise<void>;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;
  const getAsked_service = async (category: string): Promise<void> => {
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
  const getUserRezervations = async (_id: string) => {
    try {
      const payload = {
        _id,
      };
      const result = await client.query({
        query: GET_USER_REZERVATIONS,
        variables: payload,
      });

      const data = await result.data.getUserRezervations;
      askedService.asked_services = data;
    } catch (error) {
      console.error(error);
    }
  };
  return { getAsked_service, getUserRezervations };
}
