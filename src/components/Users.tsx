import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { User, USERS } from "../query/users";

const Users: React.FC = () => {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <ul>
      {data.users.map((user: User) => (
        <li key={user.id}>
          <img src={user.image} alt={user.username + "image"} />
          <p>{user.email}</p>
          <p>{user.jobTitle}</p>
          <p>{user.username}</p>
        </li>
      ))}
    </ul>
  );
};

export default Users;