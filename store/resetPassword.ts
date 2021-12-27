import { useContext } from "@nuxtjs/composition-api";
import { FORGOT_PASSWORD, RESET_PASSWORD } from "./request";

export function useForgotPassword(): {
  resetPassword(
    email: string,
    token: string,
    password: string
  ): Promise<{ data: { resetPassword: { token: string } } } | undefined>;
  forgotPassword(
    email: string
  ): Promise<{ data: { forgotPassword: { token: string } } } | undefined>;
} {
  const context = useContext();
  const client = context.app.apolloProvider.defaultClient;

  const forgotPassword = async (
    email: string
  ): Promise<{ data: { forgotPassword: { token: string } } } | undefined> => {
    try {
      const response = await client.mutate({
        mutation: FORGOT_PASSWORD,
        variables: { email },
      });
      const token: { data: { forgotPassword: { token: string } } } =
        response.data.forgotPassword.token;
      return token;
    } catch (error) {
      console.error(error);
    }
  };
  const resetPassword = async (
    email: string,
    token: string,
    password: string
  ): Promise<{ data: { resetPassword: { token: string } } } | undefined> => {
    try {
      const payload = {
        email,
        RESET_PASSWORD_KEY: "thisismyuniqesecretkey",
        token,
        password,
      };
      const response = await client.mutate({
        mutation: RESET_PASSWORD,
        variables: payload,
      });
      const result: { data: { resetPassword: { token: string } } } =
        response.data.resetPassword.token;
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  return { resetPassword, forgotPassword };
}
