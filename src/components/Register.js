import { useState } from "react";
import logo from "../assets/images/netflix_logo.png";
import bgImage from "../assets/images/netflix-bg.jpg";

const Register = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const handleToggleRegister = () => {
    setHaveAccount(!haveAccount);
  };
  return (
    <div
      className="min-h-screen w-full bg-linear-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        <div className="py-6 px-12">
          <div className="w-40">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="min-h-[calc(100vh-120px)] flex justify-center items-center ">
          <div className="flex flex-col w-[480px] bg-black/75 gap-4 p-12">
            <h1 className="font-bold text-4xl text-white">Sign In</h1>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Email"
                className="py-3 px-4 rounded border border-gray-200 bg-transparent"
              />
              <input
                type="password"
                placeholder="Password"
                className="py-3 px-4 rounded border border-gray-200 bg-transparent"
              />
              <button className="bg-red-600 w-full rounded py-3 text-[18px] font-semibold text-white">
                {haveAccount ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <div className="text-white flex gap-1">
              <p>
                {haveAccount ? "New to Netflix?" : "Already have an account?"}
              </p>
              <div
                className="font-bold cursor-pointer"
                onClick={handleToggleRegister}
              >
                <p>{haveAccount ? "Sign Up" : "Sign In"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
