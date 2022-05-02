import React from "react";
import { PageProps } from "gatsby";
import FormFace from "../Forms/AuthForms/FormFace";
import ForgetPasswordForm from "../Forms/AuthForms/ForgetPasswordForm";

export default function PasswordResetPage(_props: PageProps) {
  return (
    <FormFace
      title="Forgotten your password?"
      motivation=""
      content={<ForgetPasswordForm />}
    />
  );
}
