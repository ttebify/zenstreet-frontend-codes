import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Link from "../../Link";
import Button from "../../Buttons/Button";
import useAuthContext from "../../../hooks/useAuthContext";
import TextInput from "./TextInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useToast from "../../../hooks/useToast";
import { getUser } from "../../../utils/auth";

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);

  const { login, dispatch, isInitialised } = useAuthContext();
  const { toastError } = useToast();

  const formValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address.")
      .required("this field is required")
      .trim(),
    password: Yup.string().required("this field is required").min(8).trim(),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        remember: false,
      }}
      validationSchema={formValidationSchema}
      onSubmit={(values, { resetForm, setErrors }) => {
        setSubmitting(true);
        // try to login
        login(values)
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
          });
      }}
    >
      <Form
        autoComplete="off"
        noValidate
        id="login-form"
        className="flex flex-row flex-wrap space-y-3 max-w-md mx-auto"
      >
        <h1>Sign In</h1>
        <TextInput
          type="email"
          name="email"
          icon={<AiOutlineMail />}
          inputId="email"
          label="Email"
          placeholder="example@gmail.com"
        />
        <TextInput
          type="password"
          name="password"
          icon={<></>}
          inputId="password"
          label="Password"
          placeholder="***"
        />
        <div className="w-full !mt-6">
          <Button
            className="px-10 py-3 block mx-auto"
            type="submit"
            disabled={submitting}
            loading={submitting}
          >
            Sign In
          </Button>
          <p className="text-center text-base mt-2">
            Don't Have an Account?{" "}
            <Link to="/app/register" className="font-medium text-cyan-600">
              Sign Up
            </Link>
            <Link
              to="/app/forgot-password"
              className="font-medium text-cyan-600 block"
            >
              Forgotten Password?
            </Link>
          </p>
        </div>
      </Form>
    </Formik>
  );
}
