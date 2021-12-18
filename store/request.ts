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
    $category: String!
    $status: String!
    $address: String!
    $tel: String!
  ) {
    register(
      fullname: $fullname
      email: $email
      password: $password
      category: $category
      status: $status
      address: $address
      tel: $tel
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
