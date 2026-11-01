import Hero from "../components/Hero.jsx";
import CategoryShowcase from "../components/CategoryShowcase.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import TopRatedProducts from "../components/TopRatedProducts.jsx";

export default function Home() {
  return (
    <div className="space-y-14">
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <TopRatedProducts />
    </div>
  );
}
