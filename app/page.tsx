"use client";

import Link from "next/link";
import Container from "../components/Container";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function HeroCarousel() {
  const slides = useMemo(
    () => [
      {
        src: "/assets/fitwave-alternative-logo-website-hero-image.png",
        alt: "FitWave alternative hero",
      },
      {
        src: "/assets/fitwave-become-the-storm-hoodie.jpeg",
        alt: "FitWave Become the Storm Hoodie",
        fit: "contain",
      },
      {
        src: "/assets/fitwave-apex-seam-tee-model-man.png",
        alt: "FitWave Apex Seam Tee - model (man)",
      },
      {
        src: "/assets/fitwave-apex-seam-tee-model-woman.png",
        alt: "FitWave Apex Seam Tee - model (woman)",
      },
      {
        src: "/assets/fitwave-pulse-air-model.png",
        alt: "FitWave Pulse Air - model",
      },
      {
        src: "/assets/fitwave-assents-hero-image.jpeg",
        alt: "FitWave hero campaign image",
        fit: "contain",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [isPaused, slides.length]);

  const goPrev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setActive((prev) => (prev + 1) % slides.length);

  return (
    <div
      className="relative h-[360px] overflow-hidden rounded-xl border bg-black md:h-[440px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        src={slides[active].src}
        alt={slides[active].alt}
        fill
        priority
        className={slides[active].fit === "contain" ? "object-contain p-2" : "object-cover"}
        sizes="(min-width: 768px) 50vw, 100vw"
      />

      {/* Overlay gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

      {/* Prev/Next */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-black shadow hover:bg-white"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-black shadow hover:bg-white"
      >
        ›
      </button>

      {/* Thumbnails */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/40 p-2 backdrop-blur">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`relative h-10 w-10 overflow-hidden rounded-full border transition ${i === active
              ? "border-white ring-2 ring-white/60"
              : "border-white/30 opacity-80 hover:opacity-100"
              }`}
          >
            <Image
              src={s.src}
              alt=""
              fill
              className="object-cover"
              sizes="40px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

const features = [
  { title: "Sweat-wicking", desc: "Stay dry through every session." },
  { title: "Squat-proof", desc: "Confidence you can feel." },
  { title: "Soft compression", desc: "Support without restriction." },
];

const collections = [
  { title: "Hoodies", href: "/collections/hoodies", image: "/assets/fitwave-hoodie-puff-print.jpg" },
  { title: "T-Shirts", href: "/collections/t-shirts", image: "/assets/fitwave-graphic-t-shirt.jpeg" },
  { title: "Tops", href: "/collections/tops", image: "/assets/fitwave-coreflex-quarter-zip-front.jpeg" },
  { title: "Shorts", href: "/collections/shorts", image: "/assets/fitwave-shorts.jpeg", imagePosition: "50% 85%" },
  { title: "Tracksuits/Cargos", href: "/collections/tracksuits-cargos", image: "/assets/cargos-cream.jpg", imagePosition: "50% 15%" },
  { title: "Joggers", href: "/collections/joggers", image:"/assets/fitwave-joggers.png", imagePosition: "50% 15%" },
  { title: "Jackets", href: "/collections/jackets", image:"/assets/fitwave-jacket-clean-studio.jpeg" },
  { title: "Footwear", href: "/collections/footwear", image: "/assets/fitwave-surgerunner-air-runner.png" },
];

function CollectionsCarousel() {
  const trackRef = useState<HTMLDivElement | null>(null)[0];
  // NOTE: we’ll set the ref via callback to avoid extra imports.
  const [track, setTrack] = useState<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (idx: number) => {
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    const clamped = Math.max(0, Math.min(idx, children.length - 1));
    const el = children[clamped];
    if (!el) return;
    track.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
    setActive(clamped);
  };

  const onScroll = () => {
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    if (!children.length) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    children.forEach((el, i) => {
      const elCenter = el.offsetLeft + el.clientWidth / 2;
      const dist = Math.abs(elCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });

    setActive(best);
  };

  return (
    <div className="relative">
      {/* ambient, inspired glow */}
      <div className="pointer-events-none absolute -left-16 -top-10 h-40 w-40 rounded-full bg-black/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-10 h-40 w-40 rounded-full bg-black/5 blur-3xl" />

      {/* Controls (above carousel) */}
<div className="mt-4 flex items-center justify-between gap-3">
  <div className="text-xs text-gray-500">
    {active + 1}/{collections.length}
  </div>

  <div className="flex items-center gap-2">
    <button
      type="button"
      aria-label="Previous collection"
      onClick={() => scrollToIndex(active - 1)}
      className="rounded-full border bg-white/90 px-3 py-2 text-sm shadow hover:bg-white"
    >
      ‹
    </button>
    <button
      type="button"
      aria-label="Next collection"
      onClick={() => scrollToIndex(active + 1)}
      className="rounded-full border bg-white/90 px-3 py-2 text-sm shadow hover:bg-white"
    >
      ›
    </button>
  </div>
</div>

      {/* Track */}
      <div
        ref={(el) => {
          if (el) setTrack(el);
        }}
        onScroll={onScroll}
        className="mt-6 flex gap-4 overflow-x-auto scroll-smooth px-1 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {collections.map((c, i) => (
          <Link
            key={c.title}
            href={c.href}
            className="group relative min-w-[78%] snap-center overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md sm:min-w-[48%] md:min-w-[32%]"
            style={{ scrollSnapAlign: "center" }}
          >
            {/* subtle motion feel */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-12 -top-10 h-48 w-48 rounded-full bg-black/5 blur-3xl" />
              <div className="absolute -left-10 -bottom-12 h-48 w-48 rounded-full bg-black/5 blur-3xl" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold tracking-tight">{c.title}</div>
                  <div className="mt-2 text-sm text-gray-600">Swipe to explore →</div>
                </div>

                {/* index chip */}
                <div className="rounded-full border bg-white/70 px-3 py-1 text-xs text-black/70 backdrop-blur">
                  {i + 1}/{collections.length}
                </div>
              </div>

             {/* featured image or fallback */}
<div className="mt-6 relative h-40 overflow-hidden rounded-xl border bg-gradient-to-b from-gray-100 to-white">
  {c.image ? (
    <img
      src={c.image}
      alt={`${c.title} featured image`}
      className="h-full w-full object-cover"
      style={{ objectPosition: (c as any).imagePosition || "50% 50%" }}
    />
  ) : (
    <>
      <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-black/5 blur-2xl" />
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-black/5 blur-3xl" />
      <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-black/5 blur-2xl" />
      <div className="absolute inset-0 flex items-center justify-center text-xs tracking-wide text-black/40">
        FITWAVE • PERFORMANCE
      </div>
    </>
  )}
</div>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Shop now
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {collections.map((c, i) => (
          <button
            key={c.title}
            type="button"
            aria-label={`Go to ${c.title}`}
            onClick={() => scrollToIndex(i)}
            className={`h-2.5 w-2.5 rounded-full border transition ${i === active ? "bg-black" : "bg-white hover:bg-gray-100"}`}
          />
        ))}
      </div>

      {/* Hint */}
      <div className="mt-4 text-center text-xs text-gray-500">
        Tip: swipe on mobile, scroll on desktop.
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="border-b">
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-2 md:py-20">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-700">
                New Drop • Seamless Collection
              </div>
              <h1
                className="mt-8 tracking-wide text-5xl md:text-6xl"
                style={{
                  fontFamily: '"lindsey-signature", sans-serif',
                  fontWeight: 900,
                  fontStyle: "normal",
                }}
              >
                FitWave Fitness Clothing
              </h1>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black/90 md:text-4xl">
                Ride the Wave, Become the Storm. 🌊⚡
              </h2>
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

            {/* Hero carousel */}
            <HeroCarousel />
          </div>
        </Container>
      </section>

      {/* Our Popular Seller */}
      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border bg-black text-white">
            {/* ambient glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-12">
              {/* Copy */}
              <div>
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
                  Our Popular Seller
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  The FitWave StormCore Tee⚡
                </h2>

                <p className="mt-4 max-w-md text-white/80">
                  Built for intensity. Styled for anywhere. Lightweight comfort with a clean silhouette
                  that holds its shape session after session.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                    Breathable, sweat-wicking fabric
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                    Athletic fit with stretch for movement
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                    Minimal branding — premium look
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
                  >
                    Shop StormCore Tee
                  </Link>

                  <Link
                    href="/size-guide"
                    className="rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Size Guide
                  </Link>
                </div>
              </div>

              {/* Layered images */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-[4/5]">
                  <div className="absolute inset-0 translate-x-6 -translate-y-4 rotate-3 rounded-2xl border border-white/15 bg-white/5 shadow-2xl" />

                  <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
                    <Image
                      src="/assets/stormcore/stormcore-1.jpeg"
                      alt="FitWave StormCore Tee"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 45vw, 90vw"
                    />
                  </div>

                  <div className="absolute bottom-0 right-0 h-[60%] w-[58%] translate-x-3 translate-y-3 overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
                    <Image
                      src="/assets/stormcore/stormcore-2.jpeg"
                      alt="FitWave StormCore Tee detail"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 20vw, 50vw"
                    />
                  </div>

                  <div className="absolute left-4 top-4 rounded-full bg-white/50 px-3 py-1 text-xs text-black/80 backdrop-blur-sm shadow">
                    StormCore • Best Seller
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Personal Favourite */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mb-12 text-center">
            <div className="inline-flex items-center rounded-full border bg-white px-4 py-1 text-xs tracking-wide text-black/70">
              Our Personal Favourite
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Chosen by the FitWave Team
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Pieces we actually train in. Tested across sessions, weather, and recovery days — these are the ones we reach for.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                src: "/assets/fitwave-apex-seam-tee-model-man.png",
                name: "Apex Seam Tee (Men)",
              },
              {
                src: "/assets/fitwave-apex-seam-tee-model-woman.png",
                name: "Apex Seam Tee (Women)",
              },
              {
                src: "/assets/stormcore-tee-white-cream-front.jpg",
                name: "StormCore Tee (Cream) — Front",
              },
              {
                src: "/assets/stormcore-tee-white-cream-back.jpg",
                name: "StormCore Tee (Cream) — Back",
              },
              {
                src: "/assets/fitwave-coreflex-quarter-zip-front.jpeg",
                name: "CoreFlex Quarter-Zip — Front",
              },
              {
                src: "/assets/fitwave-coreflex-quarter-zip-back.jpg",
                name: "CoreFlex Quarter-Zip — Back",
              },
              {
                src: "/assets/become-the-storm-hoodie-black-and-yellow-front.jpg",
                name: "Become the Storm Hoodie (Black) — Front",
              },
              {
                src: "/assets/become-the-storm-hoodie-back.png",
                name: "Become the Storm Hoodie (Black) — Back",
              },
              {
                src: "/assets/become-the-storm-white=and-grey-front.jpg",
                name: "Become the Storm Hoodie (White)— Front",
              },
              {
                src: "/assets/become-the-storm-hoodie-white-and-grey-dark-back.jpg",
                name: "Become the Storm Hoodie (White)— Back",
              },
              {
                src: "/assets/fitwave-emblem-t-shirt-front.jpg",
                name: "Emblem T-shirt — Front",
              },
              {
                src: "/assets/fitwave-emblem-t-shirt-back.jpg",
                name: "Emblem T-shirt — Back",
              },
              {
                src: "/assets/cargos-black-and-cream.jpeg",
                name: "Cream and Black Cargos — Front",
              },
              {
                src: "/assets/fitwave-hoodie-puff-print.jpg",
                name: "Puff Print StormCore Hoodie — Back",
              },
            ].map(({ src, name }, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border bg-gray-50"
              >
                <Image
                  src={src}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/40" />

                {/* Name caption */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/55 p-3 backdrop-blur-sm">
                  <div className="text-sm font-medium text-white">{name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial note */}
          <div className="mt-10 text-center">
            <p className="mx-auto max-w-2xl text-sm text-gray-500">
              No algorithms here — just what we genuinely love wearing. Updated as the collection evolves.
            </p>
          </div>
        </Container>
      </section>

      {/* Collections */}
      <section className="py-14">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Shop by collection</h2>
              <p className="mt-2 text-gray-600">Swipe through categories — designed to feel like a wave of ideas.</p>
            </div>
            <Link href="/shop" className="text-sm hover:underline">
              View all
            </Link>
          </div>

          <CollectionsCarousel />
        </Container>
      </section>

      {/* Winter Collection */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Winter Collection</h2>
            <p className="mt-2 text-gray-600">
              The wave is coming. Limited winter drops designed for cold conditions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "/assets/winter/winter-1.jpg",
              "/assets/winter/winter-2.jpg",
              "/assets/winter/winter-3.jpg",
              "/assets/winter/winter-4.jpeg",
            ].map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-xl border bg-white"
              >
                <Image
                  src={src}
                  alt={`FitWave Winter Jacket ${i + 1}`}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/collections/winter"
              className="inline-flex items-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              View Winter Collection
            </Link>
          </div>
        </Container>
      </section>

      {/* Introducing: SurgeRunner */}
      <section className="py-20 bg-gradient-to-b from-white via-zinc-50 to-slate-100">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-zinc-200 via-slate-100 to-zinc-300 p-[1px]">
            {/* chrome sheen */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.9)_0%,_rgba(255,255,255,0.25)_35%,_rgba(255,255,255,0)_70%)]" />

            <div className="relative rounded-3xl bg-white/60 backdrop-blur-xl">
              <div className="grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-12">
                {/* Copy */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1 text-xs tracking-wide text-black/70 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-200" />
                    Introducing
                  </div>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
                    FitWave SurgeAir Runner
                  </h2>

                  <p className="mt-4 max-w-md text-zinc-700">
                    A chrome-sleek runner built for speed sessions, city miles, and everyday flex. Lightweight feel, locked-in fit,
                    and breathable comfort — designed to move like a wave.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/shop"
                      className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-900/90"
                    >
                      Explore SurgeRunner
                    </Link>
                    <Link
                      href="/collections/new"
                      className="rounded-md border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-white"
                    >
                      See what’s new
                    </Link>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-black/10 bg-white/70 p-4 shadow-sm">
                      <div className="text-xs text-black/60">Weight</div>
                      <div className="mt-1 text-sm font-medium text-zinc-900">Feather-light build</div>
                    </div>
                    <div className="rounded-xl border border-black/10 bg-white/70 p-4 shadow-sm">
                      <div className="text-xs text-black/60">Fit</div>
                      <div className="mt-1 text-sm font-medium text-zinc-900">Secure, flexible hold</div>
                    </div>
                    <div className="rounded-xl border border-black/10 bg-white/70 p-4 shadow-sm">
                      <div className="text-xs text-black/60">Breathability</div>
                      <div className="mt-1 text-sm font-medium text-zinc-900">Air-flow mesh zones</div>
                    </div>
                  </div>
                </div>

                {/* Media: 3 photos */}
                <div className="relative">
                  <div className="grid gap-4 md:grid-cols-6">

                    {/* Photo 3 (Back) */}
                    <div className="relative md:col-span-6">
                      <div className="group relative aspect-video overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 shadow-sm">
                        <Image
                          src="/assets/air-runner-back.jpg"
                          alt="FitWave SurgeRunner Air Runner - back"
                          fill
                          className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-white/40" />
                      </div>
                    </div>

                    {/* Photo 1 */}
                    <div className="relative md:col-span-4">
                      <div className="group relative aspect-[5/4] md:aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-white via-zinc-50 to-slate-200 shadow-sm">
                        <Image
                          src="/assets/fitwave-surgerunner-air-runner.png"
                          alt="FitWave SurgeRunner Air Runner"
                          fill
                          className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0)_55%)]" />
                      </div>
                    </div>

                    {/* Photo 2 */}
                    <div className="relative md:col-span-2">
                      <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-white via-zinc-50 to-slate-200 shadow-sm">
                        <Image
                          src="/assets/fitwave-pulse-air-model.png"
                          alt="FitWave Pulse Air model"
                          fill
                          className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0)_55%)]" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
}