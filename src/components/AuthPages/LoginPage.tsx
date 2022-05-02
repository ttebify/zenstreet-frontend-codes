import React from "react";
import type { PageProps } from "gatsby";
import FormFace from "../Forms/AuthForms/FormFace";
import LoginForm from "../Forms/AuthForms/LoginForm";

export default function LoginPage({ location }: PageProps) {
  const state = location.state as {
    verifyLinkSent?: boolean;
    fromRegistration?: boolean;
  };
  let welcomeMsg = "Welcome Back";
  if (state && state.fromRegistration) {
    welcomeMsg = "We are happy to have you";
  }
  return (
    <FormFace
      title={welcomeMsg}
      motivation="Just a couple of clicks and we start."
      content={<LoginForm />}
    />
  );
}
