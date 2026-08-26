import Link from "next/link";

export default function RestaurantTemplate() {
  return (
    <main className="min-h-screen bg-[#f7f2e9] text-[#211b16]">

      {/* NAVBAR */}
      <nav className="mx-auto max-w-7xl px-6 py-6">

        <div className="flex items-center justify-between border-b border-[#211b16]/10 pb-5">

          <Link
            href="/website"
            className="font-serif text-2xl font-bold tracking-tight"
          >
            OLIVE & FIRE
          </Link>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#menu" className="hover:opacity-60">
              Menu
            </a>

            <a href="#story" className="hover:opacity-60">
              Our Story
            </a>

            <a href="#contact" className="hover:opacity-60">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#211b16] px-5 py-3 text-sm text-white hover:opacity-80"
          >
            Reserve a Table
          </a>

        </div>

      </nav>


      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#92704b]">
              Contemporary Indian Kitchen
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] md:text-8xl">
              Food made
              <br />
              with
              <br />
              <span className="italic text-[#92704b]">
                character.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#211b16]/60">
              Seasonal ingredients, bold flavours and timeless recipes
              brought together in a warm, modern dining experience.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#menu"
                className="rounded-full bg-[#211b16] px-7 py-4 text-sm text-white"
              >
                Explore Menu
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#211b16]/20 px-7 py-4 text-sm"
              >
                Reserve a Table
              </a>

            </div>

          </div>


          {/* IMAGE-STYLE VISUAL */}
          <div className="relative h-[560px] overflow-hidden rounded-[180px_180px_20px_20px] bg-[#c9a47b]">

            <div className="absolute inset-8 rounded-[150px_150px_15px_15px] bg-[#8b5e3c]" />

            <div className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#e7d4b8] shadow-2xl">

              <div className="text-center">

                <div className="text-6xl">
                  🍝
                </div>

                <div className="mt-4 font-serif text-xl">
                  Chef's Special
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}
      <section
        id="story"
        className="border-y border-[#211b16]/10 bg-[#eee5d8]"
      >

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#92704b]">
            Our Philosophy
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            Simple ingredients.
            <br />
            <span className="italic">
              Serious flavour.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#211b16]/55">
            Every plate begins with carefully selected ingredients and
            ends with a dish designed to be remembered.
          </p>

        </div>

      </section>


      {/* MENU */}
      <section
        id="menu"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-[#92704b]">
              From The Kitchen
            </p>

            <h2 className="mt-4 font-serif text-5xl">
              Signature dishes
            </h2>

          </div>

          <span className="text-sm text-[#211b16]/40">
            Seasonal menu · Updated weekly
          </span>

        </div>


        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">

          <Dish
            name="Charcoal Butter Chicken"
            description="Smoked tomato, cultured butter, coriander"
            price="₹620"
            icon="🍗"
          />

          <Dish
            name="Truffle Mushroom Rice"
            description="Wild mushrooms, herbs, aged parmesan"
            price="₹540"
            icon="🍚"
          />

          <Dish
            name="Fire Roasted Paneer"
            description="Charred peppers, cashew cream, herbs"
            price="₹480"
            icon="🧀"
          />

          <Dish
            name="Classic Tiramisu"
            description="Espresso, mascarpone, cocoa"
            price="₹320"
            icon="🍰"
          />

        </div>

      </section>


      {/* EXPERIENCE */}
      <section className="bg-[#211b16] text-[#f7f2e9]">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-12 md:grid-cols-3">

            <div>
              <div className="font-serif text-5xl">
                01
              </div>

              <h3 className="mt-5 text-xl">
                Thoughtful Food
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Recipes developed around fresh seasonal ingredients.
              </p>
            </div>

            <div>
              <div className="font-serif text-5xl">
                02
              </div>

              <h3 className="mt-5 text-xl">
                Warm Atmosphere
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                A relaxed space designed for conversations and celebrations.
              </p>
            </div>

            <div>
              <div className="font-serif text-5xl">
                03
              </div>

              <h3 className="mt-5 text-xl">
                Memorable Evenings
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                From first course to dessert, every detail matters.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="border border-[#211b16]/10 bg-[#eee5d8] p-10 text-center md:p-16">

          <p className="text-xs uppercase tracking-[0.3em] text-[#92704b]">
            Come Dine With Us
          </p>

          <h2 className="mt-5 font-serif text-5xl">
            Your table is waiting.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-[#211b16]/50">
            Experience our seasonal menu in the heart of the city.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-[#211b16] px-8 py-4 text-sm text-white"
          >
            Reserve a Table
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-[#211b16]/10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-[#211b16]/50 md:flex-row">

          <div className="font-serif text-lg font-bold">
            OLIVE & FIRE
          </div>

          <div>
            © 2026 Olive & Fire
          </div>

        </div>

      </footer>

    </main>
  );
}


function Dish({
  name,
  description,
  price,
  icon,
}: {
  name: string;
  description: string;
  price: string;
  icon: string;
}) {
  return (
    <div className="flex gap-5 border-b border-[#211b16]/10 pb-8">

      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#e5d5c1] text-3xl">
        {icon}
      </div>

      <div className="flex-1">

        <div className="flex justify-between gap-5">

          <h3 className="font-serif text-xl">
            {name}
          </h3>

          <span className="text-sm">
            {price}
          </span>

        </div>

        <p className="mt-2 text-sm leading-6 text-[#211b16]/50">
          {description}
        </p>

      </div>

    </div>
  );
}