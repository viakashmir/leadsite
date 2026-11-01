import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import MobileQuoteBar from "@/components/MobileQuoteBar";
import { getEnquiryOptions } from "@/lib/locations";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { LOGO_URL, siteGraph } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

// Display serif for headings and the wordmark.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}: Customised Holiday Packages from Verified Local Agents`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME}: Customised Holiday Packages from Verified Local Agents`,
    description: SITE_DESCRIPTION,
    locale: "en_IN",
    images: [{ url: LOGO_URL, width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
  },
  // Ownership tags for Search Console, Bing Webmaster Tools and Yandex,
  // set as Vercel env vars once each account is created.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.YANDEX_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const enquiryOptions = await getEnquiryOptions();
  return (
    <html
      lang="en-IN"
      className={`${jakarta.variable} ${cormorant.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white pb-[72px] text-ink lg:pb-0">
        <JsonLd data={siteGraph()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileQuoteBar options={enquiryOptions} />
      </body>
    </html>
  );
}
