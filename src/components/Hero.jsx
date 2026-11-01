import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 text-white">
      <div className="grid items-center gap-8 px-6 py-12 sm:px-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            New season sale
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Find everything you love, all in one place.
          </h1>
          <p className="mt-4 max-w-md text-indigo-100">
            Up to 30% off on electronics, fashion and home essentials. Free shipping on orders over $100.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/shop" className="rounded-lg bg-white px-5 py-3 font-semibold text-indigo-600 hover:bg-indigo-50">
              Shop now
            </Link>
            <Link to="/shop" className="rounded-lg border border-white/60 px-5 py-3 font-semibold hover:bg-white/10">
              Browse categories
            </Link>
          </div>
        </div>
        <img
          src="https://picsum.photos/seed/hero-shop/700/450"
          alt="Shopping showcase"
          className="hidden h-72 w-full rounded-xl object-cover shadow-xl md:block"
        />
      </div>
    </section>
  );
}
