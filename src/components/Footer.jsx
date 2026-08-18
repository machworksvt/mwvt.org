// Replace these placeholder hrefs with your real links/pages.
const FOOTER_COLUMNS = [
  {
    label: "Team",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Our Aircraft", href: "#aircraft" },
      { label: "Our Lab", href: "#lab" },
    ],
  },
  {
    label: "Get Involved",
    links: [
      { label: "Join Us", href: "#join" },
      { label: "Support Us", href: "#support" },
      { label: "Our Sponsors", href: "#sponsors" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    label: "Social",
    links: [
      { label: "Instagram", href: "https://instagram.com/machworksvt" },
      { label: "LinkedIn", href: "https://linkedin.com/company/machworksvt" },
      { label: "GitHub", href: "https://github.com/machworksvt" },
      { label: "YouTube", href: "https://youtube.com/@machworksvt" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Virginia Tech", href: "https://vt.edu" },
  { label: "Student Org Directory", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-panel px-8 pt-20 pb-8 md:px-12">
      <div className="grid grid-cols-2 gap-y-12 md:grid-cols-5 md:gap-x-8">
        {/* Brand block */}
        <div className="col-span-2 md:col-span-2">
          <span className="font-display text-2xl font-bold tracking-tight text-signal">
            MachWorks
          </span>
          <p className="mt-3 max-w-xs text-sm text-bone/60">
            Student-designed, student-built autonomous aircraft — Virginia
            Tech's aerospace engineering team.
          </p>
        </div>

        {/* Link columns */}
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.label}>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-bone/40">
              {column.label}
            </p>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-bone transition-colors hover:text-signal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-bone/10" />

      {/* Bottom bar */}
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-bone">
            © {year} MachWorks
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-xs text-bone/40 transition-colors hover:text-bone/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-bone/40">
            Contact
          </p>
          <a
            href="mailto:contact@mwvt.org"
            className="mt-3 block text-sm text-bone transition-colors hover:text-signal"
          >
            contact@mwvt.org
          </a>
        </div>
      </div>
    </footer>
  );
}