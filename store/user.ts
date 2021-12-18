import { LOGIN, REGISTER } from "./request";
import { useRouter, useContext } from "@nuxtjs/composition-api";
import { LoginInfoType } from "./types";
import { userInfo } from "./index";
import verifyJWT from "./verifyJWT";

export function initAuth(): void {
  const context = useContext();
  const token: string = context.app.$apolloHelpers.getToken("apollo-token");
  if (token) {
    const user = verifyJWT(token);
    userInfo.fullname = user.fullname;
    userInfo.email = user.email;
    userInfo._id = user._id;
    userInfo.address = user.address;
    userInfo.tel = user.tel;
    userInfo.token = token;
    userInfo.isLogin = true;
    userInfo.photo = user.photo;
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
        userInfo.fullname = user.fullname;
        userInfo.email = user.email;
        userInfo._id = user._id;
        userInfo.address = user.address;
        userInfo.tel = user.tel;
        userInfo.token = token;
        userInfo.isLogin = true;
        userInfo.photo = user.photo;
      }
      if (userInfo.token) {
        await router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async (): Promise<void> => {
    await context.app.$apolloHelpers.onLogout("apollo-token");
    userInfo.token = "";
    userInfo.isLogin = false;
    userInfo.fullname = "";
    userInfo.email = "";
    userInfo._id = "";
    userInfo.photo = "";
    userInfo.address = "";
    userInfo.tel = "";
    router.push("/login");
  };
  return { login, logout };
}
