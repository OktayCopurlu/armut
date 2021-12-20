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
}

export interface UserInfoType extends UserPageType {
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
  categories: string[];
  filteredCategories: string[];
}

export type SignUpPropsType = (
  fullname: string,
  email: string,
  password: string,
  tel: string,
  address: string,
  status: string,
  category: string,
  provider: boolean,
  service?: string
) => Promise<void>;

export type EditUserPropsType = (
  fullname: string,
  email: string,
  _id: string,
  address: string,
  tel: string
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
  more_info: string;
  date: string;
  category: string;
  cantons: CantonType[];
  cities: Object[];
}

export interface Categories {
  canton: string;
  _id: string;
  city: string;
  more_info: string;
  category: string;
}
export interface OpportunityType {
  categories: Categories[];
  userCategory: string;
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
;
