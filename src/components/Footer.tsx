import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-12 bg-royal text-white/75">
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 text-sm sm:grid-cols-3">
        <div className="col-span-2 sm:col-span-1">
          <div className="font-display text-xl font-extrabold tracking-tight text-white">
            Tavel <span className="text-gold-soft">Package</span>
          </div>
          <p className="mt-2 max-w-xs">
            Compare verified tour packages, get quotes from trusted travel agents, and plan your
            next holiday with confidence.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-gold-soft">For Travellers</div>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/tour-packages" className="hover:text-white">
                All Tour Packages
              </Link>
            </li>
            <li>
              <Link href="/tour-packages/india" className="hover:text-white">
                India Tour Packages
              </Link>
            </li>
            <li>
              <Link href="/agents" className="hover:text-white">
                Find a Travel Agent
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gold-soft">For Travel Agents</div>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/agent/register" className="hover:text-white">
                Join Free
              </Link>
            </li>
            <li>
              <Link href="/leads" className="hover:text-white">
                Buy Verified Leads
              </Link>
            </li>
            <li>
              <Link href="/agent/login" className="hover:text-white">
                Agent Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav aria-label="Company" className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-1 px-4 pb-6 text-xs text-white/70">
        <Link href="/about-us" className="hover:text-white">About Us</Link>
        <Link href="/contact-us" className="hover:text-white">Contact Us</Link>
        <Link href="/editorial-policy" className="hover:text-white">Editorial Policy</Link>
      </nav>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
