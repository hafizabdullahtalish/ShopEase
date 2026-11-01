import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import OrderSummary from "../components/OrderSummary.jsx";

const field =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500";

export default function Checkout() {
  const { items, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="py-20 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
          ✓
        </div>
        <h1 className="text-2xl font-bold">Thank you, {form.name || "friend"}!</h1>
        <p className="mt-2 text-gray-500">Your order has been placed. This is a demo, so nothing was charged.</p>
        <Link to="/shop" className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
          Continue shopping
        </Link>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Nothing to check out</h1>
        <Link to="/shop" className="mt-4 inline-block text-indigo-600 hover:underline">
          Go to shop
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold">Shipping details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required name="name" value={form.name} onChange={onChange} placeholder="Full name" className={field} />
            <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" className={field} />
          </div>
          <input required name="address" value={form.address} onChange={onChange} placeholder="Street address" className={field} />
          <div className="grid gap-4 sm:grid-cols-2">
            <input required name="city" value={form.city} onChange={onChange} placeholder="City" className={field} />
            <input required name="zip" value={form.zip} onChange={onChange} placeholder="ZIP / Postal code" className={field} />
          </div>
          <button type="submit" className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">
            Place order
          </button>
        </form>

        <OrderSummary />
      </div>
    </div>
  );
}
