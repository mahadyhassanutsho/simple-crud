import { postUser } from "./lib/api";
import UserForm from "./components/UserForm";

const App = () => {
  const addUserHandler = (user) => {
    console.log(user);
    postUser(user).then(console.log);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center gap-8">
      <UserForm onAddUser={addUserHandler} />
    </div>
  );
};

export default App;
