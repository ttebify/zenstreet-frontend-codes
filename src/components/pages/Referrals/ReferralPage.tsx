import React, { useEffect, useState } from "react";
import useQuery from "../../../hooks";
import Link from "../../Link";
import PageContainer from "../../PageContainer/PageContainer";
import cls from "classnames";

export default function ReferralPage() {
  const urlCategory = useQuery().get("category");
  const [activeTab, setActiveTab] = useState<"contribution" | "affiliate">(
    "contribution"
  );

  useEffect(() => {
    if (urlCategory !== null) {
      if (urlCategory === "contribution") {
        setActiveTab(urlCategory);
      } else if (urlCategory === "affiliate") {
        setActiveTab(urlCategory);
      } else {
        setActiveTab("contribution"); // default
      }
    }
  }, [urlCategory]);

  const activeClassName = "bg-white text-blue-500 ring-blue-500 ring-2";
  return (
    <PageContainer heading="Referrals">
      <p>
        Don’t have enough money to fund a campaign? We got you covered. Join our
        affiliate program and build up on your finances. Then improve your
        income by funding a campaign with your earnings. Set a target and work
        towards it. Earn more when you build a stronger team.
      </p>
      <div className="space-y-8 mt-8">
        <div className="flex justify-between space-x-3">
          <Link
            as="button"
            to="/app/referrals/?category=contribution"
            className={cls("block w-1/2 rounded-full p-2", {
              [activeClassName]: activeTab === "contribution",
            })}
          >
            Referrals
          </Link>
          <Link
            as="button"
            to="/app/referrals/?category=affiliate"
            className={cls("block w-1/2 rounded-full p-2", {
              [activeClassName]: activeTab === "affiliate",
            })}
          >
            Affiliate Sponsors
          </Link>
        </div>
        <div>
          <div className="flex items-center text-base">
            <div className="w-14 h-14 bg-gray-300 flex-none mr-3"></div>
            <div>
              The total number of people who have been invited to participate in
              the contributions program.
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3 mt-10">
        <h3 className="text-xl mb-0">Tips</h3>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          optio. Odio doloribus error eaque unde fugit minima nobis quibusdam
          adipisci rerum officiis pariatur soluta atque blanditiis iure, vitae,
          esse dicta.
        </p>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          deleniti eum ex blanditiis sed voluptatibus dolorem repudiandae!
          Architecto possimus quidem voluptatem dolore in mollitia enim corporis
          nemo aut, dolores recusandae!
        </p>
      </div>
    </PageContainer>
  );
}
