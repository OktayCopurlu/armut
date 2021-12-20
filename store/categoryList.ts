import { useContext } from "@nuxtjs/composition-api";
import { states } from ".";
import { GET_ALL_CATEGORIES } from "./request";
import { AllCategoryType } from "./types";

export function useCategoryList(): {
  getAllCategoryList(): Promise<void>;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;

  const getAllCategoryList = async () => {
    const response: AllCategoryType = await client.query({
      query: GET_ALL_CATEGORIES,
      fetchPolicy: "network-only",
    });
    const categories = response.data.getAllCategories;
    const arr: string[] = [];
    categories.forEach((category: { categories: string[] }) => {
      arr.push(...category.categories);
      states.categories = [...new Set(arr)];
    });
  };
  return { getAllCategoryList };
}
