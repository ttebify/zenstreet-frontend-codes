import React, { createRef } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { BiArrowBack } from "react-icons/bi";
import { SubHeading } from "../Typography";
import type { ServicesQueryReturnType } from "../../types/queries";

interface ButtonProps {
  children: JSX.Element;
  clickHandler: () => void;
  className?: string;
}
const Button = (props: ButtonProps) => (
  <button
    className={`focus:outline-none transition duration-300 transform hover:scale-110 inline-block
      p-2 rounded-full shadow-md ${props.className}`}
    onClick={props.clickHandler}
  >
    {props.children}
  </button>
);

interface SlideArrowProps extends CustomArrowProps {
  slideNext: () => void;
  slidePrev: () => void;
}
const SlideArrow = ({ slideNext, slidePrev }: SlideArrowProps) => {
  return (
    <div>
      <Button clickHandler={slidePrev} className="bg-white text-blue-600">
        <BiArrowBack className="w-8 h-8" />
      </Button>
      <Button clickHandler={slideNext} className="bg-blue-600 text-white ml-3">
        <BiArrowBack className="w-8 h-8 rotate-180" />
      </Button>
    </div>
  );
};

interface SlickSLiderProps {
  label: string;
  heading: React.ReactNode;
  data: ServicesQueryReturnType;
}

export default function SlickSlider(props: SlickSLiderProps) {
  const slider = createRef<Slider>();
  const services = props.data.allServicesJson.edges;

  const nextSLide = () => slider.current?.slickNext();
  const prevSlide = () => slider.current?.slickPrev();

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="inline-block">
            <SubHeading>{props.label}</SubHeading>
            <div>{props.heading}</div>
          </div>
          <div className="inline-block relative">
            <SlideArrow slideNext={nextSLide} slidePrev={prevSlide} />
          </div>
        </div>
        <div className="mt-10 md:mt-16">
          <Slider
            ref={slider}
            arrows={false}
            dots
            dotsClass="flex justify-center items-center mt-6"
            appendDots={(dots) => {
              return <ul>{dots}</ul>;
            }}
            customPaging={() => (
              <div className="bg-gray-300 w-10 h-2 mx-1.5 rounded-md transition-all duration-200"></div>
            )}
          >
            {services.map(({ node }) => (
              <div key={node.title} className="text-center px-2">
                <div className="text-3xl font-medium uppercase mb-6">
                  {node.title}
                </div>
                <p className="text-gray-500 max-w-xl mx-auto">
                  {node.description}
                </p>
                <ul
                  className="text-left space-y-2 md:space-y-0 mt-6 md:mt-8 list-inside
                    sm:grid sm:grid-cols-2 sm:gap-y-3 max-w-4xl mx-auto"
                >
                  {node.steps.map((step, i) => (
                    <li key={step} className="text-sm md:text-xl font-light">
                      <div
                        className="h-6 w-6 md:h-10 md:w-10 rounded-full bg-blue-500 text-center
                          mr-2 font-bold p-0.5 inline-flex justify-center items-center text-white
                          text-lg"
                      >
                        {i + 1}
                      </div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
