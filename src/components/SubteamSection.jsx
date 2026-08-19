import PhotoTile from "./PhotoTile";

export default function SubteamSection({
  id,
  title,
  description,
  bullets = [],
  githubUrl,
  photo,
  showPhoto = true,
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <div
        className={`grid grid-cols-1 gap-10 ${
          showPhoto ? "md:grid-cols-2 md:items-center" : ""
        }`}
      >
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">
            {title}
          </h2>

          {description && (
            <p className="mt-4 max-w-md text-bone/70">{description}</p>
          )}

          {bullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {bullets.map((item, i) => (
                <li key={i} className="text-bone/70">
                  — {item}
                </li>
              ))}
            </ul>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-signal transition-colors hover:text-bone"
            >
              Visit our GitHub →
            </a>
          )}
        </div>

        {showPhoto && (
          <div className="w-full max-w-[34%] md:justify-self-end">
            <PhotoTile
              src={photo?.src}
              alt={photo?.alt ?? `${title} subteam photo`}
              aspect="aspect-[4/3]"
            />
          </div>
        )}
      </div>
    </div>
  );
}