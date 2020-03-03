import React, { ChangeEvent, FormEvent } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { AUTH_LOGIN } from "../schema/user";

const Login: React.FC<{ setUser: () => void }> = ({ setUser }) => {
  const [name, setName] = React.useState("hong");
  const [password, setPassword] = React.useState("pw");
  const [handleLogin, { data }] = useLazyQuery(AUTH_LOGIN, {
    variables: { name, password }
  });

  React.useEffect(() => {
    if (data && data.login.token) {
      window.localStorage.setItem("token", data.login.token);
    }
  }, [data]);

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <label>NAME</label>
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <label>PASSWORD</label>
      <input
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <button type="submit">login</button>
    </form>
  );
};
export default Login;
