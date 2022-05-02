import React from "react";
import Slider from "react-slick";
import { IconBaseProps } from "react-icons";
import Link from "../../Link";
import { BsBriefcaseFill, BsCardChecklist, BsEmojiSmile } from "react-icons/bs";
import PageContainer from "../../PageContainer/PageContainer";

const adverts = [
  {
    id: 1,
    heading: "Advert About Anything",
    body: `Dashboard page here, very protected Lorem ipsum, dolor sit amet
consectetur adipisicing elit. Dicta ea praesentium distinctio culpa harum
sequi repudiandae voluptas?`,
  },
  {
    id: 1,
    heading: "Advert About Anything",
    body: `Dashboard page here, very protected Lorem ipsum, dolor sit amet
consectetur adipisicing elit. Dicta ea praesentium distinctio culpa harum
sequi repudiandae voluptas?`,
  },
  {
    id: 1,
    heading: "Advert About Anything",
    body: `Dashboard page here, very protected Lorem ipsum, dolor sit amet
consectetur adipisicing elit. Dicta ea praesentium distinctio culpa harum
sequi repudiandae voluptas?`,
  },
  {
    id: 1,
    heading: "Advert About Anything",
    body: `Dashboard page here, very protected Lorem ipsum, dolor sit amet
consectetur adipisicing elit. Dicta ea praesentium distinctio culpa harum
sequi repudiandae voluptas?`,
  },
];

const features = [
  {
    icon: (props?: IconBaseProps) => <BsCardChecklist {...props} />,
    heading: "Business Center",
    description: "View different funding options to invest in.",
    url: "/app/business-center",
  },
  {
    icon: (props?: IconBaseProps) => <BsBriefcaseFill {...props} />,
    heading: "Referral Activity",
    description: "Your referral bonuses, activities and tree all in one place",
    url: "/app/referrals",
  },
  {
    icon: (props?: IconBaseProps) => <BsEmojiSmile {...props} />,
    heading: "Account",
    description: "Account settings, configs, security and more.",
    url: "/app/account",
  },
  {
    icon: (props?: IconBaseProps) => <BsEmojiSmile {...props} />,
    heading: "Packages",
    description: "Packages bost your portfolio and multiplies your rewards",
    url: "/app/packs",
  },
  {
    icon: (props?: IconBaseProps) => <BsEmojiSmile {...props} />,
    heading: "Rewards",
    description: "Check all your rewards",
    url: "/app/rewards",
  },
];

export default function Dashboard() {
  return (
    <PageContainer
      topSection={() => <AdvertSlider data={adverts} />}
      heading="Where do you want to visit today?"
    >
      <div className="flex flex-wrap justify-around py-10 mx-auto">
        {features.map((summary) => (
          <FeatureLink
            key={summary.heading}
            icon={summary.icon}
            heading={summary.heading}
            desciption={summary.description}
            url={summary.url}
          />
        ))}
      </div>
    </PageContainer>
  );
}

interface AdvertSliderProps {
  data: {
    id: number;
    heading: string;
    body: string;
  }[];
}

export function AdvertSlider(props: AdvertSliderProps) {
  const services = props.data;

  return (
    <div className="relative">
      <Slider
        autoplay
        autoplaySpeed={5000}
        dots
        arrows={false}
        dotsClass="flex justify-center items-center mt-3"
        slidesPerRow={1}
        appendDots={(dots) => {
          return <ul>{dots}</ul>;
        }}
        customPaging={() => (
          <div className="bg-amber-100 w-10 h-2 mx-1.5 rounded-md transition-all duration-200" />
        )}
      >
        {services.map(({ id, heading, body }) => (
          <div
            key={id}
            className="px-5 bg-white shadow-sm py-6 max-w-xl mx-auto !block rounded-2xl"
          >
            <div className="text-base font-medium mb-2">{heading}</div>
            <p className="text-gray-500 text-sm mx-auto">{body}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

interface FeatureLinkProps {
  icon: (props?: IconBaseProps) => JSX.Element;
  heading: string;
  desciption: string;
  url: string;
}
function FeatureLink({ /* icon, */ heading, desciption, url }: FeatureLinkProps) {
  return (
    <Link
      to={url}
      className="w-full h-52 max-w-xs bg-white inline-block m-3 group rounded-3xl shadow-md hover:shadow-lg
        overflow-hidden ring-1 ring-gray-50"
    >
      <div className="mx-auto flex items-stretch h-full">
        <div className="mt-2 text-base !font-normal w-2/3 p-5">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p>{desciption}</p>
        </div>
        <div className="bg-gray-500 w-1/3">
          {/* {icon({
            className:
              "text-blue-400 opacity-100 group-hover:opacity-80 w-full h-full",
          })} */}
        </div>
      </div>
    </Link>
  );
}
