/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com", // ✅ Add this line
    ],
  },
};

export default nextConfig;
