import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Section from "../components/Layouts/Section";
import Link from "../components/Link";

export default function HowItWorksPage() {
  return (
    <main className="bg-white">
      <Section className="!px-0">
        <div style={{ display: "grid" }}>
          <StaticImage
            src="../images/about-us-cover.jpg"
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
            className="max-w-4xl py-10 px-6 sm:px-20"
          >
            <div>
              <h1>Hey Fam This is Us</h1>
              <p className="body-text text-lg">
                ZenStreet is built on the back of an established team of highly
                skilled experts with a combined over 15 years of experience in
                the stocks, forex and crypto spaces, real estate, private
                funding and blockchain technology, with the aim of creating a
                safe and robust crowdlending environment for our contributors.
                Yep! That’s what we do best.
              </p>
              <div className="my-8">
                <Link to="/app/register" as="button" variant="primary">
                  Begin Your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section
        noPadding={false}
        className="flex flex-col space-y-5 text-center lg:flex-row lg:justify-between items-center
            overflow-x-hidden lg:space-x-5 lg:text-left lg:space-y-0"
      >
        <div className="relative">
          <StaticImage
            alt="Find A pro"
            src="../images/pexels-andrea-piacquadio-3974773.jpg"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
        <div className="space-y-5 max-w-md mx-auto">
          <h2>Here's Why We Started This</h2>
          <p>
            Traditional investment vehicles and opportunities are generally very
            expensive and require huge capital investments. ZenStreet was
            created with the low income earner in mind.
          </p>
          <p>
            We offer smart, simple, and affordable investment solutions by
            providing you with highly affordable financial opportunities and a
            chance to pool resources with others, collectively provide liquid to
            capital intensive projects, make and split the profit.
          </p>
        </div>
      </Section>
      <Section
        noPadding={false}
        className="flex flex-col space-y-5 text-center lg:flex-row lg:justify-between items-stretch
            overflow-x-hidden lg:space-x-5 max-w-screen-lg"
      >
        <div className="space-y-5 mx-auto">
          <h2>How We'll Meet Your Needs</h2>
          <p>
            Our world is fast evolving more into a blockchain and cryptocurrency
            enabled ecosystem. ZenStreet is re-inventing the crowdlending
            landscape by changing the way we interact with money and financing
            within this space. Whether you are a pro or a beginner, we are
            putting you in the front seat of this new economy. Stay in charge.
            Earn money the way you want to using our cutting-edge technology and
            expert financial advise.
          </p>
        </div>
      </Section>
    </main>
  );
}
