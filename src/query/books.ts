import { gql } from "apollo-boost";

export interface BookItem {
  title: string;
  author: string;
}

export const BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

export const ADD_BOOK = gql`
  mutation {
    addBook(title: "Fox in Socks", author: "Dr. Seuss") {
      title
      author
    }
  }
`;
