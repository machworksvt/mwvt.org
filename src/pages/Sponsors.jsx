export default function Sponsors() {
  return (
    <section className="min-h-screen bg-ink px-8 pt-24 pb-24 text-bone md:px-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Partner With Us
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-6xl">
            Partner with MachWorks
          </h1>
          <p className="mt-6 max-w-2xl text-bone/70">
           Help take collegiate aerospace to new flight regimes. Your sponsorship provides the critical tools, raw materials, and testing equipment our students need to bring ambitious flight concepts into reality.
          </p>
          <a
            href="mailto:machworksvt@gmail.com"
            className="mt-8 inline-block rounded-md bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-signal/90"
          >
            Get in touch
          </a>
        </div>
        <img
          src="/images/sponsor_us.png"
          alt="MachWorks sponsorship"
          className="mt-12 aspect-[4/3] w-full rounded-md object-cover md:mt-24"
        />
      </div>

      <div className="mt-4">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
          What You Gain
        </h2>
        <ul className="mt-6 max-w-2xl list-disc space-y-3 pl-5 marker:text-signal">
          <li className="text-bone/70">
            Direct recruitment pipelines and networking access to
            engineering talent in aerodynamics, embedded autonomy,
            structures, and propulsion.
          </li>
          <li className="text-bone/70">
            Invitations to lab visits and live testing events to see
            student-manufactured components and airframe assemblies in
            action.
          </li>
          <li className="text-bone/70">
            Prominent brand placement on our aircraft, website, team gear,
            and public flight test exhibitions.
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
          Thank You Sponsors
        </h2>
        <p className="mt-4 max-w-2xl text-bone/70">
          Our work simply would not be possible without the generous
          backing, guidance, and investment of our sponsors.
        </p>
      </div>
    </section>
  );
}
