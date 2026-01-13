import logo from "../../assets/images/netflix_logo.png";
import bgImage from "../../assets/images/netflix-bg.jpg";
import RegisterFormInput from "./RegisterFormInput";
import { Link } from "react-router-dom";

const RegisterContent = ({ formik, haveAccount, setHaveAccount }) => {
  const { handleSubmit, handleBlur, handleChange, errors, values, touched } =
    formik;
  // const [loginViaLink, setLoginViaLink] = useState(false)
  const handleToggleRegister = () => {
    setHaveAccount(!haveAccount);
  };
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/45 pointer-events-none"></div>
      <div className="relative z-0">
        <div className="py-6 px-12">
          <div className="w-40">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="min-h-[calc(100vh-120px)] flex justify-center items-center ">
          <div className="flex flex-col w-full max-w-md bg-black/75 gap-5 p-6 sm:p-8 md:p-12 ">
            <h1 className="font-bold text-white mb-5 text-2xl sm:text-3xl md:text-4xl">
              {haveAccount ? "Sign In" : "Sign Up"}
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {!haveAccount && (
                <RegisterFormInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name}
                  touched={touched.name}
                  color="text-white"
                />
              )}
              <RegisterFormInput
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
                color="text-white"
              />
              <RegisterFormInput
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
                color="text-white"
              />

              <button
                type="submit"
                className="bg-red-600 w-full rounded py-3 text-[18px] font-semibold text-white hover:bg-red-700 transition"
              >
                {haveAccount ? "Sign In" : "Sign Up"}
              </button>
              {haveAccount && (
                <div className="flex justify-center items-center w-full">
                  <p className="text-gray-400">OR</p>
                </div>
              )}

              {haveAccount && (
                <button type="button" className="bg-gray-500/40 w-full rounded py-3 text-[18px] font-semibold text-white hover:bg-gray-500/40 transition">
                  Sign In via link
                </button>
              )}
              {haveAccount && (
                <div className="w-full text-gray-300 text-sm flex justify-center items-center">
                  <Link
                    to="/reset-password"
                    className=" hover:text-white hover:underline transition"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <div className="text-white text-[14px] flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-green-600 rounded-full border border-gray-300 outline-none bg-transparent cursor-pointer"
                  />
                  <label htmlFor="">Remember me</label>
                </div>
                <div>
                  <p className="cursor-pointer hover:underline">Need Help?</p>
                </div>
              </div>
            </form>
            <div className="text-white flex gap-1 text-[14px] mt-3">
              <p>
                {haveAccount ? "New to Netflix?" : "Already have an account?"}
              </p>
              <div
                className="font-bold cursor-pointer hover:underline"
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

export default RegisterContent;
