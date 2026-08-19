import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      <div className="relative h-[85vh] w-full overflow-hidden">
        <motion.img
          src="/images/team.jpg"
          alt="The MachWorks team standing in front of Virginia Tech's engineering building with the Icarus airframe"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 55%" }}
        />

        {/* Split-color typographic treatment — no eyebrow, no box, just
            the slogan itself as the visual, anchored toward the top of
            the photo so it doesn't sit over anyone's face. */}
        <div className="pointer-events-none absolute inset-0 bg-ink/35" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start gap-6 px-8 pt-24 text-center md:pt-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl"
          >
            <span className="text-bone">Hokies</span>{" "}
            <span className="text-signal">at Mach Speed</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Link
              to="/about"
              className="inline-block rounded-md border border-bone/25 px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:border-signal hover:text-signal"
            >
              About Our Team
            </Link>
          </motion.div>
        </div>
      </div>

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
          <div className="mb-14 flex justify-center px-8 md:px-12">
            <Link
              to="/sponsors"
              className="inline-block rounded-none border border-bone/30 bg-panel px-10 py-4 font-mono text-sm uppercase tracking-widest text-bone transition-colors hover:border-signal hover:text-signal"
            >
              Sponsor Us
            </Link>
          </div>

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