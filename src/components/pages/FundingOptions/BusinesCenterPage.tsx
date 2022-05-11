import React from "react";
import PageContainer from "../../PageContainer/PageContainer";
import FundingOption from "./FundingOption";

export default function BusinessCenterPage() {
  return (
    <PageContainer>
      {/* <SEO  /> */}
      <div>
        <div className="bg-white md:p-5 my-5">
          <div className="flex items-stretch p-3">
            <div>
              <h2 className="mb-2 text-2xl">Alpha</h2>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                duis aliquam in tempus. Fringilla diam nibh ornare adipiscing
              </p>
            </div>
          </div>
          <div className="flex space-x-3 overflow-y-hidden p-3">
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
          </div>
        </div>
        <div className="bg-white md:p-5 my-5">
          <div className="flex items-stretch p-3">
            <div>
              <h2 className="mb-2 text-2xl">Beta</h2>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                duis aliquam in tempus. Fringilla diam nibh ornare adipiscing
              </p>
            </div>
          </div>
          <div className="flex space-x-3 overflow-y-hidden p-3">
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
          </div>
        </div>
        <div className="bg-white md:p-5 my-5">
          <div className="flex items-stretch p-3">
            <div>
              <h2 className="mb-2 text-2xl">Gama</h2>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                duis aliquam in tempus. Fringilla diam nibh ornare adipiscing
              </p>
            </div>
          </div>
          <div className="flex space-x-3 overflow-y-hidden p-3">
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
            <FundingOption />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
