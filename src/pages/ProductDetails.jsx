import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import Rating from "../components/Rating.jsx";
import RelatedProducts from "../components/RelatedProducts.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-indigo-600 hover:underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const buyNow = () => {
    addToCart(product, qty);
    navigate("/cart");
  };

  return (
    <div>
      <nav className="mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-indigo-600">Home</Link> /{" "}
        <Link to="/shop" className="hover:text-indigo-600">Shop</Link> /{" "}
        <span className="text-gray-800">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-500">{product.category}</p>
          <h1 className="mt-1 text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="mt-2">
            <Rating value={product.rating} reviews={product.reviews} />
          </div>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="mt-5 leading-relaxed text-gray-600">{product.description}</p>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-lg border border-gray-300 bg-white">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-2 text-lg hover:bg-gray-100">
                −
              </button>
              <span className="w-10 text-center font-medium">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-4 py-2 text-lg hover:bg-gray-100">
                +
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="flex-1 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
            >
              {added ? "Added ✓" : "Add to cart"}
            </button>
          </div>

          <button
            onClick={buyNow}
            className="mt-3 w-full rounded-lg border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 hover:bg-indigo-50"
          >
            Buy now
          </button>

          <ul className="mt-6 space-y-1 text-sm text-gray-500">
            <li>✓ Free shipping on orders over $100</li>
            <li>✓ 30-day easy returns</li>
            <li>✓ 1-year warranty</li>
          </ul>
        </div>
      </div>

      <RelatedProducts product={product} />
    </div>
  );
}
