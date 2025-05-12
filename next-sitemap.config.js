/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vultuslifesciences.com", // ✅ Replace with your actual domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://vultuslifesciences.com/sitemap.xml",
    ],
  },
};

