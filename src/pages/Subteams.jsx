import SubteamSection from "../components/SubteamSection";

// The four standing subteams.
const SUBTEAMS = [
  {
    title: "Avionics",
    description:
      "Develops the central flight intelligence and onboard electronics powering the aircraft. The team integrates real-time flight computers, safety-critical stabilization controls, sensor fusion, and companion computers running high-level autonomy algorithms.",
    bullets: [],
    githubUrl: "https://github.com/machworksvt",
    photo: { src: "/images/avionics_selfie.jpg", alt: "The Avionics subteam" },
  },
  {
    title: "Structures",
    description:
      "Responsible for designing and manufacturing the physical airframe. The team handles 3D CAD modeling, structural load analysis, material selection, and hands-on fabrication using carbon fiber composites and precision-machined parts.",
    bullets: [],
    githubUrl: null,
    photo: { src: "/images/structures.png", alt: "The Structures subteam" },
  },
  {
    title: "Aerodynamics",
    description:
      "Shapes the external geometry and optimizes flight performance. The team conducts computational fluid dynamics (CFD) simulations, analyzes stability and control surfaces, and refines high-speed aerodynamic efficiency across all flight regimes.",
    bullets: [],
    githubUrl: null,
    photo: {
      src: "/images/new_aero.png",
      alt: "The Aerodynamics subteam",
    },
  },
  {
    title: "Propulsion",
    description:
      "Integrates the air-breathing turbine powerplant and fuel systems. The team manages engine mounting, intake design, thermal shielding, and static ground testing to deliver the thrust required for high-speed flight.",
    bullets: [],
    githubUrl: null,
    photo: { src: "/images/propulsion.png", alt: "The Propulsion subteam" },
  },
];

// Focus Projects — shorter-term / cross-functional efforts, same layout
// pattern as subteams, listed after them.
const FOCUS_PROJECTS = [
  {
    title: "Afterburner",
    description:
      "An experimental propulsion initiative dedicated to designing and testing auxiliary reheat systems to maximize thrust for supersonic capability.",
    bullets: [],
    githubUrl: null,
    photo: { src: "/images/afterburner.png", alt: "The Afterburner project" },
  },
  {
    title: "Fuel Tank",
    description:
      "A specialized engineering effort focused on internal tank geometry, fuel delivery dynamics, and weight-and-balance management throughout flight.",
    bullets: [],
    githubUrl: null,
    photo: { src: "/images/fuel_tank.png", alt: "The Fuel Tank project" },
  },
  {
    title: "Recovery",
    description:
      "Designs and integrates redundant recovery systems, including automated parachutes, to safely preserve the airframe during flight test campaigns.",
    bullets: [],
    githubUrl: null,
    photo: { src: "/images/recovery_bay.png", alt: "The Recovery project" },
  },
];

export default function Subteams() {
  return (
    <section className="min-h-screen bg-ink px-8 pt-32 pb-24 text-bone md:px-12">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">
        How We're Organized
      </p>
      <h1 className="max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-6xl">
        Subteams
      </h1>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {SUBTEAMS.map((subteam) => (
          <div key={subteam.title}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-md bg-panel">
              {subteam.photo?.src ? (
                <img
                  src={subteam.photo.src}
                  alt={subteam.photo.alt ?? `${subteam.title} subteam photo`}
                  className="h-full w-full object-cover transition-transform duration-500 sm:group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center border border-dashed border-bone/20 font-mono text-xs uppercase tracking-widest text-bone/30">
                  Add photo
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink/10" />

              {/* Darkens on hover so the enlarged description stays legible
                  over the photo — desktop only, since touch devices have
                  no hover. Mobile gets the static block below instead. */}
              <div className="absolute inset-0 hidden bg-ink/85 sm:block sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100" />

              <div className="absolute inset-x-0 top-0 p-6">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                  {subteam.title}
                </h2>
              </div>

              <div className="absolute inset-0 hidden flex-col items-center justify-center gap-4 p-8 text-center sm:flex sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100">
                {subteam.description && (
                  <p className="text-base font-medium leading-snug text-bone sm:text-lg md:text-xl">
                    {subteam.description}
                  </p>
                )}
                {subteam.githubUrl && (
                  <a
                    href={subteam.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs uppercase tracking-widest text-signal transition-colors hover:text-bone"
                  >
                    Visit our GitHub →
                  </a>
                )}
              </div>
            </div>

            {/* Static description — mobile only. */}
            <div className="mt-4 sm:hidden">
              {subteam.description && (
                <p className="text-sm text-bone/70">{subteam.description}</p>
              )}
              {subteam.githubUrl && (
                <a
                  href={subteam.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block font-mono text-xs uppercase tracking-widest text-signal transition-colors hover:text-bone"
                >
                  Visit our GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
          Focus Projects
        </h2>

        <div className="mt-16 space-y-24">
          {FOCUS_PROJECTS.map((project) => (
            <SubteamSection key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}