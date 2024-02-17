export default function handler(req, res) {
  const robots = `
  User-agent: *
  Disallow: /private/
  Sitemap: https://www.brr9.com/sitemap.xml
  `;
  res.send(robots);
}
