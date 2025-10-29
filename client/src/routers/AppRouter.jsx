import { createBrowserRouter, RouterProvider } from "react-router";

import { getUser, getUsers } from "../lib/api";

import AppLayout from "../layout/AppLayout";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import UsersPage from "../pages/UsersPage";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { path: "", Component: HomePage },
      {
        path: "users",
        Component: UsersPage,
        HydrateFallback: Loading,
        loader: getUsers,
      },
      {
        path: "user/:id",
        Component: UserPage,
        HydrateFallback: Loading,
        loader: ({ params }) => getUser(params.id),
      },
    ],
  },
]);

const AppRouter = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default AppRouter;
