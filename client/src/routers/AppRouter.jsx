import { createBrowserRouter, RouterProvider } from "react-router";

import { getUser } from "../lib/api";

import Root from "../layout/Root";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "", Component: HomePage },
      { path: "users", Component: HomePage },
      {
        path: "user/:id",
        Component: UserPage,
        loader: ({ params }) => getUser(params.id),
      },
    ],
  },
]);

const AppRouter = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default AppRouter;
