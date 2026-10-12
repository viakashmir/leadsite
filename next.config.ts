import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pixabay.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
    ],
  },
  async redirects() {
    return [
      // WanderLeads-era URLs -> TravelTriangle-style structure.
      { source: "/destinations", destination: "/tour-packages", permanent: true },
      { source: "/destinations/jammu-and-kashmir", destination: "/tour-packages/kashmir", permanent: true },
      { source: "/destinations/golden-triangle-india", destination: "/tour-packages/golden-triangle", permanent: true },
      { source: "/destinations/:slug", destination: "/tour-packages/:slug", permanent: true },
      { source: "/packages", destination: "/tour-packages", permanent: true },
      { source: "/leads/jammu-and-kashmir/:path*", destination: "/leads/kashmir/:path*", permanent: true },
      { source: "/leads/golden-triangle-india/:path*", destination: "/leads/golden-triangle/:path*", permanent: true },
      { source: "/online-leads-for-travel-agents", destination: "/agent/register", permanent: false },
    ];
  },
};

export default nextConfig;
