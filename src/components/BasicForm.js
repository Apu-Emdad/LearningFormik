import { useFormik } from "formik";
import { basicSchema } from "./Schemas/Index";

const BasicForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
    });
  // console.log(values);
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
        id="age"
        type="password"
        placeholder="Enter your password"
      />
      {/* ===== password ends ==== */}

      {/* ===== confirm password starts ==== */}
      <label htmlFor="password">confirm password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age"
        type="password"
        placeholder="confirm password"
      />
      {/* ===== confirm password ends ==== */}
    </form>
  );
};
export default BasicForm;
