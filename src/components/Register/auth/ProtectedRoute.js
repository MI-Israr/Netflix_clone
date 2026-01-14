import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);

  // We use a local state to track if we've given Redux enough time to sync with Firebase
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // We check the user every time the store updates.
    // If the user is found, we stop the "initialization" immediately.
    if (user !== null) {
      setIsInitializing(false);
    } else {
      // If user is null, we wait a brief moment to ensure Firebase has had a chance to respond.
      const timeout = setTimeout(() => {
        setIsInitializing(false);
      }, 1000); // 1 second is a safe buffer for most connections

      return () => clearTimeout(timeout);
    }
  }, [user]);

  // 1. While we are still waiting for the initial Firebase check:
  if (isInitializing && !user) {
    return (
      <div className="h-screen w-full bg-black flex flex-col justify-center items-center">
        {/* Netflix Red Spinner */}
        <div className="w-12 h-12 border-4 border-t-red-600 border-r-transparent border-b-red-600 border-l-transparent rounded-full animate-spin"></div>
        <p className="text-white mt-4 font-semibold tracking-widest uppercase text-xs">
          Loading...
        </p>
      </div>
    );
  }

  // 2. If initialization finished and there is still no user, kick them to login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // 3. If user exists, show the protected content (Browse)
  return children;
};

export default ProtectedRoute;
