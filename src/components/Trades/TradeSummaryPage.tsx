import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import TradeSummaryCard from "./components/TradeSummaryCard";

export default function TradeSummaryPage() {
  return (
    <PageContainer heading="Trade History">
      <div className="flex flex-wrap gap-3 justify-around">
        <TradeSummaryCard
          title="Wood Work"
          imageUrl=""
          duration="3days"
          progress={50}
          roi={200}
        />
        <TradeSummaryCard
          title="Wood Work"
          imageUrl=""
          duration="3days"
          progress={50}
          roi={200}
        />
        <TradeSummaryCard
          title="Wood Work"
          imageUrl=""
          duration="3days"
          progress={50}
          roi={200}
        />
        <TradeSummaryCard
          title="Wood Work"
          imageUrl=""
          duration="3days"
          progress={50}
          roi={200}
        />
        <TradeSummaryCard
          title="Wood Work"
          imageUrl=""
          duration="3days"
          progress={50}
          roi={200}
        />
      </div>
    </PageContainer>
  );
}
