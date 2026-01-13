import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse/Browse.js";
import Register from "./components/Register/Register.js";
import ResetPassword from "./components/Register/ResetPassword.js";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
      exact: true,
    },
    {
      path: "/browse",
      element: <Browse />,
      exact: true,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
      exact: true,
    },
  ]);

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
