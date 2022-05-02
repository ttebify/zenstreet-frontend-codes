import React from "react";
import useToast from "../../../hooks/useToast";
import Button from "../../Buttons/Button";
import SectionHeading from "../SectionHeading";

export default function EmailVerificationForm() {
  //   const [submitting, setSubmitting] = useState(false);
  const { toastSuccess } = useToast();

  return (
    <div className="mt-5">
      <SectionHeading className="text-red-500">Danger Zone</SectionHeading>
      <p className="mb-3">
        If you no longer wish to use zenstreet and want all your records erased
        from our database, please contact support and request that your account
        be removed from our database and that you reclaim any funds or rewards
        you have with us.
      </p>
      <Button
        type="button"
        onClick={() => toastSuccess("Application Sent")}
        //   disabled={submitting}
        //   loading={submitting}
      >
        Apply for Account Deletion
      </Button>
    </div>
  );
}
