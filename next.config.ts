import type { NextConfig } from "next";
import { INDEXNOW_KEY } from "./src/lib/site";

// Baseline hardening for every response. A full script CSP is left out on
// purpose: Razorpay Checkout injects its own scripts and frames.
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const PRIVATE_HEADERS = [
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
  { key: "Cache-Control", value: "private, no-store" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      { source: "/admin/:path*", headers: PRIVATE_HEADERS },
      { source: "/agent/dashboard/:path*", headers: PRIVATE_HEADERS },
      { source: "/api/:path*", headers: PRIVATE_HEADERS },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pixabay.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
    ],
  },
  // IndexNow expects the key at /{key}.txt on the site root.
  async rewrites() {
    return [{ source: `/${INDEXNOW_KEY}.txt`, destination: "/indexnow.txt" }];
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
