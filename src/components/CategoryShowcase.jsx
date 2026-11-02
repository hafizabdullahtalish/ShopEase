import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext.jsx";
import ProductImage from "./ProductImage.jsx";

export default function CategoryShowcase() {
  const { categories, products, setCategory, setSearch } = useProducts();
  const navigate = useNavigate();

  const open = (c) => {
    setSearch("");
    setCategory(c);
    navigate("/shop");
  };

  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold text-stone-900">Shop by category</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((c) => {
          const sample = products.find((p) => p.category === c);
          return (
            <button
              key={c}
              onClick={() => open(c)}
              className="group relative h-36 overflow-hidden rounded-xl text-left"
            >
              <ProductImage src={sample.image} alt={c} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-lg font-semibold text-white">{c}</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
