import React from "react";
import PageContainer from "../../PageContainer/PageContainer";
import AccountSummary from "./AccountsSummary";
import ActivityLogTable from "./ActivityLogTable";

export default function ActivityPage() {
  return (
    <PageContainer
      heading="Your Transaction History"
      topSection={() => <AccountSummary />}
    >
      <div>
        <ActivityLogTable />
      </div>
    </PageContainer>
  );
}
