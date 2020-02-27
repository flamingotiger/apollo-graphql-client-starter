import React, { ChangeEvent, FormEvent } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_POST } from "../query/post";

const PostForm: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [addBook] = useMutation(ADD_POST);
  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addBook({ variables: { title, author } });
      }}
    >
      <h3>PostForm</h3>
      <label>Title</label>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        value={title}
      />
      <label>Author</label>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setAuthor(e.target.value)
        }
        value={author}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
