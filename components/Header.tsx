'use client';
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    // close mobile menu on route change
    setMobileOpen(false);
    setOpenAccordion(null);
  }, [pathname]);

  const mobileSections = useMemo(
    () => [
      {
        key: "shop",
        title: "Shop",
        href: shopMenu.href,
        links: shopMenu.columns.flatMap((c) => c.links),
        promos: shopMenu.promos,
      },
      {
        key: "women",
        title: "Women",
        href: womenMenu.href,
        links: womenMenu.sections.flatMap((s) => s.links),
        featured: womenMenu.featured,
      },
      {
        key: "men",
        title: "Men",
        href: menMenu.href,
        links: menMenu.sections.flatMap((s) => s.links),
        featured: menMenu.featured,
      },
    ],
    []
  );

  const toggleAccordion = (key: string) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
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

          <div className="flex items-center gap-2">
            {/* Mobile burger */}
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/70 backdrop-blur hover:bg-white md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="fitwave-mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {/* Animated icon */}
              <span className="sr-only">Menu</span>
              <span
                className={`absolute h-[2px] w-5 rounded bg-black transition-all duration-300 ${
                  mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-[2px] w-5 rounded bg-black transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-[2px] w-5 rounded bg-black transition-all duration-300 ${
                  mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                }`}
              />
              {/* subtle wave glow */}
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.12)_0%,_rgba(0,0,0,0)_60%)]" />
            </button>
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
        {/* Mobile menu */}
        <div
          id="fitwave-mobile-menu"
          className={`md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div
            className={`fixed right-0 top-0 z-50 h-full w-[86vw] max-w-sm overflow-hidden border-l bg-white shadow-2xl transition-transform duration-300 ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Chrome inspired header */}
            <div className="relative border-b bg-gradient-to-br from-zinc-100 via-white to-zinc-200 p-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.9)_0%,_rgba(255,255,255,0.15)_55%,_rgba(255,255,255,0)_75%)]" />
              <div className="relative flex items-center justify-between">
                <div className="text-sm font-medium text-black/80">Menu</div>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/70 hover:bg-white"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="h-full overflow-y-auto p-4">
              {/* Quick links */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/shop"
                  className="rounded-xl border bg-white p-4 text-sm font-medium text-black shadow-sm hover:bg-gray-50"
                >
                  Shop all
                </Link>
                <Link
                  href="/collections/new"
                  className="rounded-xl border bg-white p-4 text-sm font-medium text-black shadow-sm hover:bg-gray-50"
                >
                  New in
                </Link>
              </div>

              {/* Accordions */}
              <div className="mt-6 space-y-3">
                {mobileSections.map((section) => {
                  const isOpen = openAccordion === section.key;
                  return (
                    <div key={section.key} className="overflow-hidden rounded-2xl border">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(section.key)}
                        className="flex w-full items-center justify-between bg-white px-4 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-medium text-black">{section.title}</span>
                        <span
                          className={`text-black/70 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          ▾
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t bg-gray-50 px-4 py-3">
                            <Link
                              href={section.href}
                              className="text-sm font-medium text-black hover:underline"
                            >
                              View all {section.title} →
                            </Link>
                          </div>
                          <div className="bg-white px-4 py-3">
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                              {section.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    className="text-sm text-black/70 hover:text-black"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            {/* Shop promos (mobile) */}
                            {section.key === "shop" && section.promos?.length ? (
                              <div className="mt-5 grid gap-3">
                                <div className="text-xs font-medium uppercase tracking-wider text-black/50">
                                  Featured
                                </div>
                                {section.promos.map((p: any) => (
                                  <Link
                                    key={p.href}
                                    href={p.href}
                                    className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:bg-gray-50"
                                  >
                                    <div className="grid grid-cols-[1fr_88px] gap-3 p-4">
                                      <div>
                                        <div className="text-xs font-medium uppercase tracking-wider text-black/60">
                                          {p.eyebrow}
                                        </div>
                                        <div className="mt-1 text-sm font-semibold text-black">
                                          {p.title}
                                        </div>
                                        <div className="mt-1 text-xs text-black/60">
                                          {p.subtitle}
                                        </div>
                                        <div className="mt-2 text-sm font-medium text-black">
                                          Shop now →
                                        </div>
                                      </div>
                                      <div className="overflow-hidden rounded-xl border bg-white">
                                        <div className="relative aspect-[4/5]">
                                          <Image
                                            src={p.imageSrc}
                                            alt={p.title}
                                            fill
                                            className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                                            sizes="88px"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            ) : null}

                            {/* Women/Men featured (mobile) */}
                            {(section.key === "women" || section.key === "men") && section.featured ? (
                              <div className="mt-5 overflow-hidden rounded-2xl border bg-black text-white">
                                <div className="p-4">
                                  <div className="text-xs font-medium uppercase tracking-wider text-white/70">
                                    {section.featured.eyebrow}
                                  </div>
                                  <div className="mt-1 text-base font-semibold tracking-tight">
                                    {section.featured.title}
                                  </div>
                                  <div className="mt-1 text-sm text-white/80">
                                    {section.featured.subtitle}
                                  </div>
                                  <Link
                                    href={section.featured.href}
                                    className="mt-3 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
                                  >
                                    Shop now
                                  </Link>
                                </div>
                                <div className="relative aspect-[16/10] overflow-hidden border-t">
                                  <Image
                                    src={section.featured.imageSrc}
                                    alt={`${section.title} featured drop`}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 640px) 360px, 86vw"
                                  />
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Simple links */}
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl border bg-white px-4 py-4 text-sm font-medium text-black shadow-sm hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border bg-black p-4 text-white">
                <div className="text-xs uppercase tracking-wider text-white/70">FitWave</div>
                <div className="mt-2 text-sm text-white/80">Ride the Wave. Become the Storm. 🌊⚡</div>
                <div className="mt-4 flex gap-3">
                  <Link
                    href="/search"
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
                  >
                    Search
                  </Link>
                  <Link
                    href="/cart"
                    className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Cart
                  </Link>
                </div>
              </div>

              <div className="h-24" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}