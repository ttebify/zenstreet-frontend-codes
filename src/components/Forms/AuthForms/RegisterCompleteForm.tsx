import React, { useState } from "react";
import Link from "../../Link";
import Button from "../../Buttons/Button";
import useAuthContext from "../../../hooks/useAuthContext";
import { Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import CheckBox from "./CheckBox";
import { setUser } from "../../../utils/auth";
import { navigateToPath } from "../../../utils";
import useToast from "../../../hooks/useToast";
import { RegisterPage2State } from "../../AuthPages/RegisterPage2";

export default function RegisterCompleteForm(props: RegisterPage2State) {
  const [submitting, setSubmitting] = useState(false);

  const { register } = useAuthContext();
  const { toastError, toastSuccess } = useToast();

  const formValidationSchema = Yup.object({
    account_type: Yup.string()
      .oneOf(["contributor", "affiliate"])
      .required("choose an account type"),
  });

  return (
    <Formik
      initialValues={{
        account_type: "contributor" as const,
      }}
      validationSchema={formValidationSchema}
      onSubmit={(value, { resetForm, setErrors }) => {
        setSubmitting(true);
        // try to register
        register({ ...props, ...value })
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
        <h1 className="text-5xl">One Last Thing</h1>
        <div className="w-full space-y-5">
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
          <AccountTypeDesc />
        </div>
        <div className="w-full !mt-6">
          <Button
            className="px-10 py-3 block mx-auto bg-[#5f0e22] hover:bg-[#5f0e22]
              focus-within:bg-[#5f0e22] focus:bg-[#5f0e22]"
            type="submit"
            disabled={submitting}
            loading={submitting}
          >
            Submit
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

const AccountTypeDesc = () => {
  const { values } = useFormikContext<{
    account_type: "contributor" | "affiliate";
  }>();

  return (
    <p>
      {values.account_type === "affiliate"
        ? `We offer you a robust array of funding options that will suit your financing style and
            continue to update and upgrade our offerings with top-shelf technology, ensuring that
            we keep a fresh experience for every contributor or visitor to our platforms.`
        : `Contributor sider Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            dignissimos repellat necessitatibus sit vel eius laborum, assumenda libero
            cumque unde quisquam, harum quae vero quaerat cum magnam id tenetur nisi?`}
    </p>
  );
};
