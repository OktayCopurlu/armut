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
  provider: false,
  category: "",
});

interface StateType {
  categories: string[];
  mainCategory: Object[];
}
export const states: StateType = reactive({
  categories: [],
  mainCategory: [],
});
