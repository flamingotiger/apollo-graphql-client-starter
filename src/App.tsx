import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>🚀Apollo graphql starter</h1>
      <h2>Book List</h2>
      <PostForm />
      <Posts />
      <h2>User List</h2>
      <Users />
    </div>
  );
}

export default App;
