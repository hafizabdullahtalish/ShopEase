import { useProducts } from "../context/ProductContext.jsx";

export default function CategoryFilter() {
  const { categories, category, setCategory } = useProducts();
  const all = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {all.map((c) => (
        <button
          key={c}
          onClick={() => setCategory(c)}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
            category === c
              ? "border-brand-700 bg-brand-700 text-white"
              : "border-stone-300 bg-surface text-stone-600 hover:border-brand-400"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
