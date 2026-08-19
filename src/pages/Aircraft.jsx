import { useState } from "react";

// Coordinates are percentages of the hero photo. "point" is where the
// marker sits on the airframe; "anchor" is where the label renders.
const HOTSPOTS = [
  {
    label: "Optimized Performance",
    point: { x: 14, y: 50 }, // left wingtip
    anchor: { x: 6, y: 16 },
    align: "left",
  },
  {
    label: "Turbojet Powerplant",
    point: { x: 55, y: 27 }, // tail fin / engine cluster
    anchor: { x: 62, y: 10 },
    align: "left",
  },
  {
    label: "Composite Airframe",
    point: { x: 86, y: 52 }, // right wingtip
    anchor: { x: 78, y: 65 },
    align: "right",
  },
  {
    label: "Next-Gen Avionics",
    point: { x: 38, y: 80 }, // nose
    anchor: { x: 14, y: 90 },
    align: "left",
  },
];

const SPECS = [
  { label: "MTOW", value: "16 kg" },
  { label: "Top Speed", value: "Mach 0.3 / 230 mph" },
  { label: "Flight Time", value: "20 minutes" },
  { label: "Cruise Altitude", value: "500 ft AGL" },
  { label: "Thrust to Weight", value: "1.78" },
  { label: "Powerplant", value: "Hybl H20 Pro" },
];

export default function Aircraft() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#c4c4c7] md:h-screen">
        <div className="relative z-10 px-8 pt-32 md:absolute md:inset-0 md:flex md:h-full md:flex-col md:px-12">
          <h1 className="max-w-2xl font-display text-5xl font-bold uppercase leading-[1.05] text-black md:text-7xl">
            Icarus
          </h1>
        </div>

        {/* On mobile this sizes to the photo's natural (uncropped)
            aspect ratio so the whole airframe stays in frame — the
            hotspot percentages then line up correctly either way, since
            they're positioned relative to this box, not the section. On
            desktop it's absolutely filled behind the title, cropped via
            object-cover, same as before. */}
        <div className="relative mt-8 md:absolute md:inset-0 md:mt-0">
          <img
            src="/images/front_view_icarus.jpg"
            alt="Front view of the Icarus aircraft"
            className="block h-auto w-full md:h-full md:object-cover"
          />

          {/* Hotspot callouts — the marker sits on the airframe feature;
              hovering it draws a connecting line out to the label. */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          >
            {HOTSPOTS.map(
              (spot, i) =>
                hovered === i && (
                  <line
                    key={spot.label}
                    x1={spot.point.x}
                    y1={spot.point.y}
                    x2={spot.anchor.x}
                    y2={spot.anchor.y}
                    stroke="black"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                )
            )}
          </svg>

          {HOTSPOTS.map((spot, i) => (
            <button
              key={spot.label}
              type="button"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              aria-label={spot.label}
              style={{ left: `${spot.point.x}%`, top: `${spot.point.y}%` }}
              className={`absolute z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 border-4 transition-colors ${
                hovered === i
                  ? "border-signal"
                  : "border-black/70 hover:border-black"
              }`}
            />
          ))}

          {HOTSPOTS.map(
            (spot, i) =>
              hovered === i && (
                <p
                  key={spot.label}
                  style={{
                    left: `${spot.anchor.x}%`,
                    top: `${spot.anchor.y}%`,
                  }}
                  className={`absolute z-10 max-w-[12rem] -translate-y-1/2 font-mono text-xs font-bold uppercase tracking-widest text-black ${
                    spot.align === "right"
                      ? "-translate-x-full text-right"
                      : ""
                  }`}
                >
                  {spot.label}
                </p>
              )
          )}
        </div>
      </section>

      <section className="bg-ink px-8 pt-16 pb-24 text-bone md:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
            Specs
          </h2>
          <div className="mt-6 divide-y divide-bone/10 overflow-hidden rounded-md border border-bone/10">
            {SPECS.map((spec, i) => (
              <button
                key={spec.label}
                type="button"
                onClick={() => setSelected(i)}
                className={`flex w-full items-center justify-between px-6 py-4 text-left font-mono text-xs uppercase tracking-widest transition-colors ${
                  selected === i
                    ? "bg-panel text-signal"
                    : "text-bone/60 hover:bg-panel/50 hover:text-bone"
                }`}
              >
                <span>{spec.label}</span>
                <span
                  className={selected === i ? "text-bone" : "text-bone/40"}
                >
                  {spec.value}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
