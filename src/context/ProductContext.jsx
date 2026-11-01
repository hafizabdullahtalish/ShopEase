import { createContext, useContext, useMemo, useState } from "react";
import { products, categories } from "../data/products.js";

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

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
  }, [search, category, sort]);

  const featuredProducts = useMemo(() => products.filter((p) => p.featured), []);
  const getProductById = (id) => products.find((p) => p.id === Number(id));
  const getRelatedProducts = (product, limit = 4) =>
    products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);

  const value = {
    products,
    categories,
    filteredProducts,
    featuredProducts,
    getProductById,
    getRelatedProducts,
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
