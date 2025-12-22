import Link from "next/link";
import Container from "@/components/Container";

const features = [
  { title: "Sweat-wicking", desc: "Stay dry through every session." },
  { title: "Squat-proof", desc: "Confidence you can feel." },
  { title: "Soft compression", desc: "Support without restriction." },
];

const collections = [
  { title: "New In", href: "/collections/new" },
  { title: "Best Sellers", href: "/collections/bestsellers" },
  { title: "Matching Sets", href: "/collections/sets" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b">
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-2 md:py-20">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-700">
                New Drop • Seamless Collection
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Move like a wave. Train like you mean it.
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Premium fitness clothing designed for performance, comfort, and clean style.
              </p>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/shop"
                  className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90"
                >
                  Shop All
                </Link>
                <Link
                  href="/collections/new"
                  className="rounded-md border px-5 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  Explore New In
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {features.map((f) => (
                  <div key={f.title} className="rounded-lg border p-4">
                    <div className="text-sm font-medium">{f.title}</div>
                    <div className="mt-1 text-sm text-gray-600">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image placeholder */}
            <div className="rounded-xl border bg-gradient-to-b from-gray-50 to-white">
              <div className="flex h-[360px] items-center justify-center text-sm text-gray-500 md:h-[440px]">
                Hero image / lifestyle shot
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Collections */}
      <section className="py-14">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Shop by collection</h2>
              <p className="mt-2 text-gray-600">Quick paths to your best sellers and new drops.</p>
            </div>
            <Link href="/shop" className="text-sm hover:underline">
              View all
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {collections.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group rounded-xl border p-6 hover:bg-gray-50"
              >
                <div className="text-lg font-medium">{c.title}</div>
                <div className="mt-2 text-sm text-gray-600">
                  Tap to explore →
                </div>
                <div className="mt-6 h-28 rounded-lg bg-gradient-to-b from-gray-100 to-white" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Social proof / trust bar */}
      <section className="border-y bg-gray-50 py-10">
        <Container>
          <div className="grid gap-6 text-center md:grid-cols-3 md:text-left">
            <div>
              <div className="text-sm font-medium">Fast shipping</div>
              <div className="mt-1 text-sm text-gray-600">Dispatch in 24–48 hours.</div>
            </div>
            <div>
              <div className="text-sm font-medium">Easy returns</div>
              <div className="mt-1 text-sm text-gray-600">30-day hassle-free returns.</div>
            </div>
            <div>
              <div className="text-sm font-medium">Fit help</div>
              <div className="mt-1 text-sm text-gray-600">Size guide + support team.</div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}