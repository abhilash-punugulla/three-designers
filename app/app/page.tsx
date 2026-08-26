import Link from "next/link";

const templates = [
  {
    name: "Food Delivery",
    type: "Restaurant / Delivery",
    icon: "🍔",
    href: "/app/app-templates/food-delivery",
    tag: "Popular",
  },
  {
    name: "Fitness App",
    type: "Health / Fitness",
    icon: "🏃",
    href: "/app/app-templates/fitness",
    tag: "Lifestyle",
  },
  {
    name: "E-Commerce",
    type: "Shopping / Store",
    icon: "🛍️",
    href: "/app/app-templates/ecommerce",
    tag: "Business",
  },
  {
    name: "Education App",
    type: "School / Courses",
    icon: "🎓",
    href: "/app/app-templates/education",
    tag: "Education",
  },
  {
    name: "Business App",
    type: "Business / Services",
    icon: "💼",
    href: "/app/app-templates/business",
    tag: "Business",
  },
  {
    name: "Booking App",
    type: "Bookings / Appointments",
    icon: "📅",
    href: "/app/app-templates/booking",
    tag: "Services",
  },
];

const packages = [
  {
    name: "Starter App",
    price: "₹19,999",
    description:
      "A simple mobile application for a small business, creator or new idea.",
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
    description:
      "A complete mobile application for businesses that need more features.",
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
    description:
      "A larger custom application built around your specific requirements.",
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
    <main className="min-h-screen overflow-hidden bg-[#05050d] text-white">

      {/* NAVIGATION */}
      <nav className="mx-auto max-w-7xl px-5 pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-2xl md:px-7">

          <Link href="/" className="text-xl font-bold leading-5">
            three
            <br />
            <span className="text-white/35">designers</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">

            <NavLink href="/" label="Home" />

            <NavLink
              href="/app"
              label="App"
              active
            />

            <NavLink href="/website" label="Website" />

            <NavLink href="/web-app" label="Web + App" />

            <NavLink href="/social-media" label="Social Media" />

          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm transition hover:bg-white/10"
          >
            Contact
          </a>

        </div>
      </nav>


      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-5 pb-28 pt-24 md:pt-32">

        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-2 text-sm text-purple-200">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              Mobile App Development
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">

              Your idea.

              <br />

              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                In their hands.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
              We design and build modern mobile applications for businesses,
              startups, creators and entrepreneurs who want to turn an idea
              into a real digital product.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#packages"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/80"
              >
                View App Packages →
              </a>

              <a
                href="#templates"
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm transition hover:bg-white/10"
              >
                Explore Templates
              </a>

            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-sm text-white/35">

              <div>
                <strong className="text-white">UI/UX</strong>
                <br />
                Modern interfaces
              </div>

              <div>
                <strong className="text-white">Android</strong>
                <br />
                App development
              </div>

              <div>
                <strong className="text-white">Custom</strong>
                <br />
                Built around you
              </div>

            </div>

          </div>


          {/* PHONE VISUAL */}
          <div className="relative flex min-h-[560px] items-center justify-center">

            <div className="absolute h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />

            <div className="relative h-[510px] w-[255px] rotate-3 rounded-[42px] border border-white/20 bg-[#11111b] p-3 shadow-2xl shadow-purple-900/30">

              <div className="h-full overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#171326] via-[#0b0b14] to-[#05050d]">

                <div className="flex items-center justify-between px-6 pt-5 text-[9px] text-white/40">
                  <span>9:41</span>
                  <span>● ● ●</span>
                </div>

                <div className="px-6 pt-12">

                  <div className="text-xs text-purple-300">
                    THREE DESIGNERS
                  </div>

                  <div className="mt-3 text-3xl font-bold leading-tight">
                    Build.
                    <br />
                    Launch.
                    <br />
                    Grow.
                  </div>

                  <div className="mt-6 h-2 w-28 rounded-full bg-white/10" />

                  <div className="mt-2 h-2 w-20 rounded-full bg-white/5" />

                </div>

                <div className="mx-5 mt-12 rounded-3xl border border-white/10 bg-white/[0.06] p-4">

                  <div className="flex items-center justify-between">

                    <div className="text-3xl">
                      ✦
                    </div>

                    <span className="rounded-full bg-purple-500/20 px-3 py-1 text-[9px] text-purple-200">
                      PRO
                    </span>

                  </div>

                  <div className="mt-7 h-2 rounded-full bg-white/10" />

                  <div className="mt-2 h-2 w-2/3 rounded-full bg-white/5" />

                </div>

                <div className="mx-5 mt-4 grid grid-cols-2 gap-3">

                  <div className="h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/10" />

                  <div className="h-24 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/10" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-5 py-20">

          <div className="grid gap-12 md:grid-cols-3">

            <div>
              <div className="text-4xl">🎨</div>
              <h3 className="mt-5 text-xl font-semibold">
                Designed properly
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/40">
                Clean interfaces designed around your brand and your users.
              </p>
            </div>

            <div>
              <div className="text-4xl">⚡</div>
              <h3 className="mt-5 text-xl font-semibold">
                Built for real use
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/40">
                We focus on useful functionality instead of unnecessary
                complexity.
              </p>
            </div>

            <div>
              <div className="text-4xl">🚀</div>
              <h3 className="mt-5 text-xl font-semibold">
                Ready to launch
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/40">
                Get support with deployment and turning your concept into a
                working product.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* PACKAGES */}
      <section
        id="packages"
        className="mx-auto max-w-7xl px-5 py-28"
      >

        <div className="max-w-3xl">

          <div className="text-sm font-medium uppercase tracking-[0.25em] text-purple-300">
            App Development Packages
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Start with the right
            <br />
            <span className="text-white/35">
              level of build.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-white/40">
            Choose a starting package and customise it around your business,
            product or idea.
          </p>

        </div>


        <div className="mt-14 grid gap-5 lg:grid-cols-3">

          {packages.map((pkg) => (

            <div
              key={pkg.name}
              className={`relative rounded-[32px] border p-8 transition duration-300 hover:-translate-y-1 ${
                pkg.popular
                  ? "border-purple-400/40 bg-gradient-to-b from-purple-500/[0.12] to-white/[0.03]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >

              {pkg.popular && (
                <div className="absolute right-7 top-7 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                  Most Popular
                </div>
              )}

              <div className="text-sm text-white/35">
                {pkg.popular ? "02" : pkg.name === "Starter App" ? "01" : "03"}
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                {pkg.name}
              </h3>

              <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/40">
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
                    className="flex gap-3 text-sm text-white/55"
                  >
                    <span className="text-purple-300">
                      ✓
                    </span>

                    {feature}
                  </div>

                ))}

              </div>

              <a
                href="#contact"
                className={`mt-9 block rounded-full px-6 py-3.5 text-center text-sm transition ${
                  pkg.popular
                    ? "bg-white font-medium text-black hover:bg-white/80"
                    : "border border-white/15 bg-white/[0.04] hover:bg-white/10"
                }`}
              >
                Choose {pkg.name} →
              </a>

            </div>

          ))}

        </div>

      </section>


      {/* TEMPLATES */}
      <section
        id="templates"
        className="border-y border-white/10 bg-white/[0.015]"
      >

        <div className="mx-auto max-w-7xl px-5 py-28">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <div className="text-sm font-medium uppercase tracking-[0.25em] text-blue-300">
                App Templates
              </div>

              <h2 className="mt-5 text-4xl font-bold md:text-6xl">
                Start from an idea.
              </h2>

              <p className="mt-5 max-w-xl text-white/40">
                Explore sample app concepts and customise one for your
                business or project.
              </p>

            </div>

            <div className="text-sm text-white/30">
              06 sample concepts
            </div>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {templates.map((template, index) => (

              <Link
                key={template.name}
                href={template.href}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.055]"
              >

                {/* PREVIEW */}
                <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-white/[0.07] to-white/[0.015]">

                  <div className="absolute left-6 top-6 text-xs text-white/25">
                    0{index + 1}
                  </div>

                  <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] text-white/35">
                    {template.tag}
                  </div>

                  <div className="absolute h-44 w-44 rounded-full bg-purple-500/10 blur-[70px] transition duration-500 group-hover:bg-purple-500/20" />

                  <div className="relative h-56 w-32 rotate-3 rounded-[25px] border border-white/20 bg-[#0b0b13] p-2 shadow-2xl transition duration-500 group-hover:rotate-0">

                    <div className="h-full rounded-[19px] bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-3">

                      <div className="flex justify-between text-[6px] text-white/30">
                        <span>9:41</span>
                        <span>● ● ●</span>
                      </div>

                      <div className="mt-7 text-3xl">
                        {template.icon}
                      </div>

                      <div className="mt-5 h-2 w-14 rounded-full bg-white/15" />

                      <div className="mt-2 h-1.5 w-20 rounded-full bg-white/5" />

                      <div className="mt-7 grid grid-cols-2 gap-2">
                        <div className="h-10 rounded-lg bg-white/10" />
                        <div className="h-10 rounded-lg bg-white/5" />
                      </div>

                      <div className="mt-3 h-8 rounded-lg bg-white/5" />

                    </div>

                  </div>

                </div>


                {/* INFO */}
                <div className="p-7">

                  <div className="text-xs uppercase tracking-widest text-purple-300">
                    {template.type}
                  </div>

                  <h3 className="mt-3 text-xl font-semibold">
                    {template.name}
                  </h3>

                  <div className="mt-6 flex items-center justify-between text-sm">

                    <span className="text-white/30">
                      View sample
                    </span>

                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-5 py-28">

        <div className="grid gap-16 md:grid-cols-2">

          <div>

            <div className="text-sm font-medium uppercase tracking-[0.25em] text-pink-300">
              Why Three Designers
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Not just another
              <br />
              <span className="text-white/35">
                app build.
              </span>
            </h2>

          </div>

          <div className="space-y-0">

            <WhyItem
              number="01"
              title="Clear communication"
              text="We keep the process understandable from the first idea to the final product."
            />

            <WhyItem
              number="02"
              title="Design-first thinking"
              text="Your application should look professional before users even start using it."
            />

            <WhyItem
              number="03"
              title="Built around your needs"
              text="We don't force every project into the same template or workflow."
            />

            <WhyItem
              number="04"
              title="Launch support"
              text="We help you understand the next steps required to get your application live."
            />

          </div>

        </div>

      </section>


      {/* SEO CONTENT */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-5xl px-5 py-24 text-center">

          <div className="text-sm uppercase tracking-[0.25em] text-purple-300">
            Mobile App Development
          </div>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            Modern mobile apps for modern businesses
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/40">
            Three Designers provides mobile app design and development
            solutions for businesses, startups, creators and entrepreneurs.
            From business applications and e-commerce apps to booking,
            education, fitness and food delivery applications, we create
            digital products designed around real business requirements.
          </p>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 py-28"
      >

        <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-purple-500/15 via-white/[0.03] to-blue-500/10 p-10 md:p-16">

          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/20 blur-[90px]" />

          <div className="relative max-w-3xl">

            <div className="text-sm uppercase tracking-[0.25em] text-purple-300">
              Start Your Project
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Have an app idea?
              <br />
              <span className="text-white/35">
                Let's build it.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-white/40">
              Tell us about your application idea, business or project and
              we'll help you choose the right starting point.
            </p>

            <a
              href="mailto:YOUR-EMAIL@example.com"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-white/80"
            >
              Discuss Your App →
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-9 text-sm text-white/35 md:flex-row">

          <div>
            © 2026 Three Designers. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-6">

            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/website" className="hover:text-white">
              Website
            </Link>

            <Link href="/web-app" className="hover:text-white">
              Web + App
            </Link>

            <Link href="/social-media" className="hover:text-white">
              Social Media
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}


/* NAV LINK */

function NavLink({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-5 py-2 text-sm transition ${
        active
          ? "bg-white/10 text-white"
          : "text-white/55 hover:bg-white/10 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}


/* WHY ITEM */

function WhyItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-white/10 py-7">

      <div className="grid gap-4 md:grid-cols-[60px_1fr]">

        <div className="text-sm text-purple-300">
          {number}
        </div>

        <div>

          <h3 className="text-xl font-semibold">
            {title}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}