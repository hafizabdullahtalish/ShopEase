import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const field =
  "w-full rounded-lg border border-stone-300 bg-surface px-3 py-2.5 text-sm outline-none focus:border-brand-500";

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to={from} replace />;

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const result = await login(form);
    setBusy(false);
    if (result.ok) navigate(from, { replace: true });
    else setError(result.error);
  };

  return (
    <div className="mx-auto max-w-md py-8">
      <div className="rounded-2xl border border-stone-200 bg-surface p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-stone-900">Welcome back</h1>
        <p className="mt-1 text-sm text-stone-500">Log in to continue shopping.</p>

        {location.state?.from && (
          <p className="mt-4 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
            Please log in to continue.
          </p>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">Email</label>
            <input required type="email" name="email" value={form.email} onChange={onChange} autoComplete="email" className={field} placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">Password</label>
            <input required type="password" name="password" value={form.password} onChange={onChange} autoComplete="current-password" className={field} placeholder="Your password" />
          </div>

          {error && <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-brand-700 py-3 font-semibold text-white hover:bg-brand-800 disabled:opacity-60"
          >
            {busy ? "Logging in…" : "Log in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-stone-600">
          New here?{" "}
          <Link to="/signup" state={location.state} className="font-semibold text-brand-700 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
