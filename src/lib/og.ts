import { LOGO_URL } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { isPhoto } from "@/lib/media";

// Share image for a page's Open Graph tags (link previews in WhatsApp, X,
// LinkedIn, Facebook and AI assistants). A page that sets its own openGraph
// object replaces the layout's, so every such page must pass images itself.
// Uses the first real photo among the candidates (page hero first), else the logo.
export function ogImages(alt: string, ...candidates: (string | null | undefined)[]) {
  const src = candidates.find((c) => isPhoto(c));
  return src ? [{ url: absoluteUrl(src), alt }] : [{ url: LOGO_URL, width: 512, height: 512, alt }];
}
