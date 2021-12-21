import { useContext } from "@nuxtjs/composition-api";
import { GET_USER_INFO } from "./request";

export function useUser(): {
  getUserInfo(_id: string): Promise<any>;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;
  const getUserInfo = async (_id: string) => {
    const response = await client.query({
      query: GET_USER_INFO,
      variables: { _id },
    });
    const user = response.data.getUserInfo;
    return user;

  };
  return { getUserInfo };
}
