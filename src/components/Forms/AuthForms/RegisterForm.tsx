import React, { useState } from "react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import Link from "../../Link";
import Button from "../../Buttons/Button";
import useAuthContext from "../../../hooks/useAuthContext";
import TextInput from "./TextInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CheckBox from "./CheckBox";
import { setUser } from "../../../utils/auth";
import { navigateToPath } from "../../../utils";
import useToast from "../../../hooks/useToast";

export default function RegisterForm() {
  const [submitting, setSubmitting] = useState(false);

  const { register } = useAuthContext();
  const { toastError, toastSuccess } = useToast();

  const formValidationSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "too short!")
      .required("this field is required")
      .trim(),
    lastname: Yup.string()
      .max(50, "too long!")
      .required("this field is required")
      .trim(),
    email: Yup.string()
      .email("invalid email address.")
      .required("this field is required")
      .trim(),
    account_type: Yup.string()
      .oneOf(["contributor", "affiliate"])
      .required("choose an account type"),
    password: Yup.string().required("this field is required").min(8).trim(),
    password_confirmation: Yup.string()
      .required("this field is required")
      .oneOf([Yup.ref("password"), null], "passwords must match"),
  });

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        account_type: "contributor" as const,
        password_confirmation: "",
      }}
      validationSchema={formValidationSchema}
      onSubmit={(values, { resetForm, setErrors }) => {
        setSubmitting(true);
        // try to register
        register(values)
          .then((res) => {
            const { verifyLinkSent, user } = res;
            if (user) {
              resetForm();
              setUser(user);
              navigateToPath("/app/login", {
                state: { verifyLinkSent, fromRegistration: true },
              });
              toastSuccess("Registration successfull!");
            }
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
        id="register-form"
        className="flex flex-col md:flex-row flex-wrap space-y-3 max-w-lg sm:mx-auto px-5"
      >
        <h1 className="text-5xl">Begin Your Journey Today</h1>
        <div className="w-full">
          <p className="text-base text-gray-500 mb-1">Register as</p>
          <div className="flex w-full flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
            <CheckBox
              name="account_type"
              value="contributor"
              label="A Contributor"
            />
            <CheckBox
              name="account_type"
              value="affiliate"
              label="An Affiliate"
            />
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row md:justify-between md:space-x-3 w-full space-y-3
            md:space-y-0"
        >
          <TextInput
            type="text"
            name="firstname"
            icon={<AiOutlineUser />}
            inputId="firstname"
            label="First Name"
            placeholder="First Name"
          />
          <TextInput
            type="text"
            name="lastname"
            icon={<AiOutlineUser />}
            inputId="lastname"
            label="Last Name"
            placeholder="Last Name"
          />
        </div>
        <TextInput
          type="email"
          name="email"
          icon={<AiOutlineMail />}
          inputId="email"
          label="Email"
          placeholder="example@gmail.com"
        />
        <div
          className="flex flex-col md:flex-row md:justify-between md:space-x-3 w-full space-y-3
            md:space-y-0"
        >
          <TextInput
            type="password"
            name="password"
            icon={<></>}
            inputId="password"
            label="Password"
            placeholder="***"
          />
          <TextInput
            type="password"
            name="password_confirmation"
            icon={<></>}
            inputId="password_confirmation"
            label="Confirm Password"
            placeholder="***"
          />
        </div>
        <div className="w-full !mt-6">
          <Button
            className="px-10 py-3 block mx-auto"
            type="submit"
            disabled={submitting}
            loading={submitting}
          >
            Sign Up
          </Button>
          <p className="text-center text-base mt-2">
            Already Have an Account?{" "}
            <Link to="/app/login" className="text-cyan-600">
              Sign In
            </Link>
          </p>
        </div>
      </Form>
    </Formik>
  );
}
