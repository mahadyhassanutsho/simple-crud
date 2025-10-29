import { useState } from "react";

import { deleteUser, getUsers } from "../lib/api";

import UserList from "../components/UserList";
import Loading from "../components/Loading";
import { useLoaderData } from "react-router";

const UsersPage = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers || []);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    setUsers(data);
    setLoading(false);
  };

  const deleteUserHandler = async (user) => {
    const res = await deleteUser(user);
    console.log(res);
    await loadUsers();
  };

  return loading ? (
    <Loading />
  ) : (
    <UserList users={users} onDelete={deleteUserHandler} />
  );
};

export default UsersPage;
