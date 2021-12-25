import { LOGIN, REGISTER } from "./request";
import { useRouter, useContext } from "@nuxtjs/composition-api";
import { LoginInfoType } from "./types";
import { currentUserInfo } from "./index";
import verifyJWT from "./verifyJWT";

export function initAuth(): void {
  const context = useContext();
  const token: string = context.app.$apolloHelpers.getToken("apollo-token");
  if (token) {
    const user = verifyJWT(token);
    currentUserInfo.fullname = user.fullname;
    currentUserInfo.email = user.email;
    currentUserInfo._id = user._id;
    currentUserInfo.address = user.address;
    currentUserInfo.tel = user.tel;
    currentUserInfo.token = token;
    currentUserInfo.isLogin = true;
    currentUserInfo.photo = user.photo;
    currentUserInfo.provider = user.provider;
    currentUserInfo.category = user.category;
  }
}

export function useLogin(): {
  login: (password: string, email: string) => Promise<void>;

  logout(): void;
} {
  const context = useContext();
  const router = useRouter();
  const client = context.app?.apolloProvider.defaultClient; // test is faild that is what we use ? after app

  const login = async (password: string, email: string): Promise<void> => {
    const payload = {
      email,
      password,
    };

    try {
      const response: LoginInfoType = await client.mutate({
        mutation: LOGIN,
        variables: payload,
      });

      const token = response.data.login.token;
      await context.app.$apolloHelpers.onLogin(token, "_", "");
      if (token) {
        const user = verifyJWT(token);
        currentUserInfo.fullname = user.fullname;
        currentUserInfo.email = user.email;
        currentUserInfo._id = user._id;
        currentUserInfo.address = user.address;
        currentUserInfo.tel = user.tel;
        currentUserInfo.token = token;
        currentUserInfo.isLogin = true;
        currentUserInfo.photo = user.photo;
        currentUserInfo.provider = user.provider;
        currentUserInfo.category = user.category;
      }
      if (currentUserInfo.token) {
        await router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async (): Promise<void> => {
    await context.app.$apolloHelpers.onLogout("apollo-token");
    currentUserInfo.token = "";
    currentUserInfo.isLogin = false;
    currentUserInfo.fullname = "";
    currentUserInfo.email = "";
    currentUserInfo._id = "";
    currentUserInfo.photo = "";
    currentUserInfo.address = "";
    currentUserInfo.tel = "";
    currentUserInfo.category = "";
    currentUserInfo.provider = false;
    router.push("/login");
  };
  return { login, logout };
}
