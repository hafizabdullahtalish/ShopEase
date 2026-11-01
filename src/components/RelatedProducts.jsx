import { useProducts } from "../context/ProductContext.jsx";
import ProductGrid from "./ProductGrid.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function RelatedProducts({ product }) {
  const { getRelatedProducts } = useProducts();
  const related = getRelatedProducts(product);
  if (!related.length) return null;

  return (
    <section className="mt-14">
      <SectionHeader title="You may also like" />
      <ProductGrid products={related} />
    </section>
  );
}
