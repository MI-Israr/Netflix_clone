import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

// Utils & Redux
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";

// Components
import Browse from "./components/Browse/Browse.js";
import Register from "./components/Register/Register.js";
import ResetPassword from "./components/Register/ResetPassword.js";
import ProtectedRoute from "./components/Register/auth/ProtectedRoute.js"; // 🔥 Import your gatekeeper
// import Header from "./components/Header.js";

// 1. Define the router OUTSIDE the component (Best Practice)
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/browse",
    element: (
      <ProtectedRoute>
        <Browse />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "*", // Catch-all for unknown URLs
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

    return () => unsubscribe(); // Cleanup the observer
  }, [dispatch]);

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-black">
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
