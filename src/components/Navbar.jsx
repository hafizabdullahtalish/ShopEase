import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useProducts } from "../context/ProductContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { SITE } from "../config.js";

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition hover:text-brand-700 ${isActive ? "text-brand-700" : "text-stone-600"}`;

export default function Navbar() {
  const { totalItems } = useCart();
  const { search, setSearch } = useProducts();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    navigate("/shop");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-bold text-brand-700">
          {SITE.first}<span className="text-stone-900">{SITE.second}</span>
        </Link>

        <nav className="ml-6 hidden items-center gap-6 md:flex">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={linkClass}>
            Shop
          </NavLink>
          <NavLink to="/admin" className={linkClass}>
            Add Product
          </NavLink>
        </nav>

        <input
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search products..."
          className="ml-auto hidden w-64 rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm outline-none focus:border-brand-500 focus:bg-surface sm:block"
        />

        <Link
          to="/cart"
          className="relative ml-auto rounded-full p-2 text-stone-700 hover:bg-stone-100 sm:ml-0"
          aria-label="Cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-700 px-1 text-xs font-semibold text-white">
              {totalItems}
            </span>
          )}
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {user ? (
            <>
              <span className="max-w-[9rem] truncate text-sm font-medium text-stone-700">Hi, {user.name.split(" ")[0]}</span>
              <button
                onClick={handleLogout}
                className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="rounded-lg px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-100">
                Log in
              </Link>
              <Link to="/signup" className="rounded-lg bg-brand-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-800">
                Sign up
              </Link>
            </>
          )}
        </div>

        <button
          className="rounded p-2 text-stone-700 hover:bg-stone-100 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="space-y-3 border-t border-stone-100 px-4 py-4 md:hidden">
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm outline-none focus:border-brand-500"
          />
          <div className="flex flex-col gap-3" onClick={() => setOpen(false)}>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/shop" className={linkClass}>
              Shop
            </NavLink>
            <NavLink to="/admin" className={linkClass}>
              Add Product
            </NavLink>
            <NavLink to="/cart" className={linkClass}>
              Cart ({totalItems})
            </NavLink>
            {user ? (
              <>
                <span className="text-sm text-stone-500">Signed in as {user.name}</span>
                <button onClick={handleLogout} className="text-left text-sm font-medium text-rose-500">
                  Log out
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={linkClass}>
                  Log in
                </NavLink>
                <NavLink to="/signup" className={linkClass}>
                  Sign up
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
