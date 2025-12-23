import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <Container>
        <div className="grid gap-10 py-10 md:grid-cols-4">
          <div>
            <div className="font-semibold">FitWave</div>
            <p className="mt-2 text-sm text-gray-600">
              Performance pieces built for training, recovery, and everyday wear.
            </p>

            {/* Brand / social logos */}
            <div className="mt-4 flex items-center gap-4 text-gray-400">
              <img
                src="/assets/logo-instagram.svg"
                alt="Instagram"
                className="h-5 w-5 hover:text-black"
              />
              <img
                src="/assets/logo-tiktok.svg"
                alt="TikTok"
                className="h-5 w-5 hover:text-black"
              />
              <img
                src="/assets/logo-youtube.svg"
                alt="YouTube"
                className="h-5 w-5 hover:text-black"
              />
              <img
                src="/assets/logo-x.svg"
                alt="X"
                className="h-5 w-5 hover:text-black"
              />
            </div>
            <div className="mt-6 flex max-w-xs items-center gap-4">
              <img
                src="/assets/fitwave-alternative-logo-website-hero-image.png"
                alt="FitWave alternative logo"
                className="h-22 w-auto object-contain"
              />
              <img
                src="/assets/fitwave-assents-hero-image.png"
                alt="FitWave assets hero image"
                className="h-16 w-auto object-contain"
              />
              <span
                className="tracking-wide text-2xl md:text-3xl"
                style={{ fontFamily: '"lindsey-signature", sans-serif', fontWeight: 900, fontStyle: 'normal' }}
              >
                FitWave
              </span>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium">Shop</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link className="hover:text-black" href="/collections/new">New In</Link></li>
              <li><Link className="hover:text-black" href="/collections/bestsellers">Best Sellers</Link></li>
              <li><Link className="hover:text-black" href="/collections/sets">Sets</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium">Support</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link className="hover:text-black" href="/size-guide">Size Guide</Link></li>
              <li><Link className="hover:text-black" href="/shipping-returns">Shipping & Returns</Link></li>
              <li><Link className="hover:text-black" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium">Newsletter</div>
            <p className="mt-3 text-sm text-gray-600">
              Drops, restocks, and training tips.
            </p>
            <form className="mt-3 flex gap-2">
              <input
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="you@email.com"
              />
              <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-black/90">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} FitWave. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}