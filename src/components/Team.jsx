import { motion } from "framer-motion";

// Add your real files to public/images/sponsors/ and list them here.
// name = alt text (accessibility + fallback if an image fails to load).
const SPONSORS = [
  { name: "Sponsor One", file: "sponsor-1.png" },
  { name: "Sponsor Two", file: "sponsor-2.png" },
  { name: "Sponsor Three", file: "sponsor-3.png" },
  { name: "Sponsor Four", file: "sponsor-4.png" },
  { name: "Sponsor Five", file: "sponsor-5.png" },
  { name: "Sponsor Six", file: "sponsor-6.png" },
  { name: "Sponsor Seven", file: "sponsor-7.png" },
];

// How many times to repeat the logo list in the DOM. More copies = more
// buffer before the loop has to reset, which matters most when you have
// few logos and/or a wide screen — without enough copies, the row runs
// out of content and shows blank space before looping back around.
const REPEAT_COUNT = 4;
const marqueeDistance = `-${100 / REPEAT_COUNT}%`;

export default function Team() {
  const repeatedSponsors = Array.from({ length: REPEAT_COUNT }, () => SPONSORS).flat();

  return (
    <section className="relative">
      {/* Full-bleed team photo */}
      <motion.img
        src="/images/team.jpg"
        alt="The MachWorks team standing in front of Virginia Tech's engineering building with the Icarus airframe"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="h-[85vh] w-full object-cover"
        style={{ objectPosition: "50% 55%" }}
      />

      {/* Sponsor bar — same photo continues underneath, blurred + dimmed */}
      <div className="relative overflow-hidden py-14">
        <div
          className="absolute inset-0 scale-110 bg-cover blur-md"
          style={{
            backgroundImage: "url(/images/team.jpg)",
            backgroundPosition: "50% 55%",
          }}
        />
        <div className="absolute inset-0 bg-ink/80" />

        <div className="relative z-10">
          <p className="mb-8 text-center font-display text-2xl font-bold text-bone md:text-3xl">
            Our Sponsors
          </p>

          {/* Scrolling logo track — list repeated REPEAT_COUNT times so
              there's always enough width queued up for a seamless loop */}
          <div className="overflow-hidden">
            <div
              className="flex w-max animate-marquee items-center gap-16"
              style={{ "--marquee-distance": marqueeDistance }}
            >
              {repeatedSponsors.map((sponsor, i) => (
                <img
                  key={`${sponsor.file}-${i}`}
                  src={`/images/sponsors/${sponsor.file}`}
                  alt={sponsor.name}
                  className="h-12 w-auto shrink-0 opacity-70 transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-16"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}