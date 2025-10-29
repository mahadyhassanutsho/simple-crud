import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center gap-8">
      <Outlet />
    </div>
  );
};

export default Root;
