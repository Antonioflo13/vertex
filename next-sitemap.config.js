module.exports = {
  siteUrl: 'https://www.vertex-designs.com',
  generateRobotsTxt: true,
  exclude: ['/en*', '/disallowed'],
  // alternateRefs: [
  //   {
  //     href: 'https://www.vertex-designs.com',
  //     hreflang: 'en',
  //   },
  // ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/disallowed'],
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
