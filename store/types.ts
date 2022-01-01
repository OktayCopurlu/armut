import { ComputedRef } from "@nuxtjs/composition-api";

export interface LoginFormType {
  password: string;
  email: string;
}
export interface UserPageType {
  fullname: string;
  email: string;
  _id: string;
  address: string;
  tel: string;
  photo: any;
  canton: string;
  city: string;
}

export interface currentUserInfoType extends UserPageType {
  token: string;
  isLogin: boolean;
  provider: boolean;
  category: string;
}

export interface RegisterFormType {
  fullname: string;
  email: string;
  password: string;
  tel: string;
  address: string;
  status: string;
  category: string;
  service?: string;
  canton: string;
  city: string;
  categories: string[];
  filteredCategories: string[];
  cantons: string[] | boolean[];
  cities: string[] | object[];
}

export type SignUpPropsType = (
  fullname: string,
  email: string,
  password: string,
  tel: string,
  address: string,
  status: string,
  canton: string,
  city: string,
  category: string,
  provider: boolean,
  service?: string
) => Promise<void>;

export type EditUserPropsType = (
  fullname: string,
  email: string,
  _id: string,
  address: string,
  tel: string,
  canton: string,
  city: string
) => Promise<void>;

export interface LoginInfoType {
  data: {
    login: {
      token: string;
    };
    createUser: {
      token: string;
    };
    register: {
      token: string;
    };
  };
}
export type PhotoType = (
  _id: string,
  photo: string | ArrayBuffer
) => Promise<void>;

export interface CantonType {
  _id: string;
  canton: string;
}
export interface AskServiceFormType {
  city: string;
  canton: string;
  message: string;
  date: string;
  category: string;
  cantons: CantonType[] | boolean[];
  cities: Object[];
}

export interface Categories {
  fullname: string;
  email: string;
  tel: string;
  asked_service_user: string;
  canton: string;
  _id: string;
  city: string;
  message: string;
  category: string;
}

export interface Asked_serviceType {
  asked_services: Categories[];
  userCategory: string;
}
export interface RezervationType {
  rezervations: Categories[];
  _id: string;
}
export interface AllCategoryType {
  data: {
    getAllCategories: {
      categories: string[];
    }[];
  };
}
export interface StateType {
  categories: string[];
  mainCategory: ServiceCategoryType[];
  cantons: Object[];
  cities: Object[];
}

export interface ServiceCategoryType {
  data: {
    getServiceCategory: {
      _id: string;
      mainCategory: string;
      category: string;
      users: string[];
    };
  };
}

export interface TokenType {
  data: {
    editUser: {
      token: string;
    };
    addPhoto: {
      token: string;
    };
  };
}

export interface CategoryType {
  categories: any[];
}
export interface MessageType {
  _id?: string;
  price: string;
  message: string;
  senderID: string;
  receiverID: string;
}
export interface UserMessagesType extends MessageType {
  messages: MessageType[];
  users: string[] | boolean[];
  display?: boolean;
  apperance?: boolean;
}
export interface ClientUserInfoType {
  photo: string;
  messages: string[];
  asked_service: string[];
  given_service: string[];
  category: string;
  _id: string;
  fullname: string;
  email: string;
  tel: string;
  status: string;
}
