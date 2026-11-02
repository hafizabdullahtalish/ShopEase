import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const field =
  "w-full rounded-lg border border-stone-300 bg-surface px-3 py-2.5 text-sm outline-none focus:border-brand-500";

export default function Signup() {
  const { user, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to={from} replace />;

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password.length < 6) return setError("Password must be at least 6 characters.");
    if (form.password !== form.confirm) return setError("The two passwords do not match.");

    setBusy(true);
    const result = await signup(form);
    setBusy(false);
    if (result.ok) navigate(from, { replace: true });
    else setError(result.error);
  };

  return (
    <div className="mx-auto max-w-md py-8">
      <div className="rounded-2xl border border-stone-200 bg-surface p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-stone-900">Create your account</h1>
        <p className="mt-1 text-sm text-stone-500">It takes less than a minute.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">Full name</label>
            <input required name="name" value={form.name} onChange={onChange} autoComplete="name" className={field} placeholder="Your name" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">Email</label>
            <input required type="email" name="email" value={form.email} onChange={onChange} autoComplete="email" className={field} placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">Password</label>
            <input required type="password" name="password" value={form.password} onChange={onChange} autoComplete="new-password" className={field} placeholder="At least 6 characters" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">Confirm password</label>
            <input required type="password" name="confirm" value={form.confirm} onChange={onChange} autoComplete="new-password" className={field} placeholder="Type the password again" />
          </div>

          {error && <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-brand-700 py-3 font-semibold text-white hover:bg-brand-800 disabled:opacity-60"
          >
            {busy ? "Creating account…" : "Sign up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-stone-600">
          Already have an account?{" "}
          <Link to="/login" state={location.state} className="font-semibold text-brand-700 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
