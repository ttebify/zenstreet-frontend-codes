import React from "react";
import { PageProps } from "gatsby";
import FormFace from "../Forms/AuthForms/FormFace";
import RegisterCompleteForm from "../Forms/AuthForms/RegisterCompleteForm";

export interface RegisterPage2State {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password_confirmation: string;
  fromRegistration: boolean;
}
export default function RegisterPage2({ location }: PageProps) {
  const state = location.state as RegisterPage2State;

  return (
    <FormFace
      title="Welcome Aboard"
      motivation={`Take advantage of our innovative blockchain driven crowd sourcing technology to
      stay on top of your income.`}
      bgColorClass="bg-[#5f0e22]"
      content={<RegisterCompleteForm {...state} />}
    />
  );
}
