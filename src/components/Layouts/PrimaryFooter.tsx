import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { GiPositionMarker } from "react-icons/gi";
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import Link from "../Link";
import Section from "./Section";

const navLinks = [
  {
    title: "Join Our Affiliate Program",
    children: [
      {
        title: "Our Products",
        href: "/our-products",
      },
      {
        title: "ZenStreet Careers",
        href: "/zenstreet-careers",
      },
      {
        title: "Happiness Center",
        href: "/happiness-center",
      },
    ],
  },
  {
    title: "Join our Communities",
    children: [
      {
        title: "Our Services",
        href: "/services",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Road Map",
        href: "/road-map",
      },
    ],
  },
];

const footerQuery = graphql`
  query FooterComponentQuery {
    site {
      siteMetadata {
        name
        description
        socials {
          facebook {
            name
            url
          }
          instagram {
            name
            url
          }
          twitter {
            name
            url
          }
        }
        contact {
          country
          mail
          tel
        }
      }
    }
  }
`;

interface FooterQueryReturnType {
  site: {
    siteMetadata: {
      name: string;
      description: string;
      socials: {
        facebook: {
          name: string;
          url: string;
        };
        instagram: {
          name: string;
          url: string;
        };
        twitter: {
          name: string;
          url: string;
        };
      };
      contact: {
        country: string;
        mail: string;
        tel: string;
      };
    };
  };
}
export default function PrimaryFooter() {
  return (
    <footer>
      <StaticQuery
        query={footerQuery}
        render={(data: FooterQueryReturnType) => {
          const { description, name, /* socials */ contact } =
            data.site.siteMetadata;

          return (
            <Section noPadding={false} className="text-center md:text-left pb-10">
              <div className="md:flex md:justify-between">
                <div className="mb-8 md:w-[20%] lg:w-1/4">
                  <h5>{name}</h5>
                  <p className="md:text-base text-gray-500 max-w-xl mx-auto">{description}</p>
                  <div className="space-x-2 mt-3">
                    {new Array(3).fill("").map((i, index) => (
                      <div key={index} className="h-6 w-6 bg-blue-600 inline-block" />
                    ))}
                  </div>
                </div>
                {navLinks.map((item) => (
                  <div key={item.title} className="mb-8 md:w-[20%] lg:w-1/4">
                    <h5 className="mb-3 text-xl text-gray-600">{item.title}</h5>
                    <ul>
                      {item.children.map((link) => (
                        <li key={link.title}>
                          <Link
                            to={link.href}
                            className="text-gray-500 underline md:text-base"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="mb-8 md:w-[20%] lg:w-1/4 md:text-base">
                  <h5 className="mb-3 text-xl text-gray-600">Contact us</h5>
                  <div className="text-gray-500 flex items-center justify-center md:justify-start">
                    <div className="inline-block mr-1">
                      <GiPositionMarker />
                    </div>
                    {contact.country}
                  </div>
                  <div className="text-gray-500 flex items-center justify-center md:justify-start">
                    <div className="inline-block mr-1">
                      <BsTelephone />
                    </div>
                    {contact.tel}
                  </div>
                  <div className="text-gray-500 flex items-center justify-center md:justify-start">
                    <div className="inline-block mr-1">
                      <GoMail />
                    </div>
                    {contact.mail}
                  </div>
                </div>
              </div>
              <div className="space-x-2 text-center">
                <Link to="/terms" className="text-gray-500 underline text-xs">
                  Disclaimer
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-gray-500 underline text-xs"
                >
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-500 underline text-xs">
                  Terms of Usage
                </Link>
              </div>
              <div className="text-gray-500 text-sm mt-3 text-center">
                {new Date().getFullYear()} {name}. All right reserved.
              </div>
            </Section>
          );
        }}
      />
    </footer>
  );
}
