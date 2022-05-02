import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Link from "../../Link";
import Button from "../../Buttons/Button";
import useAuthContext from "../../../hooks/useAuthContext";
import TextInput from "./TextInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useToast from "../../../hooks/useToast";
import { sendPasswordResetLink } from "../../../utils/auth";

export default function PasswordResetForm() {
  const [submitting, setSubmitting] = useState(false);

  const { toastInfo, toastError } = useToast();

  const sendPasswordLink = async (
    values: { email: string },
    resetForm: () => void
  ): Promise<void> => {
    setSubmitting(true);
    sendPasswordResetLink(values.email)
      .then((msg) => {
        resetForm();
        toastInfo(msg);
      })
      .catch(() => {
        toastError("Sorry, Something went wrong from our end.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const formValidationSchema = Yup.object({
    email: Yup.string().email().required().min(8).trim(),
  });

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={formValidationSchema}
      onSubmit={(values, { resetForm }) => {
        sendPasswordLink(values, resetForm);
      }}
    >
      <Form
        autoComplete="off"
        noValidate
        id="reset-password-form"
        className="flex flex-row flex-wrap space-y-3 max-w-md mx-auto"
      >
        <h1>Password Reset</h1>
        <TextInput
          type="email"
          name="email"
          icon={<AiOutlineMail />}
          inputId="email"
          label="Enter your email address"
          placeholder="example@gmail.com"
        />
        <div className="w-full !mt-6">
          <Button
            className="px-10 py-3 block mx-auto"
            type="submit"
            disabled={submitting}
            loading={submitting}
          >
            Request Password Reset
          </Button>
          <p className="text-center text-base mt-2">
            <Link to="/app/login" className="font-medium text-cyan-600">
              Back to Login Page
            </Link>
          </p>
        </div>
      </Form>
    </Formik>
  );
}
