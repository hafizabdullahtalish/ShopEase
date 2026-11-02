import { Link } from "react-router-dom";
import { SITE } from "../config.js";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-stone-200 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-bold text-brand-700">
            {SITE.first}<span className="text-stone-900">{SITE.second}</span>
          </p>
          <p className="mt-2 text-sm text-stone-500">Quality products, fair prices and fast delivery.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">Quick links</p>
          <ul className="mt-2 space-y-1 text-sm text-stone-500">
            <li><Link to="/" className="hover:text-brand-700">Home</Link></li>
            <li><Link to="/shop" className="hover:text-brand-700">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-brand-700">Cart</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">Support</p>
          <ul className="mt-2 space-y-1 text-sm text-stone-500">
            <li>{SITE.email}</li>
            <li>Free shipping over $100</li>
            <li>30-day easy returns</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-100 py-4 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
