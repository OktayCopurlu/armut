import { REGISTER, EDIT_USER, ADD_PHOTO } from "./request";
import { useRouter, useContext } from "@nuxtjs/composition-api";
import verifyJWT from "./verifyJWT";
import {
  LoginInfoType,
  SignUpPropsType,
  EditUserPropsType,
  PhotoType,
  TokenType,
} from "./types";
import { currentUserInfo } from "./index";

export function useStartServe(): {
  register: SignUpPropsType;
} {
  const context = useContext();
  const router = useRouter();
  const client = context.app?.apolloProvider.defaultClient; // test is faild that is what we use ? after app

  const register: SignUpPropsType = async (
    fullname,
    email,
    password,
    category,
    status,
    canton,
    city,
    address,
    tel,
    provider
  ): Promise<void> => {
    const payload = {
      fullname,
      email,
      password,
      category,
      status,
      canton,
      city,
      address,
      tel,
      provider,
    };
    try {
      const response: LoginInfoType = await client.mutate({
        mutation: REGISTER,
        variables: payload,
      });
      const token = response.data.register.token;

      await context.app.$apolloHelpers.onLogin(token, "_", "");
      if (token) {
        const user = verifyJWT(token);
        currentUserInfo.fullname = user.fullname;
        currentUserInfo.email = user.email;
        currentUserInfo._id = user._id;
        currentUserInfo.token = token;
        currentUserInfo.isLogin = true;
        currentUserInfo.category = user.category;
        currentUserInfo.provider = user.provider;
        currentUserInfo.canton = user.canton;
        currentUserInfo.city = user.city;
      }
      if (currentUserInfo.token) {
        await router.push("/my-account");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { register };
}
export function useEditUser(): {
  editUser: EditUserPropsType;
  addPhoto: PhotoType;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;

  const editUser: EditUserPropsType = async (
    address,
    email,
    fullname,
    tel,
    _id,
    canton,
    city,
  ): Promise<void> => {
    const payload = {
      address,
      email,
      fullname,
      tel,
      _id,
      canton,
      city,
    };
    try {
      const response: TokenType = await client.mutate({
        mutation: EDIT_USER,
        variables: payload,
      });
      const token = response.data.editUser.token;

      await context.app.$apolloHelpers.onLogin(token, "_", "");
      if (token) {
        const user = verifyJWT(token);

        currentUserInfo.fullname = user.fullname;
        currentUserInfo.email = user.email;
        currentUserInfo._id = user._id;
        currentUserInfo.provider = user.provider;
        currentUserInfo.token = token;
        currentUserInfo.isLogin = true;
        currentUserInfo.canton = user.canton;
        currentUserInfo.city = user.city;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addPhoto: PhotoType = async (_id, photo) => {
    const payload = {
      _id,
      photo,
    };
    const client = context.app?.apolloProvider.defaultClient;
    try {
      const response: TokenType = await client.mutate({
        mutation: ADD_PHOTO,
        variables: payload,
      });
      const token = response.data.addPhoto.token;
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
        currentUserInfo.canton = user.canton;
        currentUserInfo.city = user.city;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { editUser, addPhoto };
}
