import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

import { patchUser } from "../lib/api";
import { validateEmail } from "../lib/utils";

const UpdateUserPage = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username cannot be empty.";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be empty.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const res = await patchUser(user._id, { ...formData });

    console.log(res);

    setSubmitting(false);
    navigate(-1);
  };

  return (
    <div className="w-full min-w-fit max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Update User
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.username
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-400"
            }`}
            placeholder="Enter username"
          />
          {errors.username && (
            <p className="text-sm text-red-500 mt-1">{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-400"
            }`}
            placeholder="Enter email"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-2.5 rounded-lg font-medium text-white transition-all cursor-pointer ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 hover:scale-[1.02]"
          }`}
        >
          {submitting ? "Updating..." : "Update User"}
        </button>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full text-sm text-gray-500 hover:text-blue-500 transition mt-2"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateUserPage;
