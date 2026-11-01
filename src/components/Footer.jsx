import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-bold text-indigo-600">
            Shop<span className="text-gray-900">Ease</span>
          </p>
          <p className="mt-2 text-sm text-gray-500">Quality products, fair prices and fast delivery.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Quick links</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
            <li><Link to="/shop" className="hover:text-indigo-600">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-indigo-600">Cart</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Support</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-500">
            <li>support@shopease.example</li>
            <li>Free shipping over $100</li>
            <li>30-day easy returns</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
