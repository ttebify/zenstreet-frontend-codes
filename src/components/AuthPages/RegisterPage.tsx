import React from "react";
import { PageProps } from "gatsby";
import FormFace from "../Forms/AuthForms/FormFace";
import RegisterForm from "../Forms/AuthForms/RegisterForm";

export default function RegisterPage(_props: PageProps) {
  return (
    <FormFace
      title="Welcome Aboard"
      motivation={`Take advantage of our innovative blockchain driven crowd sourcing technology to
      stay on top of your income.`}
      content={<RegisterForm />}
    />
  );
}
