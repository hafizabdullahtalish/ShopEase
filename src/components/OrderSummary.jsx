import { useCart } from "../context/CartContext.jsx";

export const FREE_SHIPPING_THRESHOLD = 100;
export const SHIPPING_FEE = 7.99;

export function calcTotals(subtotal) {
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const tax = subtotal * 0.08;
  return { shipping, tax, total: subtotal + shipping + tax };
}

export default function OrderSummary({ children }) {
  const { subtotal, totalItems } = useCart();
  const { shipping, tax, total } = calcTotals(subtotal);

  return (
    <div className="rounded-xl border border-stone-200 bg-surface p-5">
      <h2 className="text-lg font-semibold">Order summary</h2>
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-stone-500">Items ({totalItems})</dt>
          <dd>${subtotal.toFixed(2)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-stone-500">Shipping</dt>
          <dd>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-stone-500">Tax (8%)</dt>
          <dd>${tax.toFixed(2)}</dd>
        </div>
        <div className="flex justify-between border-t border-stone-100 pt-3 text-base font-bold">
          <dt>Total</dt>
          <dd>${total.toFixed(2)}</dd>
        </div>
      </dl>
      {subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD && (
        <p className="mt-3 text-xs text-brand-700">
          Add ${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping!
        </p>
      )}
      {children}
    </div>
  );
}
