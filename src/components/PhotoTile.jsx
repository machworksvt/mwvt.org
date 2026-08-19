export default function PhotoTile({ src, alt, aspect = "aspect-video" }) {
  if (!src) {
    return (
      <div
        className={`flex ${aspect} items-center justify-center rounded-md border border-dashed border-bone/20 bg-panel font-mono text-xs uppercase tracking-widest text-bone/30`}
      >
        Add photo
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${aspect} w-full rounded-md object-cover`}
    />
  );
}