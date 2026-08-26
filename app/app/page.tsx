import Link from "next/link";

const templates = [
  {
    name: "Food Delivery",
    type: "Restaurant / Delivery",
    icon: "🍔",
    href: "/app/app-templates/food-delivery",
    gradient: "from-orange-500/30 to-red-500/20",
  },
  {
    name: "Fitness App",
    type: "Health / Fitness",
    icon: "🏃",
    href: "/app/app-templates/fitness",
    gradient: "from-green-500/30 to-blue-500/20",
  },
  {
    name: "E-Commerce",
    type: "Shopping / Store",
    icon: "🛍️",
    href: "/app/app-templates/ecommerce",
    gradient: "from-purple-500/30 to-pink-500/20",
  },
  {
    name: "Education App",
    type: "School / Courses",
    icon: "🎓",
    href: "/app/app-templates/education",
    gradient: "from-blue-500/30 to-cyan-500/20",
  },
  {
    name: "Business App",
    type: "Business / Services",
    icon: "💼",
    href: "/app/app-templates/business",
    gradient: "from-indigo-500/30 to-purple-500/20",
  },
  {
    name: "Booking App",
    type: "Bookings / Appointments",
    icon: "📅",
    href: "/app/app-templates/booking",
    gradient: "from-pink-500/30 to-purple-500/20",
  },
];

const packages = [
  {
    name: "Starter App",
    price: "₹19,999",
    description: "A simple mobile app for a small business or new idea.",
    features: [
      "Modern UI design",
      "Up to 5 screens",
      "Android app",
      "Basic functionality",
      "Deployment guidance",
    ],
  },
  {
    name: "Business App",
    price: "₹24,999",
    description: "A complete app for businesses that need more features.",
    features: [
      "Custom UI design",
      "Up to 10 screens",
      "Android app",
      "Backend integration",
      "Basic admin features",
      "Deployment support",
    ],
    popular: true,
  },
  {
    name: "Advanced App",
    price: "₹39,999+",
    description: "A larger custom application built around your requirements.",
    features: [
      "Custom app design",
      "Multiple screens",
      "Advanced functionality",
      "Backend integration",
      "Database integration",
      "Deployment support",
    ],
  },
];

