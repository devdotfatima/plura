/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "files.stripe.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
    // remotePatterns: ["subdomain", ""],
  },
  reactStrictMode: false,
};
export default nextConfig;
