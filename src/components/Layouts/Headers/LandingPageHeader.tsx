import React from "react";
import Link from "../../Link";
import Section from "../Section";
import type { LandingPageHeaderProps } from "./types";

export default function LandingPageHeader({
  description,
  header,
}: LandingPageHeaderProps) {
  return (
    <Section noPadding={false} containerClass="bg-black/50">
      <div className="max-w-2xl mx-auto text-center">
        <h1>{header}</h1>
        <p className="body-text">{description}</p>
        <div className="my-8">
          <Link to="/app/signup" as="button" variant="primary">
            Start Investing Today
          </Link>
        </div>
      </div>
    </Section>
  );
}
