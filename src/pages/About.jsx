const HIGHLIGHTS = [
  {
    title: "Hands-On Experience",
    description:
      "Every member at MachWorks gains direct, practical engineering experience across the entire development lifecycle. Our team members actively:",
    bullets: [
      "Lay up and cure advanced carbon fiber composite airframes in-house.",
      "Program and test real-time embedded flight software and autonomous control stacks.",
      "Assemble precision electronics, wiring harnesses, and sensor suites.",
      "Build and operate static test stands for jet engine calibration and fuel delivery systems.",
    ],
    image: "/images/hands-on.png",
    alt: "A member hands-on with the build",
  },
  {
    title: "Giving Back",
    description:
      "Engineering extends beyond the lab. We partner with the university and local organizations to educate the community about aerospace technology and inspire future generations to pursue STEM. Pictured above is our team volunteering at Virginia Tech's The Big Event, an annual campus-wide day of community service where we give back to the local Blacksburg community.",
    image: "/images/big_event.jpg",
    alt: "MachWorks at a community event",
    position: "50% 80%",
  },
];

export default function About() {
  return (
    <section className="min-h-screen bg-ink px-8 pt-32 pb-24 text-bone md:px-12">
      <h1 className="max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-6xl">
        Our Legacy
      </h1>

      <img
        src="/images/MW_FullTeamPhoto.jpg"
        alt="The MachWorks team"
        className="mx-auto mt-8 aspect-[21/9] w-full max-w-6xl rounded-md object-cover"
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        <p className="mt-8 max-w-2xl text-bone/70 md:mt-16">
          Proudly supported by the Kevin T. Crofton Aerospace Engineering
          Department at Virginia Tech and located in the Aerospace
          Engineering Design Lab, MachWorks was founded in early 2022. We
          are proud to be a team of engineering students working hard to
          make our dreams come true.
        </p>
        <div className="mt-8 flex items-center justify-center rounded-md border border-bone/10 bg-panel p-8 md:mt-16">
          <img
            src="/images/sponsors/sponsor-6.png"
            alt="Sponsor"
            className="max-h-24 w-auto object-contain"
          />
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {HIGHLIGHTS.map((item) => (
          <div key={item.title}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 sm:group-hover:scale-105"
                style={{ objectPosition: item.position ?? "50% 50%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                  {item.title}
                </h2>
                {/* Hover reveal — desktop only, since there's no hover on
                    touch devices. Mobile gets the static block below
                    instead. */}
                <div className="hidden max-w-sm sm:block sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:mt-3 sm:group-hover:max-h-96 sm:group-hover:opacity-100">
                  <p className="text-sm text-bone/80">{item.description}</p>
                  {item.bullets && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 marker:text-signal">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="text-sm text-bone/80">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Static description — mobile only. */}
            <div className="mt-4 sm:hidden">
              <p className="text-sm text-bone/70">{item.description}</p>
              {item.bullets && (
                <ul className="mt-3 list-disc space-y-1.5 pl-4 marker:text-signal">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-bone/70">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
