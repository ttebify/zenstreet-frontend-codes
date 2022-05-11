import React from "react";

export interface FormFaceProps {
  title: string;
  motivation: string;
  content: JSX.Element;
  bgColorClass?: string;
}

export type AllInputTypes = HTMLInputElement;
export type InputAttributes<T extends AllInputTypes> = Omit<
  React.InputHTMLAttributes<T>,
  "id"
>;

export type TextInputProps<T extends AllInputTypes> = InputAttributes<T> & {
  icon: JSX.Element;
  label: string;
  inputId: string;
  name: string;
};

export interface LoginPostValues {
  email: string;
  password: string;
}

export interface RegisterPostValues extends LoginPostValues {
  firstname: string;
  lastname: string;
  account_type: "contributor" | "affiliate";
  password_confirmation: string;
}
