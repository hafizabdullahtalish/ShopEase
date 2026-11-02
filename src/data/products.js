// Product photos are free stock photos from Pexels (https://www.pexels.com), each one
// matching its product (laptop -> laptop photo). To use your own picture, replace the
// `image` value of a product with any image link.
const pexels = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

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
    image: pexels(3394666),
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
    image: pexels(267394),
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
    image: pexels(880874),
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
    image: pexels(16428589),
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
    image: pexels(1124466),
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
    image: pexels(11671964),
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
    image: pexels(1643280),
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
    image: pexels(5782042),
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
    image: pexels(14188395),
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
    image: pexels(915917),
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
    image: pexels(1548027),
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
    image: pexels(13693319),
    description:
      "Water-resistant canvas backpack with a padded 15-inch laptop sleeve and plenty of organised pockets.",
  },
  {
    id: 13,
    name: "UltraSlim 15.6\" Laptop",
    category: "Electronics",
    price: 649.0,
    oldPrice: 749.0,
    rating: 4.7,
    reviews: 274,
    featured: true,
    image: pexels(6355),
    description:
      "15.6-inch Full HD laptop with a fast SSD, 16 GB RAM and all-day battery. Light enough to carry everywhere.",
  },
  {
    id: 14,
    name: "Android Smartphone 128GB",
    category: "Electronics",
    price: 299.0,
    oldPrice: 349.0,
    rating: 4.5,
    reviews: 518,
    featured: true,
    image: pexels(719399),
    description:
      "6.5-inch AMOLED display, 50 MP camera and a 5000 mAh battery with fast charging. Dual SIM and 128 GB storage.",
  },
  {
    id: 15,
    name: "Mechanical Gaming Keyboard",
    category: "Electronics",
    price: 59.99,
    rating: 4.4,
    reviews: 143,
    image: pexels(671629),
    description:
      "Tactile mechanical switches, RGB backlight and a sturdy metal frame. Great for typing and gaming.",
  },
  {
    id: 16,
    name: "Digital Mirrorless Camera",
    category: "Electronics",
    price: 479.0,
    rating: 4.6,
    reviews: 88,
    image: pexels(11486464),
    description:
      "24 MP mirrorless camera with 4K video, fast autofocus and a bright flip-out screen. Kit lens included.",
  },
];
