import { reactive, Ref, ref } from "@nuxtjs/composition-api";
import {
  StateType,
  currentUserInfoType,
  ClientUserInfoType,
  UserMessagesType,
} from "./types";

export const currentUserInfo: currentUserInfoType = reactive({
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
  canton: "",
  city: "",
});

export const states: StateType = reactive({
  categories: [],
  mainCategory: [],
  cantons: [],
  cities: [],
});

export const messageState: UserMessagesType = reactive({
  price: "",
  message: "",
  senderID: "",
  receiverID: "",
  messages: [],
  users: [],
});

export const clientUserInfo: ClientUserInfoType = reactive({
  _id: "",
  fullname: "",
  email: "",
  tel: "",
  status: "",
  photo: "",
  messages: [],
  asked_service: [],
  given_service: [],
  category: "",
});
export const askedService = reactive({
  asked_services: [],
});

export const search: Ref<string> = ref("");
export const rezervationsID: Ref<string> = ref("");
