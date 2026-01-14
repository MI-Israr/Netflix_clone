import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold text-red-600">NETFLIX</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 px-4 py-2 rounded font-bold hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Navbar;
