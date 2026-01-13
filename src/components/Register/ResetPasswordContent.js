import logo from "../../assets/images/netflix_logo.png";
import bgImage from "../../assets/images/resetPassword-page.jpg";
import { Link } from "react-router-dom";
import RegisterFormInput from "./RegisterFormInput";

const ResetPasswordContent = ({ formik }) => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    values,
    touched,
    isSubmitting,
    status,
  } = formik;

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center px-10 py-6 border-b border-white/10">
        <img src={logo} alt="Netflix" className="w-36" />
        <Link
          to="/"
          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white font-semibold transition"
        >
          Sign In
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center min-h-[calc(100vh-120px)]">
        <div className="bg-white w-full max-w-md p-10 rounded-sm shadow-lg">
          <h1 className="text-2xl font-bold mb-3">
            Update password
          </h1>

          <p className="text-sm text-gray-700 mb-4">
            We will send you an email with instructions on how to reset your
            password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <RegisterFormInput
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              color="text-black"
            />

            <button
              disabled={isSubmitting}
              className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Email Me"}
            </button>
          </form>

          {/* Status Messages */}
          {status?.success && (
            <p className="text-green-600 text-sm mt-4">{status.success}</p>
          )}
          {status?.error && (
            <p className="text-red-600 text-sm mt-4">{status.error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordContent;
