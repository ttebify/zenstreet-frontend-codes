import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { IconBaseProps } from "react-icons";
import { BiCartAlt, BiDollarCircle } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import Section from "../components/Layouts/Section";
import Link from "../components/Link";
import FeatureCard from "../components/Widgets/FeatureCard";

const goalsMap = [
  {
    icon: (props?: IconBaseProps) => <BiCartAlt {...props} />,
    heading: "Vison 1",
    summary: `Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Ipsa nulla ea labore assumenda doloribus nisi at.
    Voluptas dolorum.`,
  },
  {
    icon: (props?: IconBaseProps) => <BiDollarCircle {...props} />,
    heading: "Vision 2",
    summary: `Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Ipsa nulla ea labore assumenda doloribus nisi at.
    Voluptas dolorum.`,
  },
  {
    icon: (props?: IconBaseProps) => <BsHouseDoor {...props} />,
    heading: "Vison 3",
    summary: `Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Ipsa nulla ea labore assumenda doloribus nisi at.
      Voluptas dolorum.`,
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white">
      <Section noPadding={false} containerClass="bg-white">
        <small>bg image</small>
        <div className="text-center">
          <div className="text-lg font-light">About</div>
          <h1>Learn More About Zenstreet</h1>
        </div>
        <p className="text-xl text-center lg:text-2xl">
          Some info about zenstreet, Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ipsa nulla ea labore assumenda doloribus nisi at.
          Voluptas dolorum, aperiam unde vero quidem labore enim repellendus
          quia facere dignissimos exercitationem fugiat.
        </p>
      </Section>
      <Section noPadding={false}>
        <div className="text-center text-base font-light text-gray-400">
          Our Vision
        </div>
        <div
          className="py-6 relative flex flex-col md:flex-row items-center md:items-stretch
            md:justify-center divide-y md:divide-y-0 md:divide-x"
        >
          {goalsMap.map((summary) => (
            <FeatureCard
              key={summary.heading}
              icon={summary.icon}
              heading={summary.heading}
              text={summary.summary}
            />
          ))}
        </div>
      </Section>
      <Section
        noPadding={false}
        className="flex flex-col space-y-5 text-center lg:flex-row lg:justify-between items-stretch
            overflow-x-hidden lg:space-x-5 lg:text-left bg-red-50"
      >
        <div className="space-y-5 max-w-md mx-auto lg:max-w-sm">
          <h2>What Service Are You Looking For Today?</h2>
          <p>
            What ever service you are looking for we will help you find a pro
            for the job.
          </p>
          <Link as="button" to="/app/register">
            Find A Pro
          </Link>
        </div>
        <div className="relative lg:!-mt-20">
          <StaticImage
            alt="Find A pro"
            src="../images/pexels-andrea-piacquadio-3974773.jpg"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </Section>
    </main>
  );
}
