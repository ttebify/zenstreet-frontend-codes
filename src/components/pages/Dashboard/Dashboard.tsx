import React from "react";
import Link from "../../Link";
import PageContainer from "../../PageContainer/PageContainer";

export default function Dashboard() {
  return (
    <PageContainer heading="Dashboard">
      <div className="flex items-center justify-between p-5 bg-white border-b">
        <div className="font-medium">
          <div className="text-xl">Hi, Justice</div>
          <p>Hello and Welcome</p>
        </div>
        <Link to="/app/business-center" as="button">
          Invest
        </Link>
      </div>
    </PageContainer>
  );
}
