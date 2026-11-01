const img = (seed) => `https://picsum.photos/seed/${seed}/600/600`;

export const categories = ["Electronics", "Fashion", "Home", "Accessories"];

export const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 129.99,
    oldPrice: 169.99,
    rating: 4.6,
    reviews: 328,
    featured: true,
    image: img("headphones"),
    description:
      "Over-ear Bluetooth headphones with active noise cancellation, 40-hour battery life and a comfortable memory-foam fit.",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 89.5,
    oldPrice: 119.0,
    rating: 4.4,
    reviews: 212,
    featured: true,
    image: img("smartwatch"),
    description:
      "Track heart rate, sleep, steps and workouts. Water resistant with a bright AMOLED display and 7-day battery.",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    rating: 4.3,
    reviews: 154,
    image: img("speaker"),
    description:
      "Compact speaker with rich bass, IPX7 waterproofing and 12 hours of playtime. Perfect for trips and parties.",
  },
  {
    id: 4,
    name: "Classic Denim Jacket",
    category: "Fashion",
    price: 74.0,
    oldPrice: 95.0,
    rating: 4.5,
    reviews: 97,
    featured: true,
    image: img("denimjacket"),
    description:
      "A timeless medium-wash denim jacket with a relaxed fit. Durable cotton that gets better with every wear.",
  },
  {
    id: 5,
    name: "Everyday Running Sneakers",
    category: "Fashion",
    price: 64.99,
    rating: 4.7,
    reviews: 413,
    featured: true,
    image: img("sneakers"),
    description:
      "Lightweight, breathable sneakers with cushioned soles. Built for daily runs, gym sessions and city walks.",
  },
  {
    id: 6,
    name: "Cotton Crew-Neck T-Shirt",
    category: "Fashion",
    price: 19.99,
    rating: 4.2,
    reviews: 640,
    image: img("tshirt"),
    description:
      "Soft 100% combed cotton tee with a classic fit. Available in everyday colours that go with everything.",
  },
  {
    id: 7,
    name: "Ceramic Table Lamp",
    category: "Home",
    price: 39.0,
    rating: 4.5,
    reviews: 76,
    image: img("lamp"),
    description:
      "Handmade ceramic base with a linen shade. Gives any bedroom or living room a warm, cosy glow.",
  },
  {
    id: 8,
    name: "Stainless Steel Cookware Set",
    category: "Home",
    price: 159.0,
    oldPrice: 210.0,
    rating: 4.8,
    reviews: 189,
    featured: true,
    image: img("cookware"),
    description:
      "10-piece non-toxic cookware set with tri-ply bottoms for even heating. Oven safe and dishwasher friendly.",
  },
  {
    id: 9,
    name: "Plush Throw Blanket",
    category: "Home",
    price: 29.99,
    rating: 4.6,
    reviews: 245,
    image: img("blanket"),
    description:
      "Ultra-soft fleece throw blanket, big enough for the whole sofa. Machine washable and wrinkle resistant.",
  },
  {
    id: 10,
    name: "Leather Bifold Wallet",
    category: "Accessories",
    price: 34.5,
    rating: 4.4,
    reviews: 132,
    image: img("wallet"),
    description:
      "Genuine leather wallet with RFID protection, six card slots and a slim profile that fits any pocket.",
  },
  {
    id: 11,
    name: "Polarized Aviator Sunglasses",
    category: "Accessories",
    price: 24.99,
    oldPrice: 39.99,
    rating: 4.3,
    reviews: 301,
    image: img("sunglasses"),
    description:
      "UV400 polarized lenses in a lightweight metal frame. Reduces glare for driving, travel and beach days.",
  },
  {
    id: 12,
    name: "Canvas Backpack",
    category: "Accessories",
    price: 54.0,
    rating: 4.6,
    reviews: 168,
    featured: true,
    image: img("backpack"),
    description:
      "Water-resistant canvas backpack with a padded 15-inch laptop sleeve and plenty of organised pockets.",
  },
];
