import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.name} className="h-24 w-24 rounded-lg object-cover" />
      </Link>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between gap-2">
          <Link to={`/product/${item.id}`} className="font-semibold text-gray-900 hover:text-indigo-600">
            {item.name}
          </Link>
          <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-center rounded-lg border border-gray-300">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 text-lg hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 text-lg hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="text-sm text-rose-500 hover:underline">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
