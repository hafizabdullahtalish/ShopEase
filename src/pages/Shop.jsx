import { useProducts } from "../context/ProductContext.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import ProductGrid from "../components/ProductGrid.jsx";

export default function Shop() {
  const { filteredProducts, search, setSearch, setCategory, sort, setSort } = useProducts();

  const reset = () => {
    setSearch("");
    setCategory("All");
    setSort("default");
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-stone-900">Shop</h1>
          <p className="text-sm text-stone-500">
            {filteredProducts.length} product{filteredProducts.length !== 1 && "s"}
            {search && ` matching "${search}"`}
          </p>
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-stone-300 bg-surface px-3 py-2 text-sm outline-none focus:border-brand-500"
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="mb-6">
        <CategoryFilter />
      </div>

      <ProductGrid
        products={filteredProducts}
        emptyMessage="No products match your filters."
      />

      {filteredProducts.length === 0 && (
        <div className="mt-4 text-center">
          <button onClick={reset} className="text-sm font-medium text-brand-700 hover:underline">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
