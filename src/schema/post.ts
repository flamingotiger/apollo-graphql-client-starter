import { gql } from "apollo-boost";
import { User } from "./user";

export interface PostItem {
  id: string;
  title: string;
  content: string;
  author: User;
}

export const POSTS = gql`
  query {
    posts {
      id
      title
      content
    }
  }
`;

export const ADD_POST = gql`
  mutation {
    createPost(title: "Post title 1", content: "Post content 1") {
      title
      content
    }
  }
`;
