// import * as Yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

// export const registerSchema = Yup.object({
//   name: Yup.string()
//     .matches(/^[A-Za-z]+$/, "Enter valid Name")
//     .required("Name is required"),
//   email: Yup.string()
//     .email("Please enter a valid email")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .matches(passwordRules, "Please enter a Strong Password")
//     .required("Password is required"),
// });

import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const registerSchema = Yup.object({
  name: Yup.string().when("$isSignup", {
    is: true,
    then: (schema) =>
      schema
        .matches(/^[A-Za-z]+$/, "Enter valid Name")
        .required("Name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(passwordRules, "Please enter a Strong Password")
    .required("Password is required"),
});

export const resetPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
});
