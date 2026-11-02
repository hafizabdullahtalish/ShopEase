# BuyNest – React E-commerce Frontend

The website name is set in one place: `src/config.js`.

React 18 + Vite + Tailwind CSS 4 + React Router v6 + Context API (JavaScript).

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Structure

```
src/
  data/products.js            product list + categories
  context/ProductContext.jsx  products, search, category filter, sorting
  context/CartContext.jsx     cart state (persisted in localStorage)
  components/                 Navbar, Footer, Hero, ProductCard, ProductGrid,
                              FeaturedProducts, TopRatedProducts, RelatedProducts,
                              CategoryShowcase, CategoryFilter, CartItem, OrderSummary...
  pages/                      Home, Shop, ProductDetails, Cart, Checkout, NotFound
```

## Where products are shown

- Home: Featured products, Top rated, Shop by category
- Shop: filtered, searchable, sortable grid
- Product details: related products
- Cart / Checkout: items and order summary

To use your own products, edit `src/data/products.js`.
