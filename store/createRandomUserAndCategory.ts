import { states } from ".";
import { useCategoryList } from "./categoryList";
import { useStartServe } from "./register";

export function useRandomUserAndCategory(): void {
  const { register } = useStartServe();
  const { getAllCategoryList } = useCategoryList();
  getAllCategoryList();
  function getRandomString(length: number) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
  function getRandomTel(length: number) {
    var randomChars = "0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }

  states.categories.forEach((ctgr) => {
    const fullname = getRandomString(10);
    const email = getRandomString(10) + "@gmail.com";
    const password = getRandomString(10);
    const category = ctgr;
    const status = "person";
    const address = getRandomString(15);
    const tel = getRandomTel(10);
    const provider = true;

    register(
      fullname,
      email,
      password,
      category,
      status,
      address,
      tel,
      provider
    );
  });
}
