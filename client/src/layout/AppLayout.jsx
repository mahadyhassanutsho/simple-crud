import { Outlet } from "react-router";

import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 space-y-10">
      <Navbar />

      <div className="flex flex-col items-center justify-center gap-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
