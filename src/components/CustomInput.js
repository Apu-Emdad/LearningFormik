import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  /* 
  field =  {
    "name": "username",
    "value": "Jared",
    onBlur : ƒ () ,
    onChange : ƒ (),
}
  */

  /*
  meta = {
  value: "jared"
  error: undefined,
  initialError: undefined,
  initialTouched: false,
  initialValue: "Jared",
  touched: false,
  value: "Jared"
}
  */

  /* 
  helpers = {setValue: ƒ, setTouched: ƒ, setError: ƒ}
  */

  console.log("username field:", field);
  console.log("username meta:", meta);
  console.log("username helpers:", helpers);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomInput;
