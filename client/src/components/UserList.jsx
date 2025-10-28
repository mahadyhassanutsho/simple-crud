const UserList = ({ users, onDelete }) => {
  return (
    <div className="max-w-3xl mx-auto mt-8 grid sm:grid-cols-2 gap-4">
      {users.map((user) => (
        <div
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
            onClick={() => onDelete(user._id)}
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg shadow-sm transition cursor-pointer"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
