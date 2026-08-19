import { motion } from "framer-motion";

export default function RedefiningImpossible() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink">
      {/* Full-screen aircraft photo */}
      <motion.img
        src="/images/icarus-flying.jpg"
        alt="The Icarus aircraft banking against a clear sky over desert terrain"
        initial={{ opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "50% 42%" }}
      />

      {/* Gradient so the text stays legible over the sky */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />

      {/* Text overlaid on the image, anchored to the lower third like the hero */}
      <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-20 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal"
        >
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-6xl"
        >
          Beyond the Horizon
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.1, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-bone/80"
        >
          MachWorks aims to become the first undergraduate team to design, build, and fly a fully autonomous, supersonic aircraft powered entirely by air-breathing engines. Through disciplined engineering and bold innovation, we are bringing next-generation flight to reality.
        </motion.p>
      </div>
    </section>
  );
}