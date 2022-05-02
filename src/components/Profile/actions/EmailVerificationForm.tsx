import React from "react";
import useToast from "../../../hooks/useToast";
import Button from "../../Buttons/Button";
import SectionHeading from "../SectionHeading";

export default function EmailVerificationForm() {
  //   const [submitting, setSubmitting] = useState(false);
  const { toastSuccess } = useToast();

  return (
    <div className="md:max-w-sm w-full md:w-1/2">
      <SectionHeading>Email Verification</SectionHeading>
      <p className="text-red-500 text-sm max-w-sm mb-3">
        You have not verified your email address. Please check the email we
        provided you upon registration and click on the "Verify Email" button,
        or request another verification link if you did not receive any email
        verification message from us.
      </p>
      <Button
        type="button"
        onClick={() => toastSuccess("Verification Link sent")}
        //   disabled={submitting}
        //   loading={submitting}
      >
        Resend Verification Link
      </Button>
    </div>
  );
}
