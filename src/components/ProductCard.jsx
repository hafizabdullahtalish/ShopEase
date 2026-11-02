import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Rating from "./Rating.jsx";
import ProductImage from "./ProductImage.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-surface shadow-sm transition hover:shadow-md">
      <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-stone-100">
        <ProductImage
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-rose-500 px-2 py-0.5 text-xs font-semibold text-white">
            -{discount}%
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-500">{product.category}</p>
        <Link to={`/product/${product.id}`} className="line-clamp-2 font-semibold text-stone-900 hover:text-brand-700">
          {product.name}
        </Link>
        <Rating value={product.rating} reviews={product.reviews} />

        <div className="mt-auto flex items-center justify-between pt-2">
          <div>
            <span className="text-lg font-bold text-stone-900">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-stone-400 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="rounded-lg bg-brand-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-brand-800 active:scale-95"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
