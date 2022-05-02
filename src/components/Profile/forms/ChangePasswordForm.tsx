import React from "react";
import { Formik, Form } from "formik";
import TextInput from "../../Forms/AuthForms/TextInput";
import SectionHeading from "../SectionHeading";
import useToast from "../../../hooks/useToast";
import { object, string, ref } from "yup";
import Button from "../../Buttons/Button";

export default function ChangePasswordForm() {
  //   const [submitting, setSubmitting] = useState(false);
  const { toastSuccess } = useToast();

  const formValidationSchema = object({
    password: string().required("this field is required").min(8).trim(),
    password_confirmation: string()
      .required("this field is required")
      .oneOf([ref("password"), null], "passwords must match"),
  });

  return (
    <Formik
      initialValues={{ password: "", password_confirmation: "" }}
      validationSchema={formValidationSchema}
      onSubmit={({ password }) => {
        toastSuccess("Password changed. New email is " + password);
        // setSubmitting(true);

        // try to login
        /* login(values)
          .then(() => {
            dispatch({
              type: "LOGIN",
              payload: {
                isInitialised,
                isAuthenticated: true,
                user: getUser(),
              },
            });
            resetForm();
          })
          .catch((err) => {
            const { message, errors } = err;
            // check if there are invalid error
            // Rough tho
            if (message == "The given data was invalid.") {
              toastError(message);
              setErrors(errors);
              return;
            }
            toastError("Something went wrong, please try again.");
          })
          .finally(() => {
            setSubmitting(false);
          }); */
      }}
    >
      <Form
        autoComplete="off"
        noValidate
        id="change-password-form"
        className="flex flex-row flex-wrap space-y-3 md:max-w-sm w-full md:w-1/2"
      >
        <SectionHeading>Change Your Password</SectionHeading>
        <TextInput
          type="password"
          name="password"
          icon={<></>}
          inputId="password"
          label="New password"
          placeholder=""
        />
        <TextInput
          type="password"
          name="password_confirmation"
          icon={<></>}
          inputId="password_confirmation"
          label="Confirm password"
          placeholder=""
        />
        <Button
          type="submit"
          //   disabled={submitting}
          //   loading={submitting}
        >
          Change Password
        </Button>
      </Form>
    </Formik>
  );
}
