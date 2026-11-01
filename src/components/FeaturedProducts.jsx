import { useProducts } from "../context/ProductContext.jsx";
import ProductGrid from "./ProductGrid.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function FeaturedProducts() {
  const { featuredProducts } = useProducts();
  return (
    <section>
      <SectionHeader title="Featured products" linkTo="/shop" />
      <ProductGrid products={featuredProducts.slice(0, 4)} />
    </section>
  );
}
