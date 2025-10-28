const UserList = ({ users }) => {
  return (
    <div className="max-w-3xl mx-auto mt-8 grid sm:grid-cols-2 gap-4">
      {users.map((user) => (
        <div
          key={user._id}
          className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-4 hover:scale-[1.02] transition"
        >
          <img
            src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${user.username}`}
            alt={user.username}
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h3 className="font-bold text-lg">{user.username}</h3>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
