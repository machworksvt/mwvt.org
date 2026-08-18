import { motion } from "framer-motion";

const NAV_LINKS = ["About", "Team", "Aircraft", "Lab", "Contact"];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video — slow zoom/drift instead of a static frame */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 h-full w-full origin-center object-cover animate-hero-pan"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient so text stays legible over any footage */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/70" />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 md:px-12"
      >
        <span className="font-display text-xl font-bold tracking-tight text-signal">
          MachWorks
        </span>
        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-bone/75 md:flex">
          {NAV_LINKS.map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-colors hover:text-signal"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Headline block, anchored to the lower third */}
      <div className="relative z-10 flex h-[calc(100%-88px)] flex-col justify-end px-8 pb-20 md:px-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-signal">
          Virginia Tech · Autonomous Systems
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-2xl font-display text-5xl font-bold leading-[1.05] md:text-7xl"
        >
          Welcome to MachWorks
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-4 max-w-md text-bone/70"
        >
          Student-designed, student-built fixed-wing aircraft — from
          airframe to autonomy stack.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 flex gap-4"
        >
          <button className="rounded-md bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-signal/90">
            Join us
          </button>
          <button className="rounded-md border border-bone/25 px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:border-signal hover:text-signal">
            Support us
          </button>
        </motion.div>
      </div>
    </section>
  );
}