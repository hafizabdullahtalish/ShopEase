import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext.jsx";
import ProductImage from "./ProductImage.jsx";

export default function Hero() {
  const { featuredProducts } = useProducts();
  const showcase = featuredProducts.slice(0, 4);

  return (
    <section className="overflow-hidden rounded-2xl bg-gradient-to-r from-brand-900 via-brand-800 to-brand-600 text-white">
      <div className="grid items-center gap-8 px-6 py-12 sm:px-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            New season sale
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Find everything you love, all in one place.
          </h1>
          <p className="mt-4 max-w-md text-brand-100">
            Up to 30% off on electronics, fashion and home essentials. Free shipping on orders over $100.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/shop" className="rounded-lg bg-white px-5 py-3 font-semibold text-brand-700 hover:bg-brand-50">
              Shop now
            </Link>
            <Link to="/shop" className="rounded-lg border border-white/60 px-5 py-3 font-semibold hover:bg-white/10">
              Browse categories
            </Link>
          </div>
        </div>

        <div className="hidden grid-cols-2 gap-3 md:grid">
          {showcase.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="group relative block aspect-square overflow-hidden rounded-xl bg-white/10 shadow-lg"
            >
              <ProductImage
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-6 text-sm font-medium">
                {p.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
