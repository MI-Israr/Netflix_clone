import { useFormik } from "formik";
import ResetPasswordContent from "./ResetPasswordContent";
import { sendPasswordResetEmail } from "firebase/auth";
import { resetPasswordSchema } from "../../schema/registerSchema";
import { auth } from "../../utils/firebase";

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      console.log(values);
    },
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        await sendPasswordResetEmail(auth, values.email);
        setStatus({
          success:
            "An email has been sent with instructions to reset your password.",
        });
      } catch (error) {
        setStatus({
          error: "Unable to send reset email. Please check your email.",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return <ResetPasswordContent formik={formik} />;
};

export default ResetPassword;
