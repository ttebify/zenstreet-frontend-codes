import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Link from "../../Link";
import Section from "../Section";
import type { LandingPageHeaderProps } from "./types";

export default function LandingPageHeader({
  description,
  header,
}: LandingPageHeaderProps) {
  return (
    <Section className="!px-0">
      <div style={{ display: "grid" }}>
        <StaticImage
          src="../../../images/bg-home-large.jpg"
          alt=""
          layout="fullWidth"
          placeholder="blurred"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={3 / 1}
          formats={["auto", "webp", "avif"]}
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
          }}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
          }}
          className="max-w-4xl mx-auto sm:mx-0 sm:ml-auto text-center sm:text-left py-10 px-6 sm:px-20"
        >
          <div>
            <h1>{header}</h1>
            <p className="body-text text-lg max-w-lg">{description}</p>
            <div className="my-5">
              <Link
                to="/app/register"
                as="button"
                variant="primary"
                className="rounded-none"
              >
                Begin Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
