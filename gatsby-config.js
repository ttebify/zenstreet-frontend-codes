/** @type {import('gatsby').GatsbyConfig} */

module.exports = {
  siteMetadata: {
    name: "ZenStreet Global",
    title: `Crowdfund Your Way To Financial Freedom`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Take advantage of our innovative blockchain driven crowdsourcing technology
    to stay on top of your income.`,
    socials: {
      twitter: {
        name: "Twitter",
        url: "https://twitter.com",
      },
      instagram: {
        name: "Instagram",
        url: "https://instagram.com",
      },
      facebook: {
        name: "Facebook",
        url: "https://facebook.com",
      },
    },
    contact: {
      address: "address address, home gyhdbdhu,ug 357n cuuiekc",
      country: "Nigeria",
      tel: "+23470000000",
      mail: "support@senstreet.com",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "Google_Traking_Id",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      //@ts-ignore
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      //@ts-ignore
      __key: "pages",
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "services",
        path: "./src/fragments/",
      },
      //@ts-ignore
      __key: "services",
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layouts/index.tsx"),
      },
    },
    "gatsby-plugin-no-sourcemaps",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: "rgb(37, 99, 235)",
        showSpinner: true,
      },
    },
    "gatsby-plugin-netlify",
  ],
};
