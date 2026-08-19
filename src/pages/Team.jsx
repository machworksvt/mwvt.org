import PersonCard from "../components/PersonCard";

// Photo paths (e.g. "/images/team/nathan-collins.jpg") and bios can be
// swapped in later — bios are omitted for now.
const TOP_LEADERSHIP = [
  {
    name: "Abu Razbir",
    title: "Chief Engineer",
    bio: null,
    photo: "/images/abu.png",
  },
  {
    name: "Jackson Cohen",
    title: "Project Manager",
    bio: null,
    photo: "/images/jackson.png",
  },
];

const SUBTEAM_LEADS = [
  {
    name: "Maunin Shah",
    title: "Propulsion Lead",
    bio: null,
    photo: "/images/maunin.jpg",
  },
  {
    name: "Drew Bartley",
    title: "Propulsion Lead",
    bio: null,
    photo: "/images/drew.jpg",
  },
  {
    name: "Luke Coughenour",
    title: "Avionics Lead",
    bio: null,
    photo: "/images/luke.jpg",
  },
  {
    name: "Peter Reilly",
    title: "Avionics Lead",
    bio: null,
    photo: "/images/peter.jpg",
  },
  {
    name: "Sarah Young",
    title: "Structures Lead",
    bio: null,
    photo: "/images/sarah.jpeg",
  },
  {
    name: "Colin Ford",
    title: "Structures Lead",
    bio: null,
    photo: "/images/colin.jpeg",
  },
  {
    name: "Kristin Falk",
    title: "Aerodynamics Lead",
    bio: null,
    photo: "/images/kristin.jpeg",
  },
  {
    name: "Hemanth Nimmagadda",
    title: "Aerodynamics Lead",
    bio: null,
    photo: "/images/hemanth.jpeg",
  },
];

// This page is now the "Leadership" landing page for the Team nav item.
// Subteams + Focus Projects moved to their own page (src/pages/Subteams.jsx).
export default function Team() {
  return (
    <section className="min-h-screen bg-ink px-8 pt-32 pb-24 text-bone md:px-12">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">
        Our Team
      </p>
      <h1 className="max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-6xl">
        Leadership
      </h1>

      <div className="mt-16">


        <div className="mt-8 flex flex-col gap-10 sm:flex-row sm:gap-16">
          {TOP_LEADERSHIP.map((person) => (
            <PersonCard key={person.name} {...person} featured />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {SUBTEAM_LEADS.map((person, i) => (
            <PersonCard key={i} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}