import React from "react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import Link from "../../Link";
import Button from "../../Buttons/Button";
import TextInput from "./TextInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { navigateToPath } from "../../../utils";
import { RiPhoneLine } from "react-icons/ri";

export default function RegisterForm() {
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
    phone: Yup.string().required().trim(),
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
        phone: "",
        password: "",
        password_confirmation: "",
      }}
      validationSchema={formValidationSchema}
      onSubmit={(values) => {
        // Go to the completion page
        navigateToPath("/app/register-complete", {
          state: { registrationData: values, fromRegistration: true },
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
        <div
          className="flex flex-col md:flex-row md:justify-between md:space-x-3 w-full space-y-3
            md:space-y-0"
        >
          <TextInput
            type="email"
            name="email"
            icon={<AiOutlineMail />}
            inputId="email"
            label="Email"
            placeholder="example@gmail.com"
          />
          <TextInput
            type="tel"
            name="phone"
            icon={<RiPhoneLine />}
            inputId="phone"
            label="Phone"
            placeholder="Phone"
          />
        </div>
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
          <Button className="px-10 py-3 block mx-auto" type="submit">
            Next
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
