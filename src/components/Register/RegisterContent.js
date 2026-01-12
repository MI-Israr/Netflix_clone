import { useState } from "react";
import logo from "../../assets/images/netflix_logo.png";
import bgImage from "../../assets/images/netflix-bg.jpg";
import RegisterFormInput from "./RegisterFormInput";

const RegisterContent = ({ formik }) => {
  const { handleSubmit, handleBlur, handleChange, errors, values, touched } =
    formik;
  const [haveAccount, setHaveAccount] = useState(false);
  const handleToggleRegister = () => {
    setHaveAccount(!haveAccount);
  };
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
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
          <div className="flex flex-col w-full max-w-md bg-black/75 gap-4 p-6 sm:p-8 md:p-12 ">
            <h1 className="font-bold text-white mb-5 text-2xl sm:text-3xl md:text-4xl">
              {haveAccount ? "Sign Up" : "Sign In"}
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {haveAccount && (
                <RegisterFormInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name}
                  touched={touched.name}
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
              />
              <button className="bg-red-600 w-full rounded py-3 text-[18px] font-semibold text-white hover:bg-red-700 transition">
                {haveAccount ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <div className="text-white flex gap-1">
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
