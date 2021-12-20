import { useContext } from "@nuxtjs/composition-api";
import { GET_OPPORTUNITY } from "./request";
import { Categories } from "./types";
export function useOpportunity(): {
  getOpportunity(category: string): Promise<Object>;
} {
  const getOpportunity = async (category: string): Promise<Object> => {
    const context = useContext();
    const client = context.app?.apolloProvider.defaultClient;

    const payload = {
      category: category,
    };
    const result = await client.query({
      query: GET_OPPORTUNITY,
      variables: payload,
    });

    const data: {
      data: {
        getOpportunity: Categories;
      };
    } = await result.data.getOpportunity;
    return data;
  };

  return { getOpportunity };
}
