import { Link } from "react-router";

const UserList = ({ users }) => {
  if (!users.length) {
    return (
      <div className="max-w-3xl mx-auto mt-24 text-center text-gray-700">
        <p className="text-2xl font-semibold mb-2">🚫 No users found</p>
        <p className="text-sm text-gray-500">
          Add some users to bring this place to life!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-w-fit max-w-md mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <div
          key={user._id}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 p-6 flex flex-col items-center text-center"
        >
          <img
            src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${user.username}`}
            alt={user.username}
            className="w-20 h-20 rounded-full mb-4 border-2 border-blue-100 shadow-sm"
          />

          <div className="space-y-1 mb-4">
            <h3 className="text-lg font-bold text-gray-800">{user.username}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <div className="flex gap-3 mt-auto">
            <Link
              to={`/user/${user._id}`}
              className="px-4 py-2 text-sm rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-sm transition-all hover:scale-[1.03]"
            >
              View
            </Link>
            <Link
              to={`/user/${user._id}/delete`}
              className="px-4 py-2 text-sm rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium shadow-sm transition-all hover:scale-[1.03]"
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
