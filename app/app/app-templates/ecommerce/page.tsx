"use client";

import { useState } from "react";

const products = [
  {
    name: "Minimal Sneakers",
    category: "Footwear",
    price: "₹2,499",
    oldPrice: "₹3,499",
    image: "👟",
  },
  {
    name: "Classic Watch",
    category: "Accessories",
    price: "₹3,999",
    oldPrice: "₹5,499",
    image: "⌚",
  },
  {
    name: "Everyday Backpack",
    category: "Bags",
    price: "₹1,899",
    oldPrice: "₹2,699",
    image: "🎒",
  },
  {
    name: "Premium Headphones",
    category: "Electronics",
    price: "₹4,499",
    oldPrice: "₹5,999",
    image: "🎧",
  },
];

const categories = [
  "All",
  "New Arrivals",
  "Clothing",
  "Footwear",
  "Accessories",
];

export default function ShoppingTemplate() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState(2);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      activeCategory === "New Arrivals" ||
      product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">

      {/* TOP NAVIGATION */}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f5]/95 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* BRAND */}

          <div>
            <p className="text-xl font-black tracking-tight">
              NORTH
            </p>

            <p className="text-[9px] font-medium tracking-[0.3em] text-black/40">
              MODERN GOODS
            </p>
          </div>


          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-8 md:flex">

            <button className="text-sm font-medium">
              Home
            </button>

            <button className="text-sm text-black/50 hover:text-black">
              Shop
            </button>

            <button className="text-sm text-black/50 hover:text-black">
              Collections
            </button>

            <button className="text-sm text-black/50 hover:text-black">
              About
            </button>

          </nav>


          {/* ACTIONS */}

          <div className="flex items-center gap-2">

            <button className="hidden rounded-xl p-3 hover:bg-black/5 sm:block">
              ♡
            </button>

            <button className="rounded-xl p-3 hover:bg-black/5">
              ♙
            </button>

            <button className="relative rounded-xl bg-black p-3 text-white">

              🛒

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black ring-2 ring-[#f7f7f5]">
                {cart}
              </span>

            </button>

          </div>

        </div>

      </header>


      {/* HERO */}

      <section className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8">

        <div className="grid overflow-hidden rounded-[28px] bg-[#dedbd3] md:grid-cols-2">

          {/* HERO TEXT */}

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

            <span className="w-fit rounded-full bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
              New Collection
            </span>

            <h1 className="mt-7 max-w-xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Designed for
              <span className="block text-black/40">
                everyday living.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-black/50">
              Thoughtfully designed products made for modern lifestyles.
              Simple, useful and built to last.
            </p>

            <button className="mt-7 w-fit rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80">
              Explore Collection →
            </button>

          </div>


          {/* HERO PRODUCT */}

          <div className="relative flex min-h-[340px] items-center justify-center bg-[#c9c5bb]">

            <div className="absolute right-8 top-8 rounded-full border border-black/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
              SS26
            </div>

            <div className="text-[150px] drop-shadow-2xl sm:text-[190px]">
              👟
            </div>

          </div>

        </div>

      </section>


      {/* SEARCH */}

      <section className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="flex flex-col justify-between gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-widest text-black/40">
              Shop
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Featured products
            </h2>

          </div>


          <div className="relative">

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pl-10 text-sm outline-none transition focus:border-black sm:w-64"
            />

            <span className="absolute left-4 top-3 text-black/30">
              ⌕
            </span>

          </div>

        </div>

      </section>


      {/* CATEGORIES */}

      <section className="mx-auto max-w-7xl overflow-x-auto px-5 py-6 sm:px-8">

        <div className="flex min-w-max gap-2">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-xs font-medium transition ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "border border-black/10 bg-white text-black/50 hover:text-black"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </section>


      {/* PRODUCT GRID */}

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.map((product) => (

            <div
              key={product.name}
              className="group"
            >

              {/* PRODUCT IMAGE */}

              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-white">

                <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white">
                  New
                </span>

                <button
                  onClick={() => setCart(cart + 1)}
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm opacity-0 shadow-sm transition group-hover:opacity-100"
                >
                  ♡
                </button>

                <div className="text-8xl transition duration-500 group-hover:scale-110">
                  {product.image}
                </div>

              </div>


              {/* PRODUCT DETAILS */}

              <div className="pt-4">

                <p className="text-[10px] font-medium uppercase tracking-widest text-black/35">
                  {product.category}
                </p>

                <div className="mt-1 flex items-start justify-between gap-3">

                  <h3 className="text-sm font-semibold">
                    {product.name}
                  </h3>

                  <div className="text-right">

                    <p className="text-sm font-bold">
                      {product.price}
                    </p>

                    <p className="text-[10px] text-black/30 line-through">
                      {product.oldPrice}
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => setCart(cart + 1)}
                  className="mt-4 w-full rounded-xl border border-black/10 py-2.5 text-xs font-medium transition hover:bg-black hover:text-white"
                >
                  Add to cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* FEATURES */}

      <section className="border-y border-black/10 bg-white">

        <div className="mx-auto grid max-w-7xl gap-px bg-black/10 sm:grid-cols-3">

          <Feature
            icon="↗"
            title="Fast delivery"
            text="Quick and reliable delivery to your doorstep."
          />

          <Feature
            icon="◇"
            title="Secure payments"
            text="Safe and secure checkout for every purchase."
          />

          <Feature
            icon="↻"
            title="Easy returns"
            text="Simple returns with a hassle-free experience."
          />

        </div>

      </section>


      {/* NEWSLETTER */}

      <section className="px-5 py-20 sm:px-8">

        <div className="mx-auto max-w-4xl rounded-[28px] bg-black px-7 py-14 text-center text-white sm:px-12">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
            Stay in the loop
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Get new drops & offers.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/40">
            Subscribe to receive product launches, special offers and
            updates.
          </p>

          <div className="mx-auto mt-7 flex max-w-md flex-col gap-2 sm:flex-row">

            <input
              placeholder="Your email address"
              className="flex-1 rounded-xl bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
            />

            <button className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black">
              Subscribe
            </button>

          </div>

        </div>

      </section>


      {/* TEMPLATE INFORMATION */}

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">

        <div className="rounded-2xl border border-dashed border-black/15 bg-white/50 p-5">

          <p className="text-sm font-semibold">
            Shopping App Template
          </p>

          <p className="mt-1 text-xs leading-5 text-black/40">
            This is a sample e-commerce application interface created by
            Three Designers. Products, payments, accounts, inventory,
            delivery and branding can be customized for your business.
          </p>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-black/10 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center">

          <div>

            <p className="font-black">
              NORTH
            </p>

            <p className="mt-1 text-[10px] text-black/30">
              MODERN GOODS
            </p>

          </div>

          <div className="flex gap-6 text-xs text-black/40">

            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>

          </div>

        </div>

      </footer>

    </main>
  );
}


function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white p-7 sm:p-9">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-sm text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-sm font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-black/40">
        {text}
      </p>

    </div>
  );
}