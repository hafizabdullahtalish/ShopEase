import { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext.jsx";

const input =
  "w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";

export default function ManageProducts() {
  const { products, deleteProduct, updateProduct } = useProducts();
  const [query, setQuery] = useState("");
  const [editId, setEditId] = useState(null);
  const [draft, setDraft] = useState({ name: "", price: "", category: "" });
  const [error, setError] = useState("");

  const shown = products.filter((p) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const startEdit = (p) => {
    setError("");
    setEditId(p.id);
    setDraft({ name: p.name, price: p.price, category: p.category || "" });
  };

  const save = () => {
    if (!draft.name.trim() || !(Number(draft.price) >= 0)) {
      setError("Enter a name and a valid price.");
      return;
    }
    const res = updateProduct(editId, {
      name: draft.name.trim(),
      price: Number(draft.price),
      category: draft.category.trim(),
    });
    if (res.ok) {
      setEditId(null);
      setError("");
    } else setError(res.error);
  };

  const remove = (p) => {
    if (!window.confirm(`Delete "${p.name}"? This cannot be undone.`)) return;
    const res = deleteProduct(p.id);
    if (!res.ok) setError(res.error);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold text-stone-900">Products</h1>
        <Link
          to="/admin/add"
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Add product
        </Link>
      </div>

      <input
        className={input}
        placeholder="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {error && <p className="text-sm text-red-700">{error}</p>}

      <div className="overflow-x-auto rounded-xl border border-stone-300/60 bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-stone-300/60 text-stone-600">
            <tr>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-300/60">
            {shown.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-stone-600">
                  No products match your search.
                </td>
              </tr>
            )}
            {shown.map((p) =>
              editId === p.id ? (
                <tr key={p.id}>
                  <td className="px-4 py-2">
                    <input className={input} value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
                  </td>
                  <td className="px-4 py-2">
                    <input className={input} value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} />
                  </td>
                  <td className="px-4 py-2">
                    <input className={input} type="number" min="0" value={draft.price} onChange={(e) => setDraft({ ...draft, price: e.target.value })} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-right">
                    <button onClick={save} className="mr-3 font-medium text-brand-700 hover:underline">Save</button>
                    <button onClick={() => { setEditId(null); setError(""); }} className="text-stone-600 hover:underline">Cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={p.id}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {p.image && <img src={p.image} alt="" className="h-10 w-10 rounded-md object-cover" />}
                      <span className="font-medium">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-stone-600">{p.category || "-"}</td>
                  <td className="px-4 py-3">{p.price}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    {p.custom ? (
                      <>
                        <button onClick={() => startEdit(p)} className="mr-3 font-medium text-brand-700 hover:underline">Edit</button>
                        <button onClick={() => remove(p)} className="font-medium text-red-700 hover:underline">Delete</button>
                      </>
                    ) : (
                      <span className="text-stone-500">Built-in</span>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
