import { createContext, useContext, useMemo, useState } from "react";
import { products as baseProducts, categories as baseCategories } from "../data/products.js";

const ProductContext = createContext(null);
const STORAGE_KEY = "buynest-custom-products";

function loadCustom() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function ProductProvider({ children }) {
  const [customProducts, setCustomProducts] = useState(loadCustom);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const products = useMemo(() => [...baseProducts, ...customProducts], [customProducts]);

  const categories = useMemo(() => {
    const extra = customProducts.map((p) => p.category).filter((c) => !baseCategories.includes(c));
    return [...baseCategories, ...new Set(extra)];
  }, [customProducts]);

  // Returns { ok: true } or { ok: false, error }
  const persist = (next) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setCustomProducts(next);
      return { ok: true };
    } catch {
      return { ok: false, error: "Browser storage is full. Use a smaller image or an image URL." };
    }
  };

  const addProduct = (data) => {
    const product = {
      id: Date.now(),
      rating: 4.5,
      reviews: 0,
      featured: true,
      custom: true,
      ...data,
    };
    return persist([...customProducts, product]);
  };

  const deleteProduct = (id) => persist(customProducts.filter((p) => p.id !== id));

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesSearch = p.name.toLowerCase().includes(search.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [products, search, category, sort]);

  const featuredProducts = useMemo(() => {
    const featured = products.filter((p) => p.featured);
    // newest custom products first so a freshly added product shows up on Home
    return [...featured.filter((p) => p.custom).reverse(), ...featured.filter((p) => !p.custom)];
  }, [products]);

  const getProductById = (id) => products.find((p) => p.id === Number(id));
  const getRelatedProducts = (product, limit = 4) =>
    products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);

  const value = {
    products,
    customProducts,
    categories,
    filteredProducts,
    featuredProducts,
    getProductById,
    getRelatedProducts,
    addProduct,
    deleteProduct,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function useProducts() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProducts must be used inside ProductProvider");
  return ctx;
}