export default function AppPage() {
  return (
    <main className="min-h-screen bg-[#05050d] text-white">

      {/* NAVBAR */}
      <nav className="mx-auto max-w-7xl px-5 pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.05] px-6 py-4 backdrop-blur-xl">

          <Link href="/" className="text-xl font-bold leading-5">
            three
            <br />
            <span className="text-white/40">designers</span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">

            <Link
              href="/"
              className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10"
            >
              Home
            </Link>

            <Link
              href="/app"
              className="rounded-full bg-white/10 px-5 py-2 text-sm"
            >
              App
            </Link>

            <Link
              href="/website"
              className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10"
            >
              Website
            </Link>

            <Link
              href="/web-app"
              className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10"
            >
              Web + App
            </Link>

            <Link
              href="/social-media"
              className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10"
            >
              Social Media
            </Link>

          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 bg-white/[0.05] px-5 py-2 text-sm hover:bg-white/10 md:block"
          >
            Contact Us
          </a>

        </div>
      </nav>


      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-28">

        <div className="max-w-4xl">

          <div className="inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-200">
            📱 App Development
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Turn Your Idea Into
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              A Powerful App.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            We design modern mobile applications for businesses,
            startups, creators and entrepreneurs.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#packages"
              className="rounded-full border border-white/15 bg-white/10 px-7 py-3 hover:bg-white/20"
            >
              View Packages →
            </a>

            <a
              href="#templates"
              className="rounded-full border border-white/15 px-7 py-3 hover:bg-white/10"
            >
              Explore Templates
            </a>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-5 py-10">

        <div className="grid gap-5 md:grid-cols-3">

          <Feature
            icon="🎨"
            title="Modern UI"
            text="Clean and modern interfaces designed around your brand."
          />

          <Feature
            icon="⚡"
            title="Fast Experience"
            text="Responsive experiences built for modern devices."
          />

          <Feature
            icon="🔒"
            title="Scalable"
            text="Applications designed with future growth in mind."
          />

        </div>

      </section>


      {/* PACKAGES */}
      <section
        id="packages"
        className="mx-auto max-w-7xl px-5 py-24"
      >

        <div className="text-center">

          <div className="text-sm uppercase tracking-widest text-purple-300">
            App Packages
          </div>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Choose your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              app package.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Start small or build a complete custom application.
          </p>

        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {packages.map((pkg) => (

            <div
              key={pkg.name}
              className={`rounded-[30px] border p-8 ${
                pkg.popular
                  ? "border-purple-500/50 bg-purple-500/[0.06]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >

              {pkg.popular && (
                <div className="mb-5 inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-200">
                  Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {pkg.name}
              </h3>

              <p className="mt-3 min-h-[55px] text-sm leading-6 text-white/40">
                {pkg.description}
              </p>

              <div className="mt-8 text-4xl font-bold">
                {pkg.price}
              </div>

              <div className="my-8 h-px bg-white/10" />

              <div className="space-y-4">

                {pkg.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 text-sm text-white/60"
                  >
                    <span className="text-purple-300">✓</span>
                    {feature}
                  </div>
                ))}

              </div>

              <a
                href="#contact"
                className="mt-9 block rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center hover:bg-white/20"
              >
                Get Started →
              </a>

            </div>

          ))}

        </div>

      </section>


      {/* TEMPLATES */}
      <section
        id="templates"
        className="mx-auto max-w-7xl px-5 py-24"
      >

        <div>

          <div className="text-sm uppercase tracking-widest text-purple-300">
            App Templates
          </div>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Choose a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              starting point.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-white/40">
            Explore our sample app concepts and choose one to customise
            for your business.
          </p>

        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {templates.map((template) => (

            <Link
              href={template.href}
              key={template.name}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:bg-white/[0.06]"
            >

              {/* PHONE PREVIEW */}
              <div
                className={`relative h-72 bg-gradient-to-br ${template.gradient} p-7`}
              >

                <div className="mx-auto h-full max-w-[175px] rounded-[30px] border border-white/20 bg-[#0b0b13]/90 p-3 shadow-2xl backdrop-blur-xl">

                  <div className="flex justify-between px-2 text-[8px] text-white/40">
                    <span>9:41</span>
                    <span>● ● ●</span>
                  </div>

                  <div className="mt-4 rounded-2xl bg-white/10 p-5">

                    <div className="text-4xl">
                      {template.icon}
                    </div>

                    <div className="mt-4 h-2 w-16 rounded-full bg-white/20" />

                    <div className="mt-2 h-2 w-24 rounded-full bg-white/10" />

                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">

                    <div className="h-14 rounded-xl bg-white/10" />
                    <div className="h-14 rounded-xl bg-white/10" />

                  </div>

                </div>

              </div>


              {/* CARD INFO */}
              <div className="p-6">

                <div className="text-sm text-purple-300">
                  {template.type}
                </div>

                <h3 className="mt-2 text-xl font-semibold">
                  {template.name}
                </h3>

                <div className="mt-5 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-sm text-white/60 transition group-hover:bg-white/10 group-hover:text-white">
                  Open Template →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 py-24"
      >

        <div className="rounded-[35px] border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/5 p-10 text-center md:p-16">

          <div className="text-sm uppercase tracking-widest text-purple-300">
            Start Your App
          </div>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Ready to build?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Tell us about your idea and we can discuss the right package
            for you.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full border border-white/20 bg-white/10 px-8 py-4 hover:bg-white/20"
          >
            Contact Us →
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 text-sm text-white/40 md:flex-row">

          <div>
            © 2026 Three Designers. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-6">

            <Link href="/">Home</Link>
            <Link href="/website">Website</Link>
            <Link href="/web-app">Web + App</Link>
            <Link href="/social-media">Social Media</Link>

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
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/40">
        {text}
      </p>

    </div>
  );
}