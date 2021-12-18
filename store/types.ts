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
