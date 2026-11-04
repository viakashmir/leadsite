import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

// PNG icons for Android home screens and crawlers that skip SVG favicons.
// icon-192/512.png are rendered from src/app/icon.svg; regenerate both if it changes.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: "Holiday packages for India and abroad, planned around you.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#7a1f2b",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
