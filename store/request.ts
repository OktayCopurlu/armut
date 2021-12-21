import { gql } from "graphql-tag";

export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export const REGISTER = gql`
  mutation (
    $fullname: String!
    $email: String!
    $password: String!
    $category: String
    $status: String
    $address: String!
    $tel: String!
    $provider: Boolean!
  ) {
    register(
      fullname: $fullname
      email: $email
      password: $password
      category: $category
      status: $status
      address: $address
      tel: $tel
      provider: $provider
    ) {
      token
    }
  }
`;
export const EDIT_USER = gql`
  mutation (
    $address: String!
    $email: String!
    $fullname: String!
    $tel: String!
    $_id: ID!
  ) {
    editUser(
      address: $address
      email: $email
      fullname: $fullname
      tel: $tel
      _id: $_id
    ) {
      token
    }
  }
`;
export const ADD_PHOTO = gql`
  mutation ($_id: ID!, $photo: String!) {
    addPhoto(_id: $_id, photo: $photo) {
      token
    }
  }
`;

export const GET_USER_PHOTO = gql`
  mutation ($_id: ID!) {
    getUserPhoto(_id: $_id) {
      photo
    }
  }
`;
export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      categories
    }
  }
`;

export const GET_CATEGORY = gql`
  query ($mainCategory: String!) {
    getServiceCategory(mainCategory: $mainCategory) {
      _id
      mainCategory
      category
      users
      photo
    }
  }
`;

export const CREATE_ASKED_SERVICE = gql`
  mutation (
    $fullname: String!
    $email: String!
    $tel: String!
    $canton: String!
    $city: String!
    $date: String!
    $message: String!
    $category: String!
    $asked_service_user: ID!
  ) {
    createAsked_service(
      fullname: $fullname
      email: $email
      tel: $tel
      canton: $canton
      city: $city
      date: $date
      message: $message
      category: $category
      asked_service_user: $asked_service_user
    ) {
      asked_service_user
    }
  }
`;
export const GET_ASKED_SERVICE = gql`
  query ($category: String!) {
    getAsked_service(category: $category) {
      _id
      canton
      city
      date
      message
      category
      asked_service_user
      fullname
      email
      tel
    }
  }
`;
export const GET_CANTONS = gql`
  query {
    getCantons {
      canton
    }
  }
`;
export const GET_CITIES = gql`
  query ($canton: String!) {
    getCities(canton: $canton) {
      _id
      canton
      gemainde
    }
  }
`;
export const SET_CANTON = gql`
  mutation ($canton: String!, $gemainde: [String]!) {
    setUpCanton(canton: $canton, gemainde: $gemainde) {
      canton
      gemainde
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation (
    $price: String
    $message: String!
    $senderID: ID!
    $receiverID: ID!
  ) {
    createMessage(
      price: $price
      message: $message
      senderID: $senderID
      receiverID: $receiverID
    ) {
      _id
    }
  }
`;

export const GET_USER_MESSAGES = gql`
  query ($_id: ID!) {
    getUserMessages(_id: $_id) {
      _id
      senderID
      receiverID
      message
      price
    }
  }
`;
export const GET_USER_INFO = gql`
  query ($_id: ID!) {
    getUserInfo(_id: $_id) {
      _id
      fullname
      email
      tel
      status
      photo
      messages
      asked_service
      given_service
      category
    }
  }
`;
