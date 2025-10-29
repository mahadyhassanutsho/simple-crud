import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";

import { deleteUser } from "../lib/api";

const DeleteUserPage = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    setIsConfirmed(inputValue.trim() === user.username);
  }, [inputValue, user.username]);

  const handleDelete = async () => {
    const res = await deleteUser(user._id);
    console.log(res);
    navigate("/users");
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        ⚠️ You are about to delete{" "}
        <span className="text-red-600 font-bold">{user.username}</span>
      </h2>

      <p className="text-gray-500">
        This action <span className="font-semibold text-red-500">cannot</span>{" "}
        be undone.
        <br />
        Please type{" "}
        <span className="text-blue-600 font-mono">{user.username}</span> to
        confirm.
      </p>

      <div className="space-y-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`Type "${user.username}"`}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none text-center"
        />

        <button
          disabled={!isConfirmed}
          onClick={handleDelete}
          className={`w-full py-2.5 rounded-lg text-white font-medium transition-all ${
            isConfirmed
              ? "bg-red-500 hover:bg-red-600 hover:scale-[1.02] cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Delete User
        </button>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="text-gray-500 text-sm hover:text-blue-500 transition cursor-pointer"
      >
        Cancel
      </button>
    </div>
  );
};

export default DeleteUserPage;
