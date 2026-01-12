import { useFormik } from "formik";
import RegisterContent from "./RegisterContent";
import { registerSchema } from "../../schema/registerSchema";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
      keepLoggedIn: false,
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <RegisterContent formik={formik} />
    </div>
  );
};

export default Register;
