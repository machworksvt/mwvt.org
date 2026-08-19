import { useRef } from "react";

const ADDRESS = "501 Industrial Park Road, Blacksburg, VA 24060";
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

// Same rendered size as the original 3-photo row (max-w-6xl / 3 columns).
const PHOTO_WIDTH = 380;
const PHOTO_GAP = 8;

const LAB_PHOTOS = [
  { src: "/images/aedl.jpg", alt: "The Aerospace Engineering Design Lab building" },
  { src: "/images/aedl_outside.jpg", alt: "Outside the Aerospace Engineering Design Lab" },
  { src: "/images/aedl_bay.jpg", alt: "Inside the Aerospace Engineering Design Lab bay" },
  { src: "/images/aedl_wrap.jpg", alt: "The Aerospace Engineering Design Lab wrap" },
  { src: "/images/aedl_test.jpg", alt: "Testing at the Aerospace Engineering Design Lab" },
  { src: "/images/aedl_funny.jpg", alt: "The team at the Aerospace Engineering Design Lab" },
];

export default function Lab() {
  const scrollerRef = useRef(null);

  const scrollByOne = (direction) => {
    scrollerRef.current?.scrollBy({
      left: direction * (PHOTO_WIDTH + PHOTO_GAP),
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Dark header — headline, address, CTA */}
      <section className="bg-ink px-8 pt-32 pb-16 text-bone md:px-12">
        <h1 className="max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-6xl">
          Virginia Tech's Aerospace Engineering Design Lab
        </h1>
        <p className="mt-4 text-bone/60">{ADDRESS}</p>

        <a
          href="https://eng.vt.edu/undergraduate/aerospace-engineering-design-lab.html"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-md bg-signal px-8 py-4 text-center font-display font-bold text-ink transition-colors hover:bg-signal/90"
        >
          Learn More about the AEDL
        </a>
      </section>

      {/* Orange band with lab photos — a horizontally scrollable strip,
          same photo size as before, with edge buttons to page through. */}
      <section className="relative bg-signal py-10">
        <button
          type="button"
          onClick={() => scrollByOne(-1)}
          aria-label="Scroll photos left"
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/30 bg-ink/80 text-bone transition-colors hover:border-ink hover:bg-ink md:left-4"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollByOne(1)}
          aria-label="Scroll photos right"
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/30 bg-ink/80 text-bone transition-colors hover:border-ink hover:bg-ink md:right-4"
        >
          ›
        </button>

        <div
          ref={scrollerRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth px-14"
        >
          {LAB_PHOTOS.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              style={{ width: PHOTO_WIDTH }}
              className="aspect-video shrink-0 snap-start object-cover"
            />
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="bg-ink">
        <div className="px-8 pt-16 pb-8 md:px-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Find Us
          </p>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-bone md:text-3xl">
            Our Location
          </h2>
        </div>
        <iframe
          title="Map showing the Aerospace Engineering Design Lab location"
          src={MAPS_EMBED_SRC}
          className="h-[450px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
