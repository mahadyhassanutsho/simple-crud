import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Simple Crud</h1>

      <div className="flex gap-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition ${
              isActive
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-700 hover:bg-blue-100"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition ${
              isActive
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-700 hover:bg-blue-100"
            }`
          }
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
