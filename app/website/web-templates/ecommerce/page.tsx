import Link from "next/link";

const products = [
  {
    name: "Essential Oversized Tee",
    price: "₹1,499",
    oldPrice: "₹1,999",
    icon: "👕",
  },
  {
    name: "Everyday Sneakers",
    price: "₹3,499",
    oldPrice: "₹4,299",
    icon: "👟",
  },
  {
    name: "Minimal Backpack",
    price: "₹2,199",
    oldPrice: "₹2,799",
    icon: "🎒",
  },
  {
    name: "Classic Watch",
    price: "₹4,999",
    oldPrice: "₹6,499",
    icon: "⌚",
  },
];

export default function EcommerceTemplate() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">

      {/* TOP ANNOUNCEMENT */}
      <div className="bg-black px-4 py-3 text-center text-xs font-medium tracking-wide text-white">
        FREE SHIPPING ON ORDERS ABOVE ₹1,999
      </div>


      {/* NAVBAR */}
      <nav className="border-b border-black/10">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex h-20 items-center justify-between gap-8">

            <Link
              href="/website"
              className="text-2xl font-black tracking-[-0.06em]"
            >
              NORTH
            </Link>


            <div className="hidden items-center gap-8 text-sm md:flex">

              <a href="#new" className="hover:text-black/50">
                New Arrivals
              </a>

              <a href="#shop" className="hover:text-black/50">
                Shop
              </a>

              <a href="#about" className="hover:text-black/50">
                About
              </a>

              <a href="#contact" className="hover:text-black/50">
                Contact
              </a>

            </div>


            <div className="flex items-center gap-3">

              <button className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black/5">
                Search
              </button>

              <button className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black/5">
                Bag (0)
              </button>

            </div>

          </div>

        </div>

      </nav>


      {/* HERO */}
      <section
        id="new"
        className="mx-auto max-w-7xl px-6 py-8"
      >

        <div className="grid min-h-[650px] overflow-hidden bg-[#e8e4dc] lg:grid-cols-2">

          <div className="flex flex-col justify-center p-8 md:p-16">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/50">
              New Season · 2026
            </p>

            <h1 className="mt-6 max-w-xl text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
              MADE FOR
              <br />
              EVERY
              <br />
              <span className="text-[#77705f]">
                DAY.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-7 text-black/55">
              Everyday essentials designed with clean details,
              quality materials and effortless style.
            </p>

            <a
              href="#shop"
              className="mt-8 inline-block w-fit bg-black px-8 py-4 text-sm font-semibold text-white hover:bg-black/80"
            >
              Shop New Arrivals →
            </a>

          </div>


          {/* PRODUCT VISUAL */}
          <div className="relative flex min-h-[500px] items-center justify-center bg-[#d1cbc0]">

            <div className="absolute right-10 top-10 text-xs font-bold uppercase tracking-widest text-black/40">
              NORTH / 01
            </div>

            <div className="relative flex h-[360px] w-[260px] items-center justify-center rounded-[45%_45%_15%_15%] bg-[#292824] shadow-2xl">

              <div className="text-center text-white">

                <div className="text-7xl">
                  👕
                </div>

                <div className="mt-8 text-sm font-bold tracking-[0.3em]">
                  NORTH
                </div>

              </div>

            </div>

            <div className="absolute bottom-10 left-10 text-xs uppercase tracking-widest text-black/40">
              Essential Collection
            </div>

          </div>

        </div>

      </section>


      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid grid-cols-2 border-y border-black/10 md:grid-cols-4">

          <Category
            title="Clothing"
            icon="👕"
          />

          <Category
            title="Footwear"
            icon="👟"
          />

          <Category
            title="Accessories"
            icon="👜"
          />

          <Category
            title="New Arrivals"
            icon="✦"
          />

        </div>

      </section>


      {/* PRODUCTS */}
      <section
        id="shop"
        className="mx-auto max-w-7xl px-6 pb-24"
      >

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              Shop
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Best sellers
            </h2>

          </div>

          <button className="hidden border-b border-black pb-1 text-sm md:block">
            View All Products →
          </button>

        </div>


        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (

            <Product
              key={product.name}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              icon={product.icon}
            />

          ))}

        </div>

      </section>


      {/* PROMO */}
      <section className="bg-black text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
              Limited Collection
            </p>

            <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.04em] md:text-7xl">
              SIMPLE
              <br />
              LOOKS.
              <br />
              <span className="text-[#a7ff4f]">
                BIG IMPACT.
              </span>
            </h2>

          </div>

          <div>

            <p className="max-w-md text-base leading-7 text-white/50">
              A focused collection of pieces designed to work together,
              season after season.
            </p>

            <button className="mt-8 bg-white px-7 py-4 text-sm font-semibold text-black">
              Explore Collection →
            </button>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="grid gap-10 md:grid-cols-2">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              About NORTH
            </p>

            <h2 className="mt-5 max-w-xl text-5xl font-black leading-none tracking-tight">
              Better basics.
              <br />
              Less noise.
            </h2>

          </div>

          <p className="max-w-xl text-lg leading-8 text-black/50">
            NORTH is a fictional e-commerce brand concept built to
            demonstrate how a premium online store can present products,
            collections and brand stories in a clean digital experience.
          </p>

        </div>

      </section>


      {/* NEWSLETTER */}
      <section className="border-y border-black/10 bg-[#f5f5f2]">

        <div className="mx-auto max-w-3xl px-6 py-20 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            Stay Updated
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            New drops. No noise.
          </h2>

          <p className="mt-4 text-sm text-black/50">
            Get updates about new collections and special offers.
          </p>

          <div className="mx-auto mt-8 flex max-w-md">

            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 border border-black/15 bg-white px-5 py-4 text-sm outline-none"
            />

            <button className="bg-black px-6 py-4 text-sm font-semibold text-white">
              Join
            </button>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="bg-[#e8e4dc] p-10 md:p-16">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
            E-Commerce Website
          </p>

          <h2 className="mt-5 max-w-3xl text-5xl font-black leading-none tracking-tight md:text-7xl">
            Ready to build
            <br />
            your online store?
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-black/50">
            We can customise this store concept with your products,
            branding, payment system and business requirements.
          </p>

          <a
            href="mailto:YOUR-EMAIL@example.com"
            className="mt-8 inline-block bg-black px-8 py-4 text-sm font-semibold text-white"
          >
            Request This Website →
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-black/10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-black/40 md:flex-row">

          <div className="font-black">
            NORTH
          </div>

          <div>
            © 2026 E-Commerce Template
          </div>

        </div>

      </footer>

    </main>
  );
}


function Category({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) {
  return (
    <a
      href="#shop"
      className="flex items-center justify-center gap-3 border-r border-black/10 px-4 py-8 text-sm font-medium transition last:border-r-0 hover:bg-[#f5f5f2]"
    >
      <span className="text-xl">
        {icon}
      </span>

      {title}
    </a>
  );
}


function Product({
  name,
  price,
  oldPrice,
  icon,
}: {
  name: string;
  price: string;
  oldPrice: string;
  icon: string;
}) {
  return (
    <div className="group">

      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#f0efeb]">

        <div className="absolute left-4 top-4 bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          New
        </div>

        <div className="text-7xl transition duration-300 group-hover:scale-110">
          {icon}
        </div>

        <button className="absolute bottom-4 left-4 right-4 bg-black py-3 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
          Quick Add +
        </button>

      </div>

      <div className="pt-4">

        <h3 className="text-sm font-semibold">
          {name}
        </h3>

        <div className="mt-2 flex gap-2 text-sm">

          <span>
            {price}
          </span>

          <span className="text-black/30 line-through">
            {oldPrice}
          </span>

        </div>

      </div>

    </div>
  );
}