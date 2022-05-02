import BigNumber from "bignumber.js";
import React from "react";
import Button from "../../Buttons/Button";
import useModal from "../../Modal/useModal";
import ClaimRewardsModal from "../../Modals/ClaimRewardsModal";
import PageContainer from "../../PageContainer/PageContainer";
import RewardsAction from "./RewardsAction";

export default function RewardsPage() {
  const bal = new BigNumber(50);
  const [onPresentModal] = useModal(<ClaimRewardsModal balance={bal} />);
  return (
    <PageContainer heading="Your Rewards">
      <div>
        <RewardsAction
          size="large"
          action="Contribution Rewards"
          value="50 USDT"
          color="#648903"
        />
        <div className="max-w-screen-md mx-auto my-5 bg-[#0d75a5]">
          <hr />
        </div>
        <RewardsAction
          action="Rewards From Referral"
          value="10 USDT"
          color="#b8146e"
        />
        <RewardsAction action="Reward 3" value="10 USDT" color="#648903" />
        <RewardsAction
          action="Rewards From Referral"
          value="10 USDT"
          color="#0d75a5"
        />
        <RewardsAction action="Reward 5" value="10 USDT" color="#648903" />
        <RewardsAction
          action="Rewards From Referral"
          value="10 USDT"
          color="#b8146e"
        />
        <RewardsAction action="Reward 4" value="10 USDT" color="#648903" />
        <RewardsAction
          action="Rewards From Referral"
          value="10 USDT"
          color="#648903"
        />
        <RewardsAction
          action="Rewards From Referral"
          value="10 USDT"
          color="#b8146e"
        />
      </div>
      <div className="bg-blue-600 p-16 mt-10">
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 my-3
          mx-auto max-w-screen-md">
          <div className="bg-gray-100 flex-none w-24 h-24 rounded-full mr-0 md:mr-3"></div>
          <div className="flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0 items-center
            w-full">
            <div className="max-w-xs font-bold text-2xl space-y-2 text-center md:text-left">
              <div className="text-white">Total Rewards</div>
              <div className="text-gray-300 font-medium">50 USDT</div>
            </div>
            <Button className="rounded-full" onClick={onPresentModal}>
              Claim Rewards
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
