import "../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.tsx";
import Login from "./Login.tsx";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
    },

    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
