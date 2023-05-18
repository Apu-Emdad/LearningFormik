import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log("username field:", field);
  console.log("username meta:", meta);
  console.log("username helpers:", helpers);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomSelect;
