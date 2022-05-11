import React from "react";
import PageContainer from "../../PageContainer/PageContainer";

export default function Page404() {
  return (
    <PageContainer heading="Page Not Found">
      {/* <SEO  /> */}
      <p className="text-center">
        The Page you are trying to access does not exist.
      </p>
    </PageContainer>
  );
}
