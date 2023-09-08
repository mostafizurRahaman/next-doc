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
            source: "/contactus",
            destination: "/",
            permanent: false,
         },
         {
            source: "/contactus/:id",
            destination: "/",
            permanent: false,
         },
      ];
   },
};

module.exports = nextConfig;
