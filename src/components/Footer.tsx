import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-zinc-600 sm:grid-cols-3">
        <div>
          <div className="text-lg font-bold text-blue-700">{SITE_NAME}</div>
          <p className="mt-2 max-w-xs">
            Compare verified tour packages, get quotes from trusted travel agents, and plan your
            next holiday with confidence.
          </p>
        </div>
        <div>
          <div className="font-semibold text-zinc-900">For Travelers</div>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/destinations" className="hover:text-blue-700">
                Browse Destinations
              </Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-blue-700">
                Browse Packages
              </Link>
            </li>
            <li>
              <Link href="/agents" className="hover:text-blue-700">
                Find a Travel Agent
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-zinc-900">For Travel Agents</div>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/agent/register" className="hover:text-blue-700">
                Join Free
              </Link>
            </li>
            <li>
              <Link href="/leads" className="hover:text-blue-700">
                Buy Verified Leads
              </Link>
            </li>
            <li>
              <Link href="/agent/login" className="hover:text-blue-700">
                Agent Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
