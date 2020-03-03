import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import Login from "./components/Login";
import { useLazyQuery } from "@apollo/react-hooks";
import { USER_ME } from "./schema/user";

function App() {
  const [setUser, { data }] = useLazyQuery(USER_ME);

  return (
    <div className="App">
      <h1>Apollo graphql starter</h1>
      {data ? data.name : <Login setUser={() => setUser()} />}
      <button
        type="button"
        onClick={() => {
          window.localStorage.removeItem("token");
        }}
      >
        Logout
      </button>
      <>
        <h2>Post List</h2>
        <PostForm />
        <Posts />
      </>
    </div>
  );
}

export default App;
