import { useState, useEffect } from "react";

import { postUser, deleteUser, getUsers } from "./lib/api";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Loading from "./components/Loading";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    setUsers(data);
    setLoading(false);
  };

  const addUserHandler = async (user) => {
    const res = await postUser(user);
    console.log(res);
    await loadUsers();
  };

  const deleteUserHandler = async (user) => {
    const res = await deleteUser(user);
    console.log(res);
    await loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center gap-8">
      {loading ? (
        <Loading />
      ) : (
        <UserList users={users} onDelete={deleteUserHandler} />
      )}

      <UserForm onAddUser={addUserHandler} />
    </div>
  );
};

export default App;
