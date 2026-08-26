import Link from "next/link";

export default function FoodDelivery() {
  return (
    <main className="min-h-screen bg-[#05050d] text-white">

      <nav className="mx-auto max-w-7xl px-5 pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.05] px-6 py-4">
          <Link href="/app" className="text-xl font-bold leading-5">
            three
            <br />
            <span className="text-white/40">designers</span>
          </Link>

          <Link
            href="/app"
            className="rounded-full border border-white/15 px-5 py-2 text-sm hover:bg-white/10"
          >
            ← Back to Apps
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 py-24">

        <div className="max-w-3xl">

          <div className="inline-block rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-200">
            🍔 Food Delivery App
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Delicious food.
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Delivered fast.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            A modern food ordering application concept for restaurants,
            cloud kitchens and food delivery businesses.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-block rounded-full bg-white px-7 py-3 font-medium text-black hover:bg-white/80"
          >
            Request This Design →
          </a>

        </div>


        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <Phone title="Home" emoji="🍔" />

          <Phone title="Restaurants" emoji="🍕" />

          <Phone title="Order Tracking" emoji="🛵" />

        </div>


        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">

          <h2 className="text-3xl font-bold">
            Perfect for
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <Box text="Restaurants" />
            <Box text="Cloud Kitchens" />
            <Box text="Food Delivery Startups" />

          </div>

        </div>

      </section>


      <section id="contact" className="mx-auto max-w-7xl px-5 pb-24">

        <div className="rounded-3xl border border-orange-500/20 bg-orange-500/[0.05] p-10 text-center">

          <h2 className="text-4xl font-bold">
            Want an app like this?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/40">
            We can customise this concept with your logo, colours,
            screens and business requirements.
          </p>

          <a
            href="mailto:threedesigner01@gmail.com"
            className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-medium text-black"
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}


function Phone({
  title,
  emoji,
}: {
  title: string;
  emoji: string;
}) {
  return (
    <div className="rounded-[35px] border border-white/10 bg-white/[0.03] p-8">

      <div className="mx-auto max-w-[240px] rounded-[35px] border border-white/15 bg-[#0b0b13] p-4 shadow-2xl">

        <div className="flex justify-between text-xs text-white/30">
          <span>9:41</span>
          <span>● ● ●</span>
        </div>

        <div className="mt-6 rounded-3xl bg-gradient-to-br from-orange-500/30 to-red-500/20 p-8">

          <div className="text-6xl">{emoji}</div>

          <h3 className="mt-6 text-xl font-bold">
            {title}
          </h3>

          <div className="mt-4 h-2 w-24 rounded-full bg-white/20" />
          <div className="mt-2 h-2 w-32 rounded-full bg-white/10" />

        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">

          <div className="h-20 rounded-2xl bg-white/10" />
          <div className="h-20 rounded-2xl bg-white/10" />

        </div>

      </div>

    </div>
  );
}


function Box({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white/60">
      ✓ {text}
    </div>
  );
}