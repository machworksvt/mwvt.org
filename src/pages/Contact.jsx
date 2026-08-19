import { useState } from "react";

// 1. Sign up at formspree.io and create a form pointed at
//    machworksvt@gmail.com.
// 2. Formspree will give you a URL like https://formspree.io/f/xxxxxxxx —
//    drop that ID in below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/machworksvt" },
  { label: "GitHub", href: "https://github.com/machworksvt" },
  { label: "YouTube", href: "https://youtube.com/@machworksvt" },
];

const FIELD_CLASS =
  "w-full border border-bone/20 bg-transparent px-4 py-3 text-bone placeholder:text-bone/30 focus:border-signal focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="min-h-screen bg-ink px-8 pt-32 pb-24 text-bone md:px-12">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">
        Get In Touch
      </p>
      <h1 className="max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-6xl">
        Contact Us
      </h1>
      <p className="mt-6 max-w-2xl text-bone/70">
        Have a question, want to sponsor us, or interested in joining? Fill
        out the form below, or reach us directly at{" "}
        <a
          href="mailto:machworksvt@gmail.com"
          className="text-signal underline underline-offset-4 transition-colors hover:text-bone"
        >
          machworksvt@gmail.com
        </a>
        .
      </p>

      <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_320px]">
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-mono text-xs uppercase tracking-widest text-bone/50"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={FIELD_CLASS}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-mono text-xs uppercase tracking-widest text-bone/50"
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={FIELD_CLASS}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-xs uppercase tracking-widest text-bone/50"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className={FIELD_CLASS}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-md bg-signal px-8 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-signal/90 disabled:opacity-50"
          >
            {status === "submitting" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="font-mono text-xs uppercase tracking-widest text-signal">
              Message sent — we'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs uppercase tracking-widest text-red-400">
              Something went wrong. Try emailing us directly instead.
            </p>
          )}
        </form>

        {/* Static profile card — no live Instagram API/token to manage,
            just update the follower count here whenever it's worth it. */}
        <div className="h-fit rounded-md border border-bone/10 bg-panel p-8 lg:sticky lg:top-32">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo-mark.png"
              alt="MachWorks"
              className="h-16 w-16 rounded-full border border-bone/10 bg-ink object-contain p-2"
            />
            <div>
              <p className="font-display text-lg font-bold text-bone">
                @machworksvt
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-bone/50">
                115 Followers
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm text-bone/70">
            MachWorks is a new undergraduate Aerospace design team working
            out of Virginia Tech tackling supersonic jet powered…
          </p>
          <a
            href="https://instagram.com/machworksvt"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block w-full rounded-md bg-signal px-6 py-3 text-center font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-signal/90"
          >
            Follow Us
          </a>
        </div>
      </div>

      <div className="mt-20 border-t border-bone/10 pt-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-bone/40">
          Find Us Elsewhere
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-bone/70 transition-colors hover:text-signal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
