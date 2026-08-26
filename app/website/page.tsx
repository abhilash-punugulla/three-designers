import Link from "next/link";

const templates = [
  {
    name: "Business Website",
    type: "Company / Corporate",
    icon: "💼",
    href: "/website/web-templates/business",
    gradient: "from-blue-500/30 to-purple-500/20",
  },
  {
    name: "Restaurant Website",
    type: "Restaurant / Cafe",
    icon: "🍽️",
    href: "/website/web-templates/restaurant",
    gradient: "from-orange-500/30 to-red-500/20",
  },
  {
    name: "Portfolio Website",
    type: "Personal / Creative",
    icon: "🎨",
    href: "/website/web-templates/portfolio",
    gradient: "from-pink-500/30 to-purple-500/20",
  },
  {
    name: "E-Commerce Website",
    type: "Online Store",
    icon: "🛍️",
    href: "/website/web-templates/ecommerce",
    gradient: "from-purple-500/30 to-blue-500/20",
  },
  {
    name: "Education Website",
    type: "School / Courses",
    icon: "🎓",
    href: "/website/web-templates/education",
    gradient: "from-cyan-500/30 to-blue-500/20",
  },
  {
    name: "Real Estate Website",
    type: "Property / Realty",
    icon: "🏠",
    href: "/website/web-templates/real-estate",
    gradient: "from-green-500/30 to-teal-500/20",
  },
];

const packages = [
  {
    name: "Starter Website",
    price: "₹2,999",
    description: "A clean website for a small business or personal brand.",
    features: [
      "Modern responsive design",
      "Up to 5 pages",
      "Mobile friendly",
      "Contact form",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business Website",
    price: "₹9,999",
    description: "A professional website designed to grow your business.",
    features: [
      "Custom UI design",
      "Up to 10 pages",
      "Mobile responsive",
      "Contact & enquiry forms",
      "SEO friendly",
      "Deployment support",
    ],
    popular: true,
  },
  {
    name: "Premium Website",
    price: "₹24,999+",
    description: "A larger custom website built around your requirements.",
    features: [
      "Premium custom design",
      "Multiple pages",
      "Advanced sections",
      "Animations",
      "Forms & integrations",
      "SEO setup",
      "Deployment support",
    ],
  },
];

export default function WebsitePage() {
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
              className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10"
            >
              App
            </Link>

            <Link
              href="/website"
              className="rounded-full bg-white/10 px-5 py-2 text-sm"
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

          <div className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-200">
            🌐 Website Design & Development
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

            Your Business
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Deserves A Great Website.
            </span>

          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            We create modern, responsive and professional websites that help
            businesses build trust and grow online.
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

        <div className="grid gap-5 md:grid-cols-4">

          <Feature
            icon="🎨"
            title="Modern Design"
            text="Premium interfaces designed around your brand."
          />

          <Feature
            icon="📱"
            title="Responsive"
            text="Looks great on phones, tablets and computers."
          />

          <Feature
            icon="⚡"
            title="Fast"
            text="Optimised for a smooth and fast experience."
          />

          <Feature
            icon="🔍"
            title="SEO Friendly"
            text="Built with search visibility in mind."
          />

        </div>

      </section>


      {/* PACKAGES */}
      <section
        id="packages"
        className="mx-auto max-w-7xl px-5 py-24"
      >

        <div className="text-center">

          <div className="text-sm uppercase tracking-widest text-blue-300">
            Website Packages
          </div>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">

            Choose your{" "}

            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              website package.
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Flexible packages for different business needs.
          </p>

        </div>


        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {packages.map((pkg) => (

            <div
              key={pkg.name}
              className={`rounded-[30px] border p-8 ${
                pkg.popular
                  ? "border-blue-500/50 bg-blue-500/[0.06]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >

              {pkg.popular && (
                <div className="mb-5 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-200">
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

                    <span className="text-blue-300">
                      ✓
                    </span>

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

          <div className="text-sm uppercase tracking-widest text-blue-300">
            Website Templates
          </div>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">

            Choose a{" "}

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              starting point.
            </span>

          </h2>

          <p className="mt-5 max-w-xl text-white/40">
            Explore our sample website concepts and choose one to customise
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

              {/* WEBSITE PREVIEW */}
              <div
                className={`relative h-64 bg-gradient-to-br ${template.gradient} p-6`}
              >

                <div className="h-full rounded-2xl border border-white/15 bg-[#0b0b13]/90 p-3 shadow-2xl backdrop-blur-xl">

                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">

                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />

                    <div className="ml-3 h-2 flex-1 rounded-full bg-white/10" />

                  </div>


                  {/* Website content */}
                  <div className="grid h-[calc(100%-30px)] grid-cols-3 gap-2 pt-3">

                    <div className="col-span-2 rounded-xl bg-white/10 p-3">

                      <div className="text-2xl">
                        {template.icon}
                      </div>

                      <div className="mt-4 h-2 w-20 rounded-full bg-white/20" />

                      <div className="mt-2 h-2 w-32 rounded-full bg-white/10" />

                      <div className="mt-5 h-12 rounded-xl bg-white/10" />

                    </div>

                    <div className="rounded-xl bg-white/5 p-2">

                      <div className="h-8 rounded-lg bg-white/10" />
                      <div className="mt-2 h-8 rounded-lg bg-white/10" />
                      <div className="mt-2 h-8 rounded-lg bg-white/10" />

                    </div>

                  </div>

                </div>

              </div>


              {/* INFO */}
              <div className="p-6">

                <div className="text-sm text-blue-300">
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

        <div className="rounded-[35px] border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/5 p-10 text-center md:p-16">

          <div className="text-sm uppercase tracking-widest text-blue-300">
            Start Your Website
          </div>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Ready to go online?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Tell us about your business and we can discuss the right website
            package for you.
          </p>

          <a
            href="https://wa.me/+919951497458"
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

            <Link href="/">
              Home
            </Link>

            <Link href="/app">
              App
            </Link>

            <Link href="/web-app">
              Web + App
            </Link>

            <Link href="/social-media">
              Social Media
            </Link>

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