import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JOIN_MODAL_SEEN_KEY = "mwvt-join-modal-seen";

export default function Hero() {
  const [showJoinModal, setShowJoinModal] = useState(false);

  // Auto-open on a visitor's first page load this session — recruitment
  // season, so we want it hard to miss. sessionStorage means it won't
  // nag on every click back to the homepage, but resets each new visit.
  useEffect(() => {
    if (sessionStorage.getItem(JOIN_MODAL_SEEN_KEY)) return;
    const timer = setTimeout(() => {
      setShowJoinModal(true);
      sessionStorage.setItem(JOIN_MODAL_SEEN_KEY, "true");
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showJoinModal) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setShowJoinModal(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showJoinModal]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video — slow zoom/drift instead of a static frame */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full origin-center object-cover animate-hero-pan"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient so text stays legible over any footage */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/70" />

      {/* Headline block, anchored to the lower third. The global Nav
          (fixed, transparent) sits on top of this section — no nav
          markup needed here anymore. */}
      <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-20 md:px-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-signal">
          Supersonic Design · Autonomous Tech
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
          Student-engineered aircraft built from the ground up.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 flex gap-4"
        >
          <button
            onClick={() => setShowJoinModal(true)}
            className="rounded-md bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-signal/90"
          >
            Join us
          </button>
          <Link
            to="/sponsors"
            className="rounded-md border border-bone/25 px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:border-signal hover:text-signal"
          >
            Support us
          </Link>
        </motion.div>
      </div>

      {showJoinModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 px-6"
          onClick={() => setShowJoinModal(false)}
        >
          <div
            className="relative max-w-sm rounded-md border border-bone/10 bg-panel p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowJoinModal(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-bone/50 transition-colors hover:text-bone"
            >
              ✕
            </button>
            <p className="font-display text-xl font-bold uppercase tracking-tight text-bone">
              Fall 2026 Applications Open Now!
            </p>
            <a
              href="https://forms.cloud.microsoft/r/Xs4bHbvrrV"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-md bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-signal/90"
            >
              Apply Here
            </a>
          </div>
        </div>
      )}
    </section>
  );
}