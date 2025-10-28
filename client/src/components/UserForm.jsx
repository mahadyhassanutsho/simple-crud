import { useState } from "react";

const UserForm = ({ onAddUser }) => {
  const [form, setForm] = useState({ username: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Please enter a username.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newUser = {
      username: form.username.trim(),
      email: form.email.trim(),
    };

    onAddUser(newUser);
    setForm({ username: "", email: "" });
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-8 bg-white rounded-md drop-shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-center pb-4">Add New User</h2>

      {/* Username Input */}
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className={`w-full px-4 py-2 border border-gray-600 rounded-md focus:ring ${
            errors.username
              ? "border-red-500 focus:ring-red-300"
              : "focus:ring-blue-300"
          }`}
        />
        {errors.username && (
          <p className="text-red-600 text-sm mt-1">{errors.username}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border border-gray-600 rounded-md focus:ring ${
            errors.email
              ? "border-red-500 focus:ring-red-300"
              : "focus:ring-blue-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium cursor-pointer"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
