import { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext.jsx";
import ProductImage from "../components/ProductImage.jsx";

const field =
  "w-full rounded-lg border border-stone-300 bg-surface px-3 py-2 text-sm outline-none focus:border-brand-500";
const label = "mb-1 block text-sm font-medium text-stone-700";

const empty = {
  name: "",
  category: "",
  newCategory: "",
  price: "",
  oldPrice: "",
  description: "",
  imageUrl: "",
};

// Shrinks an uploaded photo so it fits in browser storage.
function fileToDataUrl(file, maxSize = 600) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

export default function AddProduct() {
  const { categories, customProducts, addProduct, deleteProduct } = useProducts();
  const [form, setForm] = useState({ ...empty, category: categories[0] });
  const [imageData, setImageData] = useState("");
  const [message, setMessage] = useState(null); // { type, text }

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setImageData(await fileToDataUrl(file));
      setForm((f) => ({ ...f, imageUrl: "" }));
    } catch {
      setMessage({ type: "error", text: "Could not read that image. Try another file." });
    }
  };

  const image = imageData || form.imageUrl.trim();
  const category = form.category === "__new" ? form.newCategory.trim() : form.category;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!image) return setMessage({ type: "error", text: "Please upload an image or paste an image URL." });
    if (!category) return setMessage({ type: "error", text: "Please enter a category." });

    const price = parseFloat(form.price);
    const oldPrice = form.oldPrice ? parseFloat(form.oldPrice) : undefined;
    if (oldPrice !== undefined && oldPrice <= price) {
      return setMessage({ type: "error", text: "Old price must be higher than the price (or leave it empty)." });
    }

    const result = addProduct({
      name: form.name.trim(),
      category,
      price,
      ...(oldPrice ? { oldPrice } : {}),
      description: form.description.trim(),
      image,
    });

    if (!result.ok) return setMessage({ type: "error", text: result.error });

    setMessage({ type: "success", text: `"${form.name.trim()}" added! It now shows on Home and Shop.` });
    setForm({ ...empty, category: categories[0] });
    setImageData("");
    e.target.reset();
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-stone-900">Add a product</h1>
      <p className="mt-1 text-sm text-stone-500">
        Products added here are saved in <strong>this browser only</strong>. Other visitors will not see them.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-xl border border-stone-200 bg-surface p-6">
        <div>
          <label className={label}>Product name</label>
          <input required name="name" value={form.name} onChange={onChange} className={field} placeholder="e.g. Wireless Mouse" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label}>Category</label>
            <select name="category" value={form.category} onChange={onChange} className={field}>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
              <option value="__new">+ New category…</option>
            </select>
          </div>
          {form.category === "__new" && (
            <div>
              <label className={label}>New category name</label>
              <input required name="newCategory" value={form.newCategory} onChange={onChange} className={field} placeholder="e.g. Sports" />
            </div>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label}>Price ($)</label>
            <input required type="number" min="0.01" step="0.01" name="price" value={form.price} onChange={onChange} className={field} />
          </div>
          <div>
            <label className={label}>Old price ($) <span className="text-stone-400">optional, shows a discount</span></label>
            <input type="number" min="0" step="0.01" name="oldPrice" value={form.oldPrice} onChange={onChange} className={field} />
          </div>
        </div>

        <div>
          <label className={label}>Description</label>
          <textarea required rows="4" name="description" value={form.description} onChange={onChange} className={field} placeholder="Write a short description…" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label}>Upload image</label>
            <input type="file" accept="image/*" onChange={onFile} className="block w-full text-sm text-stone-600 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-brand-700" />
          </div>
          <div>
            <label className={label}>…or image URL</label>
            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={(e) => {
                setImageData("");
                onChange(e);
              }}
              className={field}
              placeholder="https://…"
            />
          </div>
        </div>

        {image && (
          <img src={image} alt="Preview" className="h-32 w-32 rounded-lg border border-stone-200 object-cover" />
        )}

        {message && (
          <p className={`rounded-lg px-4 py-3 text-sm ${message.type === "error" ? "bg-rose-50 text-rose-700" : "bg-green-50 text-green-700"}`}>
            {message.text}{" "}
            {message.type === "success" && (
              <Link to="/shop" className="font-semibold underline">View in shop</Link>
            )}
          </p>
        )}

        <button type="submit" className="w-full rounded-lg bg-brand-700 py-3 font-semibold text-white hover:bg-brand-800">
          Add product
        </button>
      </form>

      <h2 className="mt-10 text-xl font-bold">Your added products ({customProducts.length})</h2>
      {customProducts.length === 0 ? (
        <p className="mt-2 text-sm text-stone-500">Nothing added yet.</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {customProducts.map((p) => (
            <li key={p.id} className="flex items-center gap-4 rounded-xl border border-stone-200 bg-surface p-3">
              <ProductImage src={p.image} alt={p.name} className="h-16 w-16 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                <Link to={`/product/${p.id}`} className="block truncate font-medium hover:text-brand-700">{p.name}</Link>
                <p className="text-sm text-stone-500">{p.category} · ${p.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => window.confirm(`Delete "${p.name}"?`) && deleteProduct(p.id)}
                className="text-sm text-rose-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
