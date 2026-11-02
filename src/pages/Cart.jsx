import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import OrderSummary from "../components/OrderSummary.jsx";

export default function Cart() {
  const { items, clearCart } = useCart();

  if (!items.length) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-stone-500">Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="mt-6 inline-block rounded-lg bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800">
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Shopping cart</h1>
        <button onClick={clearCart} className="text-sm text-rose-500 hover:underline">
          Clear cart
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div>
          <OrderSummary>
            <Link
              to="/checkout"
              className="mt-5 block rounded-lg bg-brand-700 py-3 text-center font-semibold text-white hover:bg-brand-800"
            >
              Proceed to checkout
            </Link>
          </OrderSummary>
        </div>
      </div>
    </div>
  );
}
