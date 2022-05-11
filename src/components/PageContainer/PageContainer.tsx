import React from "react";
import Section from "../Layouts/Section";

interface PageContainerProps {
  heading?: string;
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
      <div className="w-full h-full rounded-t-2xl bg-[#f2f8fd] pt-5 mb-20 mt-5">
        <Section className="!px-0 max-w-screen-2xl">
          {heading && <h1 className="text-4xl text-center">{heading}</h1>}
          <div>{children}</div>
        </Section>
      </div>
    </div>
  );
}
