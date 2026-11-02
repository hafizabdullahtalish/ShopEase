import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext.jsx";

export default function Dashboard() {
  const { products, customProducts, categories } = useProducts();
  const recent = [...customProducts].reverse().slice(0, 5);

  const stats = [
    { label: "Total products", value: products.length },
    { label: "Added by you", value: customProducts.length },
    { label: "Categories", value: categories.filter((c) => c !== "All").length },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-stone-900">Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-stone-300/60 bg-surface p-5">
            <p className="text-sm text-stone-600">{s.label}</p>
            <p className="mt-1 text-3xl font-semibold text-brand-700">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-stone-300/60 bg-surface p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold text-stone-900">Recently added</h2>
          <Link to="/admin/add" className="text-sm font-medium text-brand-700 hover:underline">
            Add product
          </Link>
        </div>
        {recent.length === 0 ? (
          <p className="text-sm text-stone-600">
            You have not added any products yet. Add one and it will show up here.
          </p>
        ) : (
          <ul className="divide-y divide-stone-300/60">
            {recent.map((p) => (
              <li key={p.id} className="flex items-center justify-between py-2 text-sm">
                <span className="truncate pr-4">{p.name}</span>
                <span className="font-medium">{p.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}