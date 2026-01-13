import { useState } from "react";
import { useFormik } from "formik";
import RegisterContent from "./RegisterContent";
import { registerSchema } from "../../schema/registerSchema";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    context: {
      isSignup: !haveAccount, // 🔥 THIS IS THE KEY
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      console.log("API KEY:", process.env.REACT_APP_FIREBASE_API_KEY);
      try {
        if (!haveAccount) {
          // 🔴 SIGN UP
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );

          // Save display name
          await updateProfile(userCredential.user, {
            displayName: values.name,
          });

          // 👉 Switch to Sign In
          setHaveAccount(true);

          // 👉 Keep email + password filled
          formik.setValues({
            name: "",
            email: values.email,
            password: values.password,
          });
        } else {
          // 🔵 SIGN IN
          const userCredential = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );

          // 👉 Redirect to browse page
          navigate("/browse");
        }
      } catch (error) {
        console.error(error.code);

        // Friendly Firebase error handling
        if (error.code === "auth/email-already-in-use") {
          setErrors({ email: "Email already in use" });
        }
        if (error.code === "auth/invalid-credential") {
          setErrors({ email: "Invalid email or password" });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div>
      <RegisterContent
        formik={formik}
        haveAccount={haveAccount}
        setHaveAccount={setHaveAccount}
      />
    </div>
  );
};

export default Register;
