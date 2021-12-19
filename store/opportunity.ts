import { ComputedRef, useContext } from "@nuxtjs/composition-api";
import { states } from "./index";
import { GET_CATEGORY, GET_OPPORTUNITY } from "./request";

export function useOpportunity(): {
  getOpportunity(category: string): Promise<Object[]>;
} {
  const getOpportunity = async (category: string) => {
    const context = useContext();
    const client = context.app?.apolloProvider.defaultClient;

    const payload = {
      category: category,
    };
    const result = await client.query({
      query: GET_OPPORTUNITY,
      variables: payload,
    });

    const data = await result.data.getOpportunity;
    return data;
  };

  return { getOpportunity };
}
