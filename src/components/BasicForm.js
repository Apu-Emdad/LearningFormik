import { Formik, useFormik } from "formik";
import { basicSchema } from "./Schemas/Index";

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  console.log(formik);

  return (
    <form autoComplete="off">
      {/* ===== Email starts ==== */}
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      {/* ===== Email ends ==== */}

      {/* ===== age starts ==== */}
      <label htmlFor="age">age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age"
        type="number"
        placeholder="Enter your age"
      />
      {/* ===== age ends ==== */}

      {/* ===== password starts ==== */}
      <label htmlFor="password">password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      {/* ===== password ends ==== */}

      {/* ===== confirm password starts ==== */}
      <label htmlFor="confirmPassword">confirm password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="confirm password"
      />
      {/* ===== confirm password ends ==== */}
      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
/* ===========
id and initial values
1. The ids must match with initial value attrbute (values.attribute). 
Example: 
The below code will not take input because id="confirmPasswor" where value = {values.confirmPassword}
<input value={values.confirmPassword}   id="confirmPasswor" type="password" placeholder="confirm password" /> 
==========*/
