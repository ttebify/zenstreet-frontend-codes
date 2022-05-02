import React from "react";
import { Formik, Form } from "formik";
import TextInput from "../../Forms/AuthForms/TextInput";
import SectionHeading from "../SectionHeading";
import useToast from "../../../hooks/useToast";
import { AiOutlineMail } from "react-icons/ai";
import { object, string } from "yup";
import Button from "../../Buttons/Button";

export default function ChangeEmailForm() {
  //   const [submitting, setSubmitting] = useState(false);
  const { toastSuccess } = useToast();

  const formValidationSchema = object({
    email: string().email().required().trim(),
  });

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={formValidationSchema}
      onSubmit={({ email }) => {
        toastSuccess("Email address changed. New email is " + email);
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
        id="change-email-form"
        className="flex flex-row flex-wrap space-y-3 md:max-w-sm w-full md:w-1/2"
      >
        <SectionHeading>Change Your Email Address</SectionHeading>
        <TextInput
          type="email"
          name="email"
          icon={<AiOutlineMail />}
          inputId="email"
          label="Email"
          placeholder="example@gmail.com"
        />
        <Button
          type="submit"
        //   disabled={submitting}
        //   loading={submitting}
        >
          Change Email
        </Button>
      </Form>
    </Formik>
  );
}
