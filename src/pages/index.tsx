import React from "react";
import SlickSlider from "../components/Widgets/SlickSlider";
import LandingPageHeader from "../components/Layouts/Headers/LandingPageHeader";
import { graphql } from "gatsby";
import { ServicesQueryReturnType } from "../types/queries";
import { SubHeading } from "../components/Typography";
import OptionCard from "../components/Widgets/OptionCard";
import Button from "../components/Buttons/Button";
import Section from "../components/Layouts/Section";
import { GiGuardedTower } from "react-icons/gi";
import { MdOutlineTrendingUp } from "react-icons/md";
import { IconBaseProps } from "react-icons";
import FeatureCard from "../components/Widgets/FeatureCard";
import { StaticImage } from "gatsby-plugin-image";
import { FaSearchDollar } from "react-icons/fa";
import cls from "classnames";

// Graphql query for this page
export const servicesQuery = graphql`
  query ServicesQuery {
    allServicesJson {
      edges {
        node {
          title
          description
          steps
        }
      }
    }
  }
`;

const featureSummary = [
  {
    icon: (props?: IconBaseProps) => <GiGuardedTower {...props} />,
    heading: "Security",
    summary:
      "Protect your assets from devaluation by earning in cryptocurrency.",
  },
  {
    icon: (props?: IconBaseProps) => <MdOutlineTrendingUp {...props} />,
    heading: "Active Updates",
    summary: "Stay on top of trends within the financial market.",
  },
  {
    icon: (props?: IconBaseProps) => <FaSearchDollar {...props} />,
    heading: "Be in Control",
    summary:
      "Get added value when you hold or lock in your funds for accrued interests.",
  },
];

const IndexPage = ({ data }: { data: ServicesQueryReturnType }) => {
  return (
    <div className="bg-white">
      <LandingPageHeader
        header="CrowdLend Your Way To Financial Freedom"
        description={`Take advantage of our innovative blockchain driven crowdlending
          technology to stay on top of your income.`}
      />
      <div className="px-4 md:px-16 py-10 max-w-screen-2xl mx-auto">
        <div
          className="py-6 relative flex flex-col md:flex-row items-center md:items-stretch
            md:justify-center divide-y md:divide-y-0 md:divide-x"
        >
          {featureSummary.map((summary) => (
            <FeatureCard
              key={summary.heading}
              icon={summary.icon}
              heading={summary.heading}
              text={summary.summary}
            />
          ))}
        </div>
      </div>
      <Section
        noPadding={false}
        className="flex flex-col md:flex-row-reverse justify-between space-y-5 md:space-y-0 md:gap-5
          text-center"
      >
        <div className="w-full flex flex-col justify-center">
          <h2 className="max-w-xl md:ml-auto md:text-right">
            Your Dream Can Be More Than {highlighText("Just a Dream")}
          </h2>
          <p className="max-w-lg md:ml-auto body-text md:text-right">
            We offer you a robust array of lending options that will suit your
            financing style. Using top-shelf technology, we keep a fresh
            experience for every lender and contributor to our platforms with
            our upgraded offerings.
          </p>
        </div>
        <div className="lg:h-auto w-full">
          <StaticImage
            src="../images/pexels-andrea-piacquadio-3974773.jpg"
            alt="Smiling male entrepreneur in eyeglasses browsing smartphone in downtown"
            layout="fullWidth"
            placeholder="blurred"
          />
        </div>
      </Section>
      <Section noPadding={false} className="bg-[#f5bed428]">
        <SlickSlider
          label="Steps to perticipate"
          heading={<h2>How it {highlighText("works", "text-[#c2004f]")}</h2>}
          data={data}
        />
      </Section>
      <Section noPadding={false} className="text-center">
        <SubHeading>Begin today</SubHeading>
        <h2>Check Out The Best {highlighText("Lending Options")}</h2>
        <div className="flex flex-col md:flex-row w-full md:flex-wrap items-center md:justify-between">
          {new Array(3).fill("").map((_, i) => (
            <OptionCard key={i} />
          ))}
        </div>
      </Section>
      <Section
        noPadding={false}
        containerClass="bg-blue-50"
        className="text-center flex flex-col items-center"
      >
        <h2 className="mb-5">Newsletter Subscription</h2>
        <SubHeading>
          Subscribe to our newsletter to get new investment upportunities
        </SubHeading>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          method="POST"
          className="w-full space-y-1 md:space-x-2"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-4 bg-white shadow-md shadow-gray-200 rounded-lg my-4 outline-none transition-all
            duration-200 focus-within:ring-4 disabled:cursor-not-allowed w-full text-center text-gray-500
            max-w-lg"
            formNoValidate={false}
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </Section>
    </div>
  );
};

const highlighText = (text: string, className?: string) => (
  <span className={cls(className ? className : "text-blue-500")}>{text}</span>
);

export default IndexPage;
