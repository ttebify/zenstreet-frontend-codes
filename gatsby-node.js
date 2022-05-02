/** @type {import('gatsby').GatsbyNode["onCreatePage"]} */

// called after every page is created. Any route that starts with /app
// is a restricted content and the page will be created on demand
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";
    // Update the page.
    createPage(page);
  }
};
