import UserForm from "./components/UserForm";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">Welcome to Simple Crud!</h1>

      <UserForm onAddUser={console.log} />
    </div>
  );
};

export default App;
