import React from "react";
import Section from "../layouts/Section";

interface PageContainerProps {
  heading: string;
  children: React.ReactNode;
  topSection?: () => JSX.Element;
}
export default function PageContainer({
  heading,
  children,
  topSection,
}: PageContainerProps) {
  return (
    <div className="md:px-4 h-full flex flex-col items-stretch">
      {topSection && (
        <Section className="max-w-screen-xl">
          <section className="my-5 w-full flex-none">{topSection()}</section>
        </Section>
      )}
      <div className="w-full h-full rounded-t-2xl bg-white pt-5 pb-20 mt-5">
        <Section className="max-w-screen-xl">
          <h1 className="text-2xl text-center">{heading}</h1>
          <div>{children}</div>
        </Section>
      </div>
    </div>
  );
}
