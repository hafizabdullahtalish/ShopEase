import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="text-6xl font-extrabold text-brand-700">404</p>
      <h1 className="mt-2 text-2xl font-bold">Page not found</h1>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800">
        Back to home
      </Link>
    </div>
  );
}
