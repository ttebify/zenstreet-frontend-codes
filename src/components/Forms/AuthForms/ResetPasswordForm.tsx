import React, { useState } from "react";
import Link from "../../Link";
import Button from "../../Buttons/Button";
import TextInput from "./TextInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useToast from "../../../hooks/useToast";
import { resetPassword } from "../../../utils/auth";
import useQuery from "../../../hooks";
import { navigateToPath } from "../../../utils";

export default function ResetPasswordForm() {
  const [submitting, setSubmitting] = useState(false);

  const { toastSuccess, toastError } = useToast();
  // Get the email and token from the url
  const qEmail = useQuery().get("email");
  const qToken = useQuery().get("token");

  const formValidationSchema = Yup.object({
    password: Yup.string().required("this field is required").min(8).trim(),
    password_confirmation: Yup.string()
      .required("this field is required")
      .oneOf([Yup.ref("password"), null], "passwords must match"),
  });

  return (
    <Formik
      initialValues={{ password: "", password_confirmation: "" }}
      validationSchema={formValidationSchema}
      onSubmit={(values, { resetForm }) => {
          // Check if email and token are available in the URL
        if (qEmail === null || qToken === null) {
          toastError("Invalid link.");
          return;
        }
        const data = { ...values, email: qEmail, token: qToken };
        setSubmitting(true);
        resetPassword(data)
          .then((msg) => {
            resetForm();
            toastSuccess(msg);
            navigateToPath("/app/login");
          })
          .catch(() => {
            toastError("Sorry, Something went wrong from our end.");
          })
          .finally(() => {
            setSubmitting(false);
          });
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
        <div className="w-full !mt-6">
          <Button
            className="px-10 py-3 block mx-auto"
            type="submit"
            disabled={submitting}
            loading={submitting}
          >
            Reset Password
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
