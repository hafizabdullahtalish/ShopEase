import { NavLink, Outlet, Link } from "react-router-dom";
import { SITE } from "../../config.js";

const links = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/products", label: "Products" },
  { to: "/admin/add", label: "Add product" },
];

const linkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
    isActive
      ? "bg-brand-600 text-white"
      : "text-stone-700 hover:bg-brand-50 hover:text-brand-800"
  }`;

export default function AdminLayout() {
  return (
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      <aside className="h-fit rounded-xl border border-stone-300/60 bg-surface p-3 lg:sticky lg:top-24">
        <p className="px-3 pb-2 text-sm font-semibold text-stone-900">
          {SITE.name} admin
        </p>
        <nav className="flex gap-1 overflow-x-auto lg:flex-col">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/"
          className="mt-3 block px-3 py-2 text-sm text-stone-600 hover:text-brand-700"
        >
          Back to store
        </Link>
      </aside>
      <section className="min-w-0">
        <Outlet />
      </section>
    </div>
  );
}