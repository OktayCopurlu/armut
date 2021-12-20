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
    $canton: String!
    $city: String!
    $date: String!
    $more_info: String!
    $category: String!
    $asked_service_user: ID!
  ) {
    createAsked_service(
      canton: $canton
      city: $city
      date: $date
      more_info: $more_info
      category: $category
      asked_service_user: $asked_service_user
    ) {
      asked_service_user
    }
  }
`;
export const GET_OPPORTUNITY = gql`
  query ($category: String!) {
    getOpportunity(category: $category) {
      _id
      canton
      city
      date
      more_info
      category
      asked_service_user
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
    $senderName: String!
    $senderEmail: String!
    $senderID: ID!
    $receviedID: ID!
    $receiverName: String!
    $receiverEmail: String!
    $message: String!
  ) {
    createMessage(
      senderName: $senderName
      senderEmail: $senderEmail
      senderID: $senderID
      receviedID: $receviedID
      receiverName: $receiverName
      receiverEmail: $receiverEmail
      message: $message
    ) {
      _id
    }
  }
`;

export const GET_USER_MESSAGES = gql`
query(userID: ID!){
  getUserMessages(userID: $userID){
    _id
    senderID
    senderEmail
    senderName
    receiverName
    receiverEmail
    receiverID
    message
  }
}
`;
