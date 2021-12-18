import { computed, useContext } from "@nuxtjs/composition-api";
import { states } from ".";
import { GET_ALL_CATEGORIES } from "./request";

export function useCategory(): {
  getAllCategories(): Promise<void>;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;
  const getAllCategories = async () => {
    const response = await client.query({
      query: GET_ALL_CATEGORIES,
      fetchPolicy: "network-only",
    });
    const categories = await response.data.getAllCategories;
    const arr: any = [];
    categories.forEach((category: any) => {
      arr.push(...category.categories);
      states.categories = [...new Set(arr)];
    });
  };
  return { getAllCategories };
}
