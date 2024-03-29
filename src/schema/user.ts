import { gql } from "apollo-boost";
import { PostItem } from "./post";

export interface User {
  id: string;
  name: string;
  posts: PostItem[];
}

export const USER_ME = gql`
  query {
    me {
      name
    }
  }
`

export const ADD_USER = gql`
  mutation {
    createUser(name: "username", password: "password") {
      id
      name
    }
  }
`;

export const AUTH_LOGIN = gql`
  query login($name: String!, $password: String!) {
    login(name: $name, password: $password){
      token 
    }
  }
`;
