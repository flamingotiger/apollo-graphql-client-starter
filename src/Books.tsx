import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;
const Books: React.FC = () => {
  const { loading, error, data } = useQuery(BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(
    (book: { title: string; author: string }, index: number) => (
      <div key={index}>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
    )
  );
};

export default Books;
