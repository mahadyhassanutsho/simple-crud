import { Link } from "react-router";

const UserList = ({ users, onDelete }) => {
  if (!users.length) {
    return (
      <div className="max-w-3xl mx-auto mt-16 text-center text-gray-700">
        <p className="text-lg font-medium">🚫 No users found.</p>
        <p className="text-sm text-gray-500">
          Try adding some users to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-w-fit max-w-md mx-auto mt-4 grid sm:grid-cols-2 gap-4">
      {users.map((user) => (
        <Link
          to={`/user/${user._id}`}
          key={user._id}
          className="flex items-center justify-between gap-4 bg-white rounded-2xl shadow-md p-4 hover:scale-[1.02] transition"
        >
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

          <button
            onClick={(e) => {
              e.preventDefault(); // prevent navigation when deleting
              onDelete(user._id);
            }}
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg shadow-sm transition cursor-pointer"
          >
            Delete
          </button>
        </Link>
      ))}
    </div>
  );
};

export default UserList;
