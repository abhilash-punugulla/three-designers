import Link from "next/link";

const packages = [
  {
    name: "Launch",
    price: "₹34,999",
    description: "A complete digital presence for a new business.",
    features: [
      "Professional Website",
      "Android App",
      "Responsive Design",
      "Basic Admin Panel",
      "3 Months Support",
    ],
  },
  {
    name: "Business",
    price: "₹54,999",
    description: "Website and app for growing businesses.",
    features: [
      "Premium Website",
      "Android & iOS App",
      "Admin Dashboard",
      "Database Integration",
      "6 Months Support",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "A custom solution built around your requirements.",
    features: [
      "Custom Website",
      "Custom Mobile App",
      "Advanced Dashboard",
      "API Integrations",
      "Dedicated Support",
    ],
  },
];

export default function WebAppPage() {
  return (
    <main className="min-h-screen bg-[#05050d] text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-150px] top-[150px] h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[150px]" />
        <div className="absolute right-[-150px] top-[400px] h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-[150px]" />
      </div>

      {/* NAVBAR */}
      <header className="mx-auto max-w-7xl px-5 pt-5">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 backdrop-blur-xl">

          <Link href="/" className="leading-[0.85]">
            <span className="text-xl font-bold">three</span>
            <br />
            <span className="text-xl font-bold text-white/50">
              designers
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">

            <Link
              href="/"
              className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/app"
              className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white"
            >
              App
            </Link>

            <Link
              href="/website"
              className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white"
            >
              Website
            </Link>

            <Link
              href="/web-app"
              className="rounded-full bg-white/10 px-5 py-2 text-sm"
            >
              Web + App
            </Link>

            <Link
              href="/social-media"
              className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white"
            >
              Social Media
            </Link>

          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm hover:bg-white/15"
          >
            Contact Us
          </a>

        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-24">

        <div className="max-w-4xl">

          <div className="mb-6 inline-flex rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
            ◈ Web + App Development
          </div>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">

            One Brand.
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Website + App.
            </span>

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Get your website and mobile application designed together for a
            consistent and professional digital experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="#packages"
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm backdrop-blur-xl hover:bg-white/20"
            >
              View Packages →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm hover:bg-white/10"
            >
              Discuss Your Project
            </a>

          </div>

        </div>

      </section>

      {/* COMBINATION */}
      <section className="mx-auto max-w-7xl px-5">

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-12">

          <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">

            <div>

              <p className="text-sm tracking-widest text-purple-300">
                COMPLETE DIGITAL PRESENCE
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Everything your
                <br />
                business needs.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/40">
                Your website attracts visitors while your app keeps your
                customers connected to your business.
              </p>

            </div>

            {/* VISUAL */}
            <div className="relative flex h-[300px] items-center justify-center">

              <div className="absolute h-48 w-48 rounded-full bg-purple-500/20 blur-[80px]" />

              {/* Phone */}
              <div className="absolute left-[18%] top-8 h-[240px] w-[125px] rotate-[-8deg] rounded-[25px] border border-white/20 bg-[#090914] p-2 shadow-2xl">

                <div className="h-full overflow-hidden rounded-[19px] bg-gradient-to-b from-purple-500/20 to-blue-500/5">

                  <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-white/20" />

                  <div className="p-4">

                    <div className="h-3 w-16 rounded bg-white/30" />

                    <div className="mt-4 h-20 rounded-xl bg-purple-400/20" />

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="h-12 rounded-lg bg-white/10" />
                      <div className="h-12 rounded-lg bg-white/10" />
                    </div>

                  </div>

                </div>

              </div>

              {/* Laptop */}
              <div className="absolute right-[8%] top-16 w-[270px]">

                <div className="h-[165px] rounded-xl border border-white/20 bg-[#090914] p-2 shadow-2xl">

                  <div className="h-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/15 to-purple-500/15">

                    <div className="flex items-center gap-1 border-b border-white/10 p-3">

                      <div className="h-2 w-2 rounded-full bg-red-400/50" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400/50" />
                      <div className="h-2 w-2 rounded-full bg-green-400/50" />

                    </div>

                    <div className="p-4">

                      <div className="h-4 w-32 rounded bg-white/20" />

                      <div className="mt-4 h-16 rounded-lg bg-blue-400/10" />

                      <div className="mt-3 flex gap-2">
                        <div className="h-4 w-16 rounded bg-white/10" />
                        <div className="h-4 w-16 rounded bg-white/10" />
                        <div className="h-4 w-16 rounded bg-white/10" />
                      </div>

                    </div>

                  </div>

                </div>

                <div className="mx-auto h-3 w-[310px] rounded-b-xl bg-white/10" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PACKAGES */}
      <section
        id="packages"
        className="mx-auto max-w-7xl px-5 py-28"
      >

        <div className="text-center">

          <p className="text-sm tracking-widest text-purple-300">
            WEB + APP PACKAGES
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">

            One Package.
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Complete Solution.
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Choose the package that fits your business.
          </p>

        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">

          {packages.map((pkg) => (

            <div
              key={pkg.name}
              className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
            >

              {pkg.popular && (
                <div className="absolute right-5 top-5 rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-200">
                  Popular
                </div>
              )}

              <div className="flex gap-2">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-500/10">
                  🌐
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-500/10">
                  📱
                </div>

              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {pkg.name}
              </h3>

              <p className="mt-2 text-sm text-white/40">
                {pkg.description}
              </p>

              <div className="mt-7 text-4xl font-bold">
                {pkg.price}
              </div>

              {pkg.price !== "Let's Talk" && (
                <p className="mt-1 text-xs text-white/30">
                  Starting from
                </p>
              )}

              <div className="my-7 h-px bg-white/10" />

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
                className="mt-8 block rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center text-sm hover:bg-white/20"
              >
                Get Started →
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 pb-24"
      >

        <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-xl sm:p-14">

          <p className="text-sm tracking-widest text-purple-300">
            LET&apos;S BUILD TOGETHER
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Ready to build your digital presence?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Tell us about your business and we&apos;ll discuss the right
            website + app solution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <a
              href="https://wa.me/919951497458"
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm hover:bg-white/20"
            >
              💬 WhatsApp
            </a>

            <a
              href="mailto:threedesigners@gmail.com"
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm hover:bg-white/20"
            >
              ✉ Email Us
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">

          <div>
            © 2026 Three Designers. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-5">

            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/app" className="hover:text-white">
              App
            </Link>

            <Link href="/website" className="hover:text-white">
              Website
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