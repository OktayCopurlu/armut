import { useRouter, useRoute, useContext } from "@nuxtjs/composition-api";
const protectedRouter = () => {
  const context = useContext();
  const router = useRouter();
  const route = useRoute();

  const hasToken: boolean =
    context.app.$apolloHelpers.getToken("apollo-token") !== undefined;
  if (!hasToken && route.value.path == "/my-account") {
    return router.push("/");
  } else if (
    hasToken &&
    (route.value.path == "/login" || route.value.path.includes("/register"))
  ) {
    return router.push("/");
  } else if (!hasToken && route.value.path.includes("/ask_serve")) {
    return router.push("/login");
  }
};
export default protectedRouter;