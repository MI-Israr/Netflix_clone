import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/images/netflix_logo.png";
import { NAV_LINKS, USER_AVATAR, SEARCH_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const [isScrolled, setIsScrolled] = useState(false);

  const isBrowsePage = location.pathname === "/browse";

  // useEffect(() => {
  //   const handleScroll = () => setIsScrolled(window.scrollY > 0);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY > 10;
      setIsScrolled(isTop);
    };

    document.addEventListener("scroll", handleScroll, true);

    return () => document.removeEventListener("scroll", handleScroll, true);
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full flex items-center justify-between px-4 py-4 transition-colors duration-500 md:px-12 ${
        isScrolled
          ? "bg-black"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center gap-10">
        <Link to="/">
          <img src={logo} alt="Netflix Logo" className="w-24 md:w-40" />
        </Link>

        {user && isBrowsePage && (
          <ul className="hidden lg:flex items-center gap-5 text-sm text-gray-200">
            {NAV_LINKS.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:text-gray-300 transition whitespace-nowrap"
              >
                {link.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {user && (
        <div className="flex items-center gap-5 text-white">
          {isBrowsePage && (
            <button className="hidden sm:block">{SEARCH_ICON}</button>
          )}

          <div className="group relative flex items-center gap-1 cursor-pointer">
            <img src={USER_AVATAR} alt="User" className="w-8 h-8 rounded" />
            <span className="border-t-4 border-white transition-transform group-hover:rotate-180 duration-300"></span>

            <div className="absolute top-10 right-0 hidden group-hover:block pt-4">
              <div className="bg-black/90 border border-gray-700 w-40 flex flex-col p-2 text-sm">
                <p className="px-2 py-1 text-gray-400 italic">
                  Hi, {user.displayName}
                </p>
                <button
                  onClick={handleSignOut}
                  className="hover:underline text-left py-1 px-2 font-bold"
                >
                  Sign out of Netflix
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
