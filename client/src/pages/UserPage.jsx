import { Link, useLoaderData } from "react-router";

const UserPage = () => {
  const user = useLoaderData();

  return (
    <div className="w-full min-w-fit max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6 space-y-6 transition hover:shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${user.username}`}
            alt={user.username}
            className="w-20 h-20 rounded-full border-2 border-blue-100 shadow-sm"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {user.username}
            </h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            to={`/user/${user._id}/delete`}
            className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition-all hover:scale-[1.03] cursor-pointer"
          >
            Update
          </Link>
          <Link
            to={`/user/${user._id}/update`}
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition-all hover:scale-[1.03] cursor-pointer"
          >
            Delete
          </Link>
        </div>
      </div>

      <div className="border-t pt-4 text-gray-600 text-sm">
        <p>
          <span className="font-semibold">User ID:</span> {user._id}
        </p>
        <p>
          <span className="font-semibold">Joined:</span>{" "}
          {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default UserPage;
