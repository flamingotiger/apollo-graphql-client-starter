import { gql } from "apollo-boost";

export interface User {
  id: number;
  image: string;
  jobTitle: string;
  email: string;
  username: string;
  password: string;
}

export const USERS = gql`
  {
    users {
      id
      image
      jobTitle
      email
      username
    }
  }
`;
