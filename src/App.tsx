import React from "react";
import Books from "./components/Books";
import BookForm from "./components/BookForm";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>🚀Apollo graphql starter</h1>
      <h2>Book List</h2>
      <BookForm />
      <Books />
      <h2>User List</h2>
      <Users />
    </div>
  );
}

export default App;
