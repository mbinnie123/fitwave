import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const nav = [{ href: "/size-guide", label: "Size Guide" }];

const shopMenu = {
  label: "Shop",
  href: "/shop",
  columns: [
    {
      title: "Browse",
      links: [
        { href: "/collections/new", label: "New In" },
        { href: "/collections/bestsellers", label: "Best Sellers" },
        { href: "/collections/sets", label: "Matching Sets" },
        { href: "/collections/accessories", label: "Accessories" },
      ],
    },
    {
      title: "Women",
      links: [
        { href: "/collections/women", label: "Shop All Women" },
        { href: "/collections/women/tops", label: "Tops" },
        { href: "/collections/women/bottoms", label: "Bottoms" },
        { href: "/collections/women/leggings", label: "Leggings" },
      ],
    },
    {
      title: "Men",
      links: [
        { href: "/collections/men", label: "Shop All Men" },
        { href: "/collections/men/tops", label: "Tops" },
        { href: "/collections/men/bottoms", label: "Bottoms" },
        { href: "/collections/men/hoodies", label: "Hoodies" },
      ],
    },
  ],
  promos: [
    {
      eyebrow: "Seasonal",
      title: "Winter Training",
      subtitle: "Warm layers. Zero bulk.",
      href: "/collections/winter-training",
      imageSrc: "/assets/fitwave-winter-training.png",
    },
    {
      eyebrow: "Bundle & Save",
      title: "2-Piece Sets",
      subtitle: "Built for everyday wear.",
      href: "/collections/sets",
      imageSrc: "/assets/fitwave-sets-bundle.png",
    },
  ],
};

const womenMenu = {
  label: "Women",
  href: "/collections/women",
  sections: [
    {
      title: "Shop",
      links: [
        { href: "/collections/women/new", label: "New In" },
        { href: "/collections/women/bestsellers", label: "Best Sellers" },
        { href: "/collections/women/tops", label: "Tops" },
        { href: "/collections/women/bottoms", label: "Bottoms" },
        { href: "/collections/women/sets", label: "Matching Sets" },
      ],
    },
    {
      title: "Collections",
      links: [
        { href: "/collections/women/training", label: "Training" },
        { href: "/collections/women/recovery", label: "Recovery" },
        { href: "/collections/women/accessories", label: "Accessories" },
        { href: "/collections/women/leggings", label: "Leggings" },
      ],
    },
  ],
  featured: {
    eyebrow: "Featured Drop",
    title: "Apex Seam Tee",
    subtitle: "Sculpting fit. Built to move.",
    href: "/shop",
    imageSrc: "/assets/fitwave-apex-seam-tee-model-woman.png",
  },
};

