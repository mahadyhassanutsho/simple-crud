import { useLoaderData } from "react-router";

const UserPage = () => {
  const user = useLoaderData();

  return (
    <div className="flex items-center justify-between gap-4 bg-white rounded-2xl shadow-md p-4">
      <div className="flex items-center gap-4">
        <img
          src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${user.username}`}
          alt={user.username}
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h3 className="font-bold text-lg">{user.username}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>

      <button className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg shadow-sm transition cursor-pointer">
        Delete
      </button>
      <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-sm transition cursor-pointer">
        Update
      </button>
    </div>
  );
};

export default UserPage;
