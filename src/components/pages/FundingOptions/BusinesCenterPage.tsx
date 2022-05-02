import React from "react";
import PageContainer from "../../PageContainer/PageContainer";
import FundingOption from "./FundingOption";

export default function BusinessCenterPage() {
  return (
    <PageContainer heading="Business Center">
      {/* <SEO  /> */}
      <p className="body-text px-4">
        We offer you a robust array of funding options that will suit your
        financing style and continue to update and upgrade our offerings with
        top-shelf technology, ensuring that we keep a fresh experience for every
        contributor or visitor to our platforms.
      </p>
      <div>
        <div>
          <div className="flex items-stretch bg-sky-800 text-white p-3">
            <div className="bg-gray-600 w-40 mr-3">image</div>
            <div>
              <h2 className="mb-4">Alpha</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                duis aliquam in tempus. Fringilla diam nibh ornare adipiscing
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 place-items-center gap-4 p-8 overflow-y-auto">
            <FundingOption />
            <FundingOption />
            <FundingOption />
          </div>
        </div>
        <div>
          <div className="flex items-stretch bg-yellow-700 text-white p-3">
            <div className="bg-gray-600 w-40 mr-3">image</div>
            <div>
              <h2 className="mb-4">Beta</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                duis aliquam in tempus. Fringilla diam nibh ornare adipiscing
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 place-items-center gap-4 p-8 overflow-y-auto">
            <FundingOption />
            <FundingOption />
            <FundingOption />
          </div>
        </div>
        <div>
          <div className="flex items-stretch bg-green-700 text-white p-3">
            <div className="bg-gray-600 w-40 mr-3">image</div>
            <div>
              <h2 className="mb-4">Gama</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                duis aliquam in tempus. Fringilla diam nibh ornare adipiscing
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 place-items-center gap-4 p-8 overflow-y-auto">
            <FundingOption />
            <FundingOption />
            <FundingOption />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
