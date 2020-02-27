import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { PostItem, POSTS } from "../query/post";

const Posts: React.FC = () => {
  const { loading, error, data } = useQuery(POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.posts.map((post: PostItem) => (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  ));
};

export default Posts;
