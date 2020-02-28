import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import Users from "./components/Users";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>
        Apollo graphql starter
      </h1>
      <Login />
      <>
        <h2>Post List</h2>
        <PostForm />
        <Posts />
        <h2>User List</h2>
        <Users />
      </>
    </div>
  );
}

export default App;
