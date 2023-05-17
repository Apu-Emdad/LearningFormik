## id and initial values

1. The ids must match with the initial value attribute (`values.attribute`).
   Example:
   The below code will not take input because `id="confirmPasswor"` where `value = {values.confirmPassword}`

   ```jsx
   <input
     value={values.confirmPassword}
     id="confirmPasswor"
     type="password"
     placeholder="confirm password"
   />
   ```

2. `{touched} = formik` won't work if we don't initiate `onBlur = {handleBlur}`
3. See [this documentation](https://formik.org/docs/api/formik#example) to learn about `<Formik />` component.

## Yup Schema

1. `yup.object({...})` also works.
2. The `.shape({...})` method is basically used to concatenate two object schemas.
