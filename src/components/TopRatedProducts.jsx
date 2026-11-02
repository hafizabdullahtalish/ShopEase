import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import SectionHeader from "./SectionHeader.jsx";
import Rating from "./Rating.jsx";
import ProductImage from "./ProductImage.jsx";

// A compact horizontal list: a different component that also displays products.
export default function TopRatedProducts() {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const top = [...products].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section>
      <SectionHeader title="Top rated" linkTo="/shop" />
      <div className="grid gap-4 md:grid-cols-3">
        {top.map((p) => (
          <div key={p.id} className="flex gap-4 rounded-xl border border-stone-200 bg-surface p-3 shadow-sm">
            <Link to={`/product/${p.id}`}>
              <ProductImage src={p.image} alt={p.name} className="h-24 w-24 rounded-lg object-cover" />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col">
              <Link to={`/product/${p.id}`} className="truncate font-medium text-stone-900 hover:text-brand-700">
                {p.name}
              </Link>
              <Rating value={p.rating} />
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold">${p.price.toFixed(2)}</span>
                <button onClick={() => addToCart(p)} className="text-sm font-medium text-brand-700 hover:underline">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
