import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse/Browse.js";
import Register from "./components/Register/Register.js";

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
  ]);

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
