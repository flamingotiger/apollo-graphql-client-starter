import React, { ChangeEvent, FormEvent } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_POST } from "../schema/post";

const PostForm: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [addBook] = useMutation(ADD_POST);
  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addBook({ variables: { title, content } });
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
      <label>Content</label>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setContent(e.target.value)
        }
        value={content}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
