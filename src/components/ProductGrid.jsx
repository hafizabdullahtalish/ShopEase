import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products, emptyMessage = "No products found." }) {
  if (!products.length) {
    return <p className="rounded-xl bg-surface p-10 text-center text-stone-500">{emptyMessage}</p>;
  }
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
