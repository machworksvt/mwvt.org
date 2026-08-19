import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const TEAM_LINKS = [
  { label: "Leadership", to: "/team" },
  { label: "Subteams", to: "/team/subteams" },
];

const AIRCRAFT_LINKS = [
  { label: "Icarus", to: "/aircraft" },
  { label: "Prometheus", to: "/aircraft/prometheus" },
];

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Team", to: "/team", dropdown: TEAM_LINKS },
  { label: "Aircraft", to: "/aircraft", dropdown: AIRCRAFT_LINKS },
  { label: "Lab", to: "/lab" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact Us", to: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/70 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-8 py-4 md:px-12">
        <Link to="/">
          <img
            src="/images/logo-mark.png"
            alt="MachWorks"
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-bone/75 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.to} className="group relative">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-signal ${
                    isActive ? "text-signal" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>

              {item.dropdown && (
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[11rem] rounded-md border border-bone/10 bg-panel/95 py-2 shadow-xl backdrop-blur-sm">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.to ?? sub.hash}
                        to={sub.to ?? `${item.to}#${sub.hash}`}
                        className="block px-4 py-2 text-xs uppercase tracking-widest text-bone/70 transition-colors hover:bg-bone/5 hover:text-signal"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 bg-bone transition-all ${
              open ? "w-6 -translate-y-2 rotate-45" : "w-6"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-bone transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 bg-bone transition-all ${
              open ? "w-6 translate-y-2 -rotate-45" : "w-4"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <ul className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-bone/10 bg-ink px-8 py-4 font-mono text-xs uppercase tracking-widest text-bone/75 md:hidden">
          {NAV_LINKS.map((item) => (
            <li key={item.to} className="border-b border-bone/10 py-3 last:border-b-0">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-signal ${
                    isActive ? "text-signal" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>

              {item.dropdown && (
                <ul className="mt-3 space-y-3 pl-4">
                  {item.dropdown.map((sub) => (
                    <li key={sub.to ?? sub.hash}>
                      <Link
                        to={sub.to ?? `${item.to}#${sub.hash}`}
                        className="text-bone/60 transition-colors hover:text-signal"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}