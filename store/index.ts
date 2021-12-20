import { reactive } from "@nuxtjs/composition-api";
import { StateType, UserInfoType } from "./types";

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


export const states: StateType = reactive({
  categories: [],
  mainCategory: [],
  cantons: [],
  cities: [],
});
