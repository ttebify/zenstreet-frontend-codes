import React from "react";
import { PageProps } from "gatsby";
import FormFace from "../Forms/AuthForms/FormFace";
import ResetPasswordForm from "../Forms/AuthForms/ResetPasswordForm";

export default function ResetPasswordPage(_props: PageProps) {
  return (
    <FormFace
      title="Reset Your Password"
      motivation=""
      content={<ResetPasswordForm />}
    />
  );
}
