import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { BookItem, BOOKS } from "./query/books";

const Books: React.FC = () => {
  const { loading, error, data } = useQuery(BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map((book: BookItem) => (
    <div key={book.id}>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </div>
  ));
};

export default Books;
