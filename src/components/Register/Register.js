import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RegisterContent from "./RegisterContent";
import { registerSchema } from "../../schema/registerSchema";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

const Register = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (user) {
      navigate("/browse");
    }
  }, [user, navigate]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    context: {
      isSignup: !haveAccount,
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        if (!haveAccount) {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          await updateProfile(userCredential.user, {
            displayName: values.name,
          });
          setHaveAccount(true);
          formik.setValues({
            name: "",
            email: values.email,
            password: values.password,
          });
        } else {
          await signInWithEmailAndPassword(auth, values.email, values.password);
          navigate("/browse");
        }
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setErrors({ email: "Email already in use" });
        } else if (error.code === "auth/invalid-credential") {
          setErrors({ email: "Invalid email or password" });
        } else {
          setErrors({
            email: "An unexpected error occurred. Please try again.",
          });
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
