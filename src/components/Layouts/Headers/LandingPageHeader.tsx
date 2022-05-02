import React from "react";
import Link from "../../Link";
import Section from "../Section";
import type { LandingPageHeaderProps } from "./types";

export default function LandingPageHeader({
  description,
  header,
}: LandingPageHeaderProps) {
  return (
    <Section noPadding={false} containerClass="bg-blue-50">
      <div
        className="max-w-screen-2xl min-h-screen md:min-h-0 md:h-screen
            max-h-[700px] py-16 md:flex md:flex-row md:items-stretch"
      >
        <div className="md:max-w-sm lg:max-w-lg">
          <h1 className="">{header}</h1>
          <p className="body-text">{description}</p>
          <div className="my-8">
            <Link to="/app/signup" as="button" variant="primary">
              Start Investing Today
            </Link>
          </div>
        </div>
        {/* <div className="bg-blue-100 h-80 lg:h-auto w-full md:max-w-sm lg:w-1/2 lg:max-w-none shrink-0
            md:flex-1 md:ml-4 rounded-xl"></div> */}
      </div>
    </Section>
  );
}
