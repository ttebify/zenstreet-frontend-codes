import React from "react";
import FormFace from "../components/Forms/AuthForms/FormFace";
import RegisterForm from "../components/Forms/AuthForms/RegisterForm";

export default function SignupPage() {
  return (
    <FormFace
      image={<div>Image</div>}
      title="Welcome Aboard"
      motivation="Just a couple of clicks and we start"
      content={<RegisterForm />}
    />
  );
}
