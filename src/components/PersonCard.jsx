import { useState } from "react";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function PersonCard({ name, title, bio, photo, featured = false }) {
  const [expanded, setExpanded] = useState(false);
  const photoSize = featured ? "h-32 w-32 md:h-40 md:w-40" : "h-24 w-24 md:h-28 md:w-28";

  return (
    <div>
      {photo ? (
        <img
          src={photo}
          alt={name}
          className={`${photoSize} rounded-full object-cover`}
        />
      ) : (
        <div
          className={`${photoSize} flex items-center justify-center rounded-full bg-panel font-mono text-bone/40`}
        >
          {initials(name)}
        </div>
      )}

      <p
        className={`mt-4 font-display font-bold ${
          featured ? "text-xl md:text-2xl" : "text-base"
        }`}
      >
        {name}
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-signal">
        {title}
      </p>

      {bio && (
        <div className="mt-3 max-w-sm">
          <p
            className={`text-sm text-bone/70 ${
              !expanded ? "line-clamp-3" : ""
            }`}
          >
            {bio}
          </p>
          {bio.length > 140 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 font-mono text-xs uppercase tracking-widest text-bone/40 transition-colors hover:text-signal"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}