import { useState, useEffect, Suspense } from "react";

import { postUser, getUsers } from "./lib/api";

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
    console.log(user);
    await postUser(user);
    await loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center gap-8">
      {loading ? <Loading /> : <UserList users={users} />}

      <UserForm onAddUser={addUserHandler} />
    </div>
  );
};

export default App;
