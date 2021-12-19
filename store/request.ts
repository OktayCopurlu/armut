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

export const CREATE_OFFER = gql`
  mutation (
    $canton: String!
    $city: String!
    $date: String!
    $more_info: String!
    $category: String!
    $offeredUser: ID!
  ) {
    createOffer(
      canton: $canton
      city: $city
      date: $date
      more_info: $more_info
      category: $category
      offeredUser: $offeredUser
    ) {
      offeredUser
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
      offeredUser
    }
  }
`;
