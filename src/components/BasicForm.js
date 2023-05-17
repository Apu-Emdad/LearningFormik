import { Formik, useFormik } from "formik";
import { basicSchema } from "./Schemas/Index";

const handleFormSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // actions.resetForm();
};

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: handleFormSubmit,
  });
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = formik;

  console.log(touched);

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      {/* ===== Email starts ==== */}
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        type="email"
        placeholder="Enter your email"
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
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
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
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
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
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
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      {/* ===== confirm password ends ==== */}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
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
2. {touched} = formik won't work if we don't initiate onBlur = {handleBlur}
3. See this documentation to learn about <Formik /> component. 
==========*/
