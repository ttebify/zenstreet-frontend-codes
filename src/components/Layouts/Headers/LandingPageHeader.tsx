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
          className="max-w-2xl mx-auto text-center py-10 px-6"
        >
          <div>
            <h1>{header}</h1>
            <p className="body-text">{description}</p>
            <div className="my-8">
              <Link to="/app/signup" as="button" variant="primary">
                Start Investing Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
