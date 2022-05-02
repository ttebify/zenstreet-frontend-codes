import React from "react";
import SlickSlider from "../components/Widgets/SlickSlider";
import LandingPageHeader from "../components/Layouts/Headers/LandingPageHeader";
import { graphql } from "gatsby";
import { ServicesQueryReturnType } from "../types/queries";
import { SubHeading } from "../components/Typography";
import OptionCard from "../components/Widgets/OptionCard";
import Button from "../components/Buttons/Button";
import Section from "../components/Layouts/Section";
import { GiControlTower, GiLockedChest, GiNewspaper } from "react-icons/gi";
import { IconBaseProps } from "react-icons";
import FeatureCard from "../components/Widgets/FeatureCard";

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
    icon: (props?: IconBaseProps) => <GiLockedChest {...props} />,
    heading: "Security",
    summary:
      "Protect your assets from  devaluation by helping you earn in cryptocurrency.",
  },
  {
    icon: (props?: IconBaseProps) => <GiNewspaper {...props} />,
    heading: "Active Updates",
    summary: "Help you stay on top of trends in the financial market.",
  },
  {
    icon: (props?: IconBaseProps) => <GiControlTower {...props} />,
    heading: "Be in Control",
    summary:
      "We help you keep track of your contributions and accrued interests.",
  },
];

const IndexPage = ({ data }: { data: ServicesQueryReturnType }) => {
  return (
    <div className="bg-white">
      <LandingPageHeader
        header="Crowdfund Your Way To Financial Freedom"
        description={`Take advantage of our innovative blockchain driven crowdsourcing technology
          to stay on top of your income.`}
      />
      <div className="px-4 md:px-16 max-w-screen-2xl mx-auto">
        <div
          className="bg-white py-12 md:py-6 relative md:-translate-y-1/4 md:flex
        md:justify-between md:shadow-gray-100 md:shadow-md md:rounded-md"
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
        className="flex flex-col md:flex-row-reverse justify-between"
      >
        <div className="max-w-md lg:max-w-none">
          <h2 className="max-w-xl md:ml-auto md:text-right">
            Your Dream Can Be More Than {highlighText("Just a Dream")}
          </h2>
          <p className="max-w-lg md:ml-auto text-gray-500 md:text-right">
            We offer you a robust array of funding options that will suit your
            financing style and continue to update and upgrade our offerings
            with top-shelf technology, ensuring that we keep a fresh experience
            for every contributor or visitor to our platforms.
          </p>
        </div>
        <div
          className="bg-blue-100 h-80 lg:h-auto w-full md:max-w-sm lg:w-1/2 lg:max-w-none shrink-0
            md:flex-1 md:ml-4 rounded-xl"
        ></div>
      </Section>
      <Section noPadding={false}>
        <SlickSlider
          label="Steps to perticipate"
          heading={<h2>How it {highlighText("works")}</h2>}
          data={data}
        />
      </Section>
      <Section noPadding={false} className="text-center">
        <SubHeading>Begin today</SubHeading>
        <h2>Checkout The Best {highlighText("Funding Options")}</h2>
        <div className="md:flex w-full md:flex-wrap md:justify-between">
          {new Array(3).fill("").map((_, i) => (
            <OptionCard key={i} />
          ))}
        </div>
      </Section>
      <Section
        noPadding={false}
        className="text-center bg-blue-50 flex flex-col items-center"
      >
        <h2 className="mb-5">Newsletter Subscription</h2>
        <SubHeading className="text-gray-400">
          Subscribe to our newsletter to get new investment upportunities
        </SubHeading>
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-4 bg-white shadow-md shadow-gray-200 rounded-lg my-4 outline-none transition-all
            duration-200 focus-within:ring-4 disabled:cursor-not-allowed w-full text-center text-gray-500
            max-w-lg"
        />
        <Button>Subscribe</Button>
      </Section>
    </div>
  );
};

const highlighText = (text: string) => (
  <span className="text-blue-500">{text}</span>
);

export default IndexPage;
