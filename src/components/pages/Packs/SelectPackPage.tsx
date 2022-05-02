import React from "react";
import useModal from "../../Modal/useModal";
import ModalFooter from "../../Modals/shared/ModalFooter";
import PageContainer from "../../PageContainer/PageContainer";
import PackBenefit from "./PackBenefit";
import SelectPackCard from "./SelectPackCard";

export default function SelectPackPage() {
  const [onPresentModal] = useModal(<TestModal />);

  return (
    <PageContainer heading="Select A Pack">
      <p className="px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare id arcu,
        auctor in varius lobortis viverra id. Eros mattis etiam et ut orci in
        quis at justo. Adipiscing quis congue dignissim imperdiet sit imperdiet
        senectus ultrices. In pellentesque tempor laoreet porttitor tellus
        venenatis magna convallis. Pretium tortor, leo id nulla varius. Enim,
        elit nisl lacus sed posuere. Eu tempor.
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around gap-3 mt-8">
        <SelectPackCard
          name="Pack 1"
          price="25"
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 2"
          price="60"
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 3"
          price="150"
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 4"
          price="275"
          active
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 5"
          price="500"
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 6"
          price="25"
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 7"
          price="25"
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 8"
          price="25"
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 9"
          price="25"
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 10"
          price="25"
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 11"
          price="25"
          presentBenefits={onPresentModal}
        />
        <SelectPackCard
          name="Pack 12"
          price="25"
          presentBenefits={onPresentModal}
        />
        <div>Load</div>
      </div>
    </PageContainer>
  );
}

const TestModal = () => (
  <div className="modal-wrapper">
    <h2 className="text-2xl">What are the Benefits?</h2>
    <div className="space-y-5">
      <PackBenefit title="Direct Sponsor/Matching Bonus" imageUrl="">
        <p
          dangerouslySetInnerHTML={{
            __html: `Percentage earnings on Direct and Indirect sponsorship
          (registrations) up to <em> levels deep.</em>`,
          }}
        />
      </PackBenefit>
      <PackBenefit title="Fast Track" imageUrl="">
        <p
          dangerouslySetInnerHTML={{
            __html: `Sponsors <em>10 people</em> DIRECTLY to join the affiliate program within
          <em>21days</em> from the time of activating/ subscribing to this pack and <em>get
          back 60%</em> of your registration fees.`,
          }}
        />
      </PackBenefit>
      <PackBenefit title="Contributions Referral Bonus:" imageUrl="">
        <p
          dangerouslySetInnerHTML={{
            __html: `3% One off payment on referrals made for 
          contributions.`,
          }}
        />
      </PackBenefit>
      <ModalFooter />
    </div>
  </div>
);
