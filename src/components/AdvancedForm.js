import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "./Schemas/Index";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const AdvancedForm = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <CustomInput
            label="Username"
            name="username" //the name attribute must match with the specific ke in initialValues
            type="text"
            placeholder="Enter your user name"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="Please Select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
            <option value="not valid">Invalid option</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          <button disabled={props.isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
