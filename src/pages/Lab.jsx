const ADDRESS = "501 Industrial Park Road, Blacksburg, VA 24060";
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

export default function Lab() {
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

      {/* Orange band with the lab building photo, edge-to-edge like the
          old site. */}
      <section className="bg-signal py-10">
        <img
          src="/images/aedl.jpg"
          alt="The Aerospace Engineering Design Lab building"
          className="mx-auto aspect-video w-full max-w-6xl object-cover"
        />
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