const menMenu = {
  label: "Men",
  href: "/collections/men",
  sections: [
    {
      title: "Shop",
      links: [
        { href: "/collections/men/new", label: "New In" },
        { href: "/collections/men/bestsellers", label: "Best Sellers" },
        { href: "/collections/men/tops", label: "Tops" },
        { href: "/collections/men/bottoms", label: "Bottoms" },
        { href: "/collections/men/hoodies", label: "Hoodies" },
      ],
    },
    {
      title: "Essentials",
      links: [
        { href: "/collections/men/sets", label: "Matching Sets" },
        { href: "/collections/men/training", label: "Training" },
        { href: "/collections/men/recovery", label: "Recovery" },
        { href: "/collections/men/accessories", label: "Accessories" },
      ],
    },
  ],
  featured: {
    eyebrow: "Featured Drop",
    title: "Apex Seam Tee",
    subtitle: "Clean silhouette. Built for intensity.",
    href: "/shop",
    imageSrc: "/assets/fitwave-apex-seam-tee-model-man.png",
  },
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded bg-black p-1">
              <Image
                src="/assets/fitwave-assents-logo.svg"
                alt="FitWave logo"
                width={50}
                height={50}
                priority
              />
            </div>
            <span
              className="tracking-wide text-2xl md:text-3xl"
              style={{ fontFamily: '"lindsey-signature", sans-serif', fontWeight: 900, fontStyle: 'normal' }}
            >
              FitWave
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">

            {/* Shop dropdown (hover) */}
            <div className="relative group">
              <Link
                href={shopMenu.href}
                className="text-sm text-gray-700 hover:text-black"
              >
                {shopMenu.label}
              </Link>

              {/* Dropdown panel */}
              <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[920px] -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {/* Hover bridge to keep dropdown open while moving cursor from trigger to panel */}
                <div className="absolute -top-4 left-0 h-4 w-full" />

                <div className="overflow-hidden rounded-2xl border bg-white shadow-xl">
                  <div className="grid gap-0 md:grid-cols-5">
                    {/* Link columns */}
                    <div className="md:col-span-3">
                      <div className="grid gap-8 p-8 sm:grid-cols-3">
                        {shopMenu.columns.map((col) => (
                          <div key={col.title}>
                            <div className="text-xs font-medium uppercase tracking-wider text-black/60">
                              {col.title}
                            </div>
                            <ul className="mt-4 space-y-3">
                              {col.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    className="group/link inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black"
                                  >
                                    <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition group-hover/link:bg-black" />
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="border-t bg-gray-50 px-8 py-4">
                        <Link
                          href={shopMenu.href}
                          className="text-sm font-medium text-black hover:underline"
                        >
                          Browse everything →
                        </Link>
                      </div>
                    </div>

                    {/* Promo cards */}
                    <div className="md:col-span-2 border-l bg-gradient-to-b from-white to-gray-50 p-6">
                      <div className="grid gap-4">
                        {shopMenu.promos.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className="group rounded-xl border bg-white p-4 hover:shadow-sm"
                          >
                            <div className="text-xs font-medium uppercase tracking-wider text-black/60">
                              {p.eyebrow}
                            </div>
                            <div className="mt-1 text-base font-semibold tracking-tight text-black">
                              {p.title}
                            </div>
                            <div className="mt-1 text-sm text-gray-600">
                              {p.subtitle}
                            </div>
                            <div className="mt-3 overflow-hidden rounded-lg border">
                              <div className="relative aspect-[16/9]">
                                <Image
                                  src={p.imageSrc}
                                  alt={p.title}
                                  fill
                                  className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                                  sizes="320px"
                                />
                              </div>
                            </div>
                            <div className="mt-3 text-sm font-medium text-black">
                              Shop now →
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Women dropdown (hover) */}
            <div className="relative group">
              <Link
                href={womenMenu.href}
                className="text-sm text-gray-700 hover:text-black"
              >
                {womenMenu.label}
              </Link>

              {/* Dropdown panel */}
              <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[720px] -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {/* Hover bridge to keep dropdown open while moving cursor from trigger to panel */}
                <div className="absolute -top-4 left-0 h-4 w-full" />
                <div className="overflow-hidden rounded-2xl border bg-white shadow-xl">
                  <div className="grid gap-0 md:grid-cols-3">
                    {/* Links */}
                    <div className="md:col-span-2">
                      <div className="grid gap-8 p-8 sm:grid-cols-2">
                        {womenMenu.sections.map((section) => (
                          <div key={section.title}>
                            <div className="text-xs font-medium uppercase tracking-wider text-black/60">
                              {section.title}
                            </div>
                            <ul className="mt-4 space-y-3">
                              {section.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    className="group/link inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black"
                                  >
                                    <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition group-hover/link:bg-black" />
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="border-t bg-gray-50 px-8 py-4">
                        <Link
                          href={womenMenu.href}
                          className="text-sm font-medium text-black hover:underline"
                        >
                          View all Women’s →
                        </Link>
                      </div>
                    </div>

                    {/* Featured card */}
                    <div className="border-l bg-gradient-to-b from-white to-gray-50 p-6">
                      <div className="text-xs font-medium uppercase tracking-wider text-black/60">
                        {womenMenu.featured.eyebrow}
                      </div>
                      <div className="mt-2 text-lg font-semibold tracking-tight text-black">
                        {womenMenu.featured.title}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        {womenMenu.featured.subtitle}
                      </div>

                      <Link
                        href={womenMenu.featured.href}
                        className="mt-4 inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
                      >
                        Shop now
                      </Link>

                      <div className="mt-6 overflow-hidden rounded-xl border bg-white">
                        <div className="relative aspect-[4/5]">
                          <Image
                            src={womenMenu.featured.imageSrc}
                            alt="Women featured drop"
                            fill
                            className="object-cover"
                            sizes="240px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Men dropdown (hover) */}
            <div className="relative group">
              <Link
                href={menMenu.href}
                className="text-sm text-gray-700 hover:text-black"
              >
                {menMenu.label}
              </Link>

              {/* Dropdown panel */}
              <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[720px] -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {/* Hover bridge to keep dropdown open while moving cursor from trigger to panel */}
                <div className="absolute -top-4 left-0 h-4 w-full" />
                <div className="overflow-hidden rounded-2xl border bg-white shadow-xl">
                  <div className="grid gap-0 md:grid-cols-3">
                    {/* Links */}
                    <div className="md:col-span-2">
                      <div className="grid gap-8 p-8 sm:grid-cols-2">
                        {menMenu.sections.map((section) => (
                          <div key={section.title}>
                            <div className="text-xs font-medium uppercase tracking-wider text-black/60">
                              {section.title}
                            </div>
                            <ul className="mt-4 space-y-3">
                              {section.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    className="group/link inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black"
                                  >
                                    <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition group-hover/link:bg-black" />
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="border-t bg-gray-50 px-8 py-4">
                        <Link
                          href={menMenu.href}
                          className="text-sm font-medium text-black hover:underline"
                        >
                          View all Men’s →
                        </Link>
                      </div>
                    </div>

                    {/* Featured card */}
                    <div className="border-l bg-gradient-to-b from-white to-gray-50 p-6">
                      <div className="text-xs font-medium uppercase tracking-wider text-black/60">
                        {menMenu.featured.eyebrow}
                      </div>
                      <div className="mt-2 text-lg font-semibold tracking-tight text-black">
                        {menMenu.featured.title}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        {menMenu.featured.subtitle}
                      </div>

                      <Link
                        href={menMenu.featured.href}
                        className="mt-4 inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
                      >
                        Shop now
                      </Link>

                      <div className="mt-6 overflow-hidden rounded-xl border bg-white">
                        <div className="relative aspect-[4/5]">
                          <Image
                            src={menMenu.featured.imageSrc}
                            alt="Men featured drop"
                            fill
                            className="object-cover"
                            sizes="240px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-700 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/search" className="text-sm text-gray-700 hover:text-black">
              Search
            </Link>
            <Link
              href="/cart"
              className="rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
            >
              Cart
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}