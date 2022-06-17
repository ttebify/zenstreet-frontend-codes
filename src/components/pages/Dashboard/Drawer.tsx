import React from "react";
import Slider from "react-slick";
import { IconBaseProps } from "react-icons";
import Link from "../../Link";
import { BsEmojiSmile, BsQuestionOctagonFill } from "react-icons/bs";
import { TiMessages, TiSocialFacebook } from "react-icons/ti";
import PageContainer from "../../PageContainer/PageContainer";
import { RiDashboardLine, RiLuggageDepositLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { MdAutorenew, MdOutlineSupportAgent } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { FaBlog } from "react-icons/fa";

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
    icon: (props?: IconBaseProps) => <RiDashboardLine {...props} />,
    heading: "Dashboard",
    url: "/app/dashboard",
  },
  {
    icon: (props?: IconBaseProps) => <RiLuggageDepositLine {...props} />,
    heading: "Deposit",
    url: "/app/deposit",
  },
  {
    icon: (props?: IconBaseProps) => <GiMoneyStack {...props} />,
    heading: "Withdrawal",
    url: "/app/withdrawal",
  },
  {
    icon: (props?: IconBaseProps) => <MdAutorenew {...props} />,
    heading: "Auto Invest",
    url: "/app/auto-invest",
  },
  {
    icon: (props?: IconBaseProps) => <FaBlog {...props} />,
    heading: "Blog",
    url: "/blog",
  },
  {
    icon: (props?: IconBaseProps) => <BsQuestionOctagonFill {...props} />,
    heading: "How TO",
    url: "/how-to",
  },
  {
    icon: (props?: IconBaseProps) => <TiSocialFacebook {...props} />,
    heading: "Socials",
    url: "/about#socials",
  },
  {
    icon: (props?: IconBaseProps) => <BsEmojiSmile {...props} />,
    heading: "Happiness Center",
    url: "/happiness-center",
  },
  {
    icon: (props?: IconBaseProps) => <TiMessages {...props} />,
    heading: "FAQ",
    url: "/frequently-asked-questions",
  },
  {
    icon: (props?: IconBaseProps) => <MdOutlineSupportAgent {...props} />,
    heading: "Feedback Support",
    url: "/feedback-support",
  },
  {
    icon: (props?: IconBaseProps) => <VscOrganization {...props} />,
    heading: "About Us",
    url: "/about-us",
  },
];

export default function Drawer() {
  return (
    <PageContainer
      topSection={() => <AdvertSlider data={adverts} />}
      heading="Where do you want to visit today?"
    >
      <div className="flex flex-wrap py-10 mx-auto max-w-screen-md justify-center">
        {features.map((summary) => (
          <FeatureLink
            key={summary.heading}
            icon={summary.icon}
            heading={summary.heading}
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
        dots={false}
        arrows={false}
        dotsClass="flex justify-center items-center mt-3"
        slidesPerRow={1}
        /* appendDots={(dots) => {
          return <ul>{dots}</ul>;
        }}
        customPaging={() => (
          <div className="bg-white w-10 h-2 mx-1.5 rounded-md transition-all duration-200" />
        )} */
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
  url: string;
}
function FeatureLink({ icon, heading, url }: FeatureLinkProps) {
  return (
    <Link
      to={url}
      className=" bg-[#ff7f30] m-3 w-20 group overflow-hidden inline-flex flex-col items-center
      text-white hover:shadow-md transition-all duration-200 hover:text-[#ff7f30] rounded-md p-2
      hover:bg-white"
    >
      <div className="p-3 flex justify-center items-center overflow-hidden">
        {icon({ className: "w-8 h-8" })}
      </div>
      <p className="text-xs text-center">{heading}</p>
    </Link>
  );
}
