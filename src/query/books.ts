import { gql } from "apollo-boost";

export interface BookItem {
  id: number;
  title: string;
  author: string;
}

export const BOOKS = gql`
  {
    books {
      id
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
