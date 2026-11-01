import { GA_MEASUREMENT_ID } from "@/lib/analytics";

// Google's own install snippet, rendered at the top of <head> in every root
// layout so it loads before anything else, once per page. Client-side page
// changes are counted by GA4 enhanced measurement (browser history events).
export default function GoogleTag() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
        }}
      />
    </>
  );
}
