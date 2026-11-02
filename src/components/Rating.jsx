export default function Rating({ value, reviews }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="text-amber-400" aria-hidden="true">
        {"★".repeat(full)}
        <span className="text-stone-300">{"★".repeat(5 - full)}</span>
      </span>
      <span className="text-stone-500">
        {value.toFixed(1)}
        {reviews ? ` (${reviews})` : ""}
      </span>
    </div>
  );
}
