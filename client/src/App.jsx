import { Suspense } from "react";

import { postUser, getUsers } from "./lib/api";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Loading from "./components/Loading";

const App = () => {
  const addUserHandler = (user) => {
    console.log(user);
    postUser(user).then(console.log);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center gap-8">
      <Suspense fallback={<Loading />}>
        <UserList usersPromise={getUsers()} />
      </Suspense>

      <UserForm onAddUser={addUserHandler} />
    </div>
  );
};

export default App;
