import BigNumber from "bignumber.js";
import React from "react";
import Button from "../../Buttons/Button";
import useModal from "../../Modal/useModal";
import FundOptionModal from "../../Modals/FundOptionModal";
import PageContainer from "../../PageContainer/PageContainer";

export default function SingleFundingOptionPage() {
  const accountBalance = new BigNumber(50);
  const minContribution = new BigNumber(40);
  const roc = "200%";
  const duration = "4d";

  const [onPresentModal] = useModal(
    <FundOptionModal
      accountBalance={accountBalance}
      minContribution={minContribution}
      roc={roc}
      duration={duration}
    />
  );

  return (
    <PageContainer heading="Business Center">
      {/* <SEO  /> */}
      <div className="mx-auto bg-gray-400 h-64 w-full max-w-md">Image</div>
      <div className="px-4 flex justify-between mt-8">
        <div>
          <ul className="list-inside">
            <li>ROC: 200%</li>
            <li>Min. Contribution: 20 USDT Project</li>
            <li>Duration: 4d</li>
          </ul>
          <p className="my-3 font-medium text-sm">Funding begins in 3 days</p>
          <Button onClick={onPresentModal}>Fund This Project</Button>
        </div>
        <div className="w-1/2">
          <h1>Chemical Product</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A hendrerit
            egestas in enim. Sapien pharetra volutpat netus id. Erat sapien,
            euismod mattis et scelerisque.
          </p>
          <p>
            Commodo viverra blandit augue neque cursus. Aliquam cras rutrum
            viverra aliquam. Nunc nibh varius dolor sollicitudin pharetra.
            Posuere sit posuere urna cras nunc aliquam, egestas adipiscing.
            Tellus tellus euismod sed sit molestie
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
