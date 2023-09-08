/** @type {import('next').NextConfig} */
const nextConfig = {
   // output: "export",
   images: {
      // unoptimized: true,
      domains: ["images.dog.ceo"],
   },
   redirects: async () => {
      return [
         {
            source: "/netUsers",
            destination: "/",
            permanent: false,
         },
         {
            source: "/netUsers/:slug",
            destination: "/",
            permanent: false,
         },
      ];
   },
};

module.exports = nextConfig;
