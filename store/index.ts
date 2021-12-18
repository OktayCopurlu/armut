import { reactive } from "@nuxtjs/composition-api";
import { UserInfoType } from "./types";

export const userInfo: UserInfoType = reactive({
  fullname: "",
  email: "",
  _id: "",
  token: "",
  address: "",
  tel: "",
  isLogin: false,
  photo: "",
});

interface StateType {
  categories: any[];
}
export const states: StateType = reactive({
  categories: [],
});
