import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import DangerZone from "./actions/DangerZone";
import ChangeEmailForm from "./forms/ChangeEmailForm";
import ChangePasswordForm from "./forms/ChangePasswordForm";
import ChangePhoneNumberForm from "./forms/ChangePhoneNumberForm";
import EmailVerificationForm from "./actions/EmailVerificationForm";
import Section from "../Layouts/Section";

export default function AccountPage() {
  return (
    <PageContainer heading="Account page">
      <Section className="bg-white py-5">
        <div
          className="flex flex-col md:flex-row md:flex-wrap md:justify-between p-4 space-y-4 md:space-y-0
        gap-6"
        >
          <ChangeEmailForm />
          <ChangePhoneNumberForm />
          <EmailVerificationForm />
          <ChangePasswordForm />
        </div>
        <div className="px-4">
          <DangerZone />
        </div>
      </Section>
    </PageContainer>
  );
}
