import { useContext } from "@nuxtjs/composition-api";
import { states } from "./index";
import { GET_CATEGORY } from "./request";
import { ServiceCategoryType } from "./types";

export function useCategory(): {
  getCategory(page: string): Promise<void>;
} {
  const getCategory = async (page: string) => {
    const context = useContext();
    const client = context.app?.apolloProvider.defaultClient;

    const payload = {
      mainCategory: page,
    };
    const result = await client.query({
      query: GET_CATEGORY,
      variables: payload,
    });

    const data: ServiceCategoryType[] = await result.data.getServiceCategory;
    states.mainCategory = data;
  };

  return { getCategory };
}
