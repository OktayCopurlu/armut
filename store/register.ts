import { REGISTER, EDIT_USER, ADD_PHOTO } from "./request";
import { useRouter, useContext } from "@nuxtjs/composition-api";
import verifyJWT from "./verifyJWT";
import {
  LoginInfoType,
  SignUpPropsType,
  EditUserPropsType,
  PhotoType,
} from "./types";
import { userInfo } from "./index";

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
        userInfo.fullname = user.fullname;
        userInfo.email = user.email;
        userInfo._id = user._id;
        userInfo.token = token;
        userInfo.isLogin = true;
        userInfo.category = user.category;
        userInfo.provider = user.provider;
      }
      if (userInfo.token) {
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
    _id
  ): Promise<void> => {
    const payload = {
      address,
      email,
      fullname,
      tel,
      _id,
    };
    try {
      const response = await client.mutate({
        mutation: EDIT_USER,
        variables: payload,
      });
      const token = await response.data.editUser.token;

      await context.app.$apolloHelpers.onLogin(token, "_", "");
      if (token) {
        const user = verifyJWT(token);
        userInfo.fullname = user.fullname;
        userInfo.email = user.email;
        userInfo._id = user._id;
        userInfo.provider = user.provider;
        userInfo.token = token;
        userInfo.isLogin = true;
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
      const response = await client.mutate({
        mutation: ADD_PHOTO,
        variables: payload,
      });
      const token = response.data.addPhoto.token;
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
    } catch (error) {
      console.error(error);
    }
  };

  return { editUser, addPhoto };
}
