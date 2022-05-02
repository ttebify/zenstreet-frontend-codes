import React from "react";
import { Formik, Form } from "formik";
import TextInput from "../../Forms/AuthForms/TextInput";
import SectionHeading from "../SectionHeading";
import useToast from "../../../hooks/useToast";
import { AiOutlineMail } from "react-icons/ai";
import { object, string } from "yup";
import Button from "../../Buttons/Button";

export default function ChangePhoneNumberForm() {
  //   const [submitting, setSubmitting] = useState(false);
  const { toastSuccess } = useToast();

  const formValidationSchema = object({
    phone: string().required().trim(),
  });

  return (
    <Formik
      initialValues={{
        phone: "",
      }}
      validationSchema={formValidationSchema}
      onSubmit={({ phone }) => {
        toastSuccess("Phone Number changed to " + phone);
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
        id="change-phone-number-form"
        className="flex flex-row flex-wrap space-y-3 md:max-w-sm w-full md:w-1/2"
      >
        <SectionHeading>Change Your Phone Number</SectionHeading>
        <TextInput
          type="text"
          name="phone"
          icon={<AiOutlineMail />}
          inputId="phone"
          label="Phone"
          placeholder="new phone number"
        />
        <Button
          type="submit"
        //   disabled={submitting}
        //   loading={submitting}
        >
          Change Phone
        </Button>
      </Form>
    </Formik>
  );
}
