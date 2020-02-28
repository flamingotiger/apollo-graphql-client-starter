import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { User, USERS } from "../schema/user";

const Users: React.FC = () => {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <ul>
      {data.users.map((user: User) => (
        <li key={user.id}>
          <p>{user.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Users;