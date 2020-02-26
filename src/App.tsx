import React from "react";
import Books from "./components/Books";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      🚀Apollo graphql starter
      <BookForm />
      <Books />
    </div>
  );
}

export default App;
