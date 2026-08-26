import Link from "next/link";

const packages = [
  {
    name: "Starter",
    price: "₹1,999",
    period: "/month",
    description: "For small businesses starting their social media journey.",
    features: [
      "8 posts per month",
      "4 stories per month",
      "Basic content design",
      "Caption writing",
      "Hashtag research",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    price: "₹4,999",
    period: "/month",
    description: "For businesses that want consistent social media growth.",
    features: [
      "12 posts per month",
      "8 stories per month",
      "Reels editing",
      "Caption writing",
      "Hashtag research",
      "Content calendar",
      "Monthly performance report",
    ],
    popular: true,
  },
  {
    name: "Professional",
    price: "₹14,999",
    period: "/month",
    description: "For brands looking for a stronger social media presence.",
    features: [
      "16 posts per month",
      "12 stories per month",
      "6 reels per month",
      "Premium content design",
      "Caption & hashtag strategy",
      "Content calendar",
      "Community management",
      "Monthly analytics",
    ],
  },
  {
    name: "Premium",
    price: "₹24,999",
    period: "/month",
    description: "Complete social media management for growing brands.",
    features: [
      "20 posts per month",
      "16 stories per month",
      "10 reels per month",
      "Premium creative designs",
      "Advanced content strategy",
      "Community management",
      "Monthly content planning",
      "Detailed analytics",
      "Priority support",
    ],
  },
];

export default function SocialMediaPage() {
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
              className="rounded-full bg-white/10 px-5 py-2 text-sm"
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

          <div className="inline-block rounded-full border border-pink-400/30 bg-pink-500/10 px-5 py-2 text-sm text-pink-200">
            📱 Social Media Management
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

            Your brand.
            <br />

            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Everywhere people look.
            </span>

          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            We create, manage and grow your social media presence so you
            can focus on running your business.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#packages"
              className="rounded-full border border-white/15 bg-white/10 px-7 py-3 hover:bg-white/20"
            >
              View Monthly Packages →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3 hover:bg-white/10"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-10">

        <div className="grid gap-5 md:grid-cols-4">

          <Service
            icon="🎨"
            title="Content Design"
            text="Modern graphics designed around your brand."
          />

          <Service
            icon="🎬"
            title="Reels"
            text="Short-form video content designed for social platforms."
          />

          <Service
            icon="✍️"
            title="Captions"
            text="Captions and hashtags created for your audience."
          />

          <Service
            icon="📊"
            title="Analytics"
            text="Monthly reports to track your social performance."
          />

        </div>

      </section>


      {/* PACKAGES */}
      <section
        id="packages"
        className="mx-auto max-w-7xl px-5 py-24"
      >

        <div className="text-center">

          <div className="text-sm uppercase tracking-widest text-pink-300">
            Monthly Packages
          </div>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">

            Choose your{" "}

            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              monthly plan.
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Simple monthly plans for businesses of different sizes.
            Cancel or upgrade whenever your needs change.
          </p>

        </div>


        <div className="mt-14 grid gap-6 lg:grid-cols-4">

          {packages.map((pkg) => (

            <div
              key={pkg.name}
              className={`relative rounded-[30px] border p-7 ${
                pkg.popular
                  ? "border-pink-500/50 bg-pink-500/[0.06]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >

              {pkg.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-pink-500/20 px-3 py-1 text-xs text-pink-200">
                  Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {pkg.name}
              </h3>

              <p className="mt-4 min-h-[65px] text-sm leading-6 text-white/40">
                {pkg.description}
              </p>


              {/* PRICE */}
              <div className="mt-8 flex items-end gap-1">

                <span className="text-4xl font-bold">
                  {pkg.price}
                </span>

                <span className="pb-1 text-sm text-white/40">
                  {pkg.period}
                </span>

              </div>


              <div className="my-7 h-px bg-white/10" />


              {/* FEATURES */}
              <div className="space-y-4">

                {pkg.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex gap-3 text-sm text-white/60"
                  >

                    <span className="text-pink-300">
                      ✓
                    </span>

                    {feature}

                  </div>

                ))}

              </div>


              <a
                href="#contact"
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm ${
                  pkg.popular
                    ? "bg-white text-black hover:bg-white/80"
                    : "border border-white/15 bg-white/5 hover:bg-white/10"
                }`}
              >
                Choose {pkg.name} →
              </a>

            </div>

          ))}

        </div>

      </section>


      {/* WHAT WE MANAGE */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-5 py-24">

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <div className="text-sm uppercase tracking-widest text-pink-300">
                Platforms
              </div>

              <h2 className="mt-5 text-4xl font-bold md:text-6xl">
                One team.
                <br />
                Multiple platforms.
              </h2>

            </div>


            <div className="grid grid-cols-2 gap-4">

              <Platform icon="◎" name="Instagram" />
              <Platform icon="f" name="Facebook" />
              <Platform icon="▶" name="YouTube" />
              <Platform icon="in" name="LinkedIn" />
              <Platform icon="𝕏" name="X" />
              <Platform icon="♪" name="Short Videos" />

            </div>

          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-24">

        <div className="text-center">

          <div className="text-sm uppercase tracking-widest text-purple-300">
            Our Process
          </div>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            From idea to published.
          </h2>

        </div>


        <div className="mt-14 grid gap-5 md:grid-cols-4">

          <Step
            number="01"
            title="Strategy"
            text="We understand your business, audience and goals."
          />

          <Step
            number="02"
            title="Content"
            text="We plan and create your monthly content."
          />

          <Step
            number="03"
            title="Publish"
            text="Content is scheduled and published consistently."
          />

          <Step
            number="04"
            title="Improve"
            text="We review performance and improve the strategy."
          />

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 pb-24"
      >

        <div className="rounded-[35px] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-purple-500/5 p-10 text-center md:p-16">

          <div className="text-sm uppercase tracking-widest text-pink-300">
            Start Your Monthly Plan
          </div>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Ready to grow your brand?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Choose a monthly package and let's build a consistent social
            media presence for your business.
          </p>

          <a
            href="https://wa.me/919951497458"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-medium text-black hover:bg-white/80"
          >
            Get Started →
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

            <Link href="/website">
              Website
            </Link>

            <Link href="/web-app">
              Web + App
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}


/* SERVICE CARD */

function Service({
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


/* PLATFORM */

function Platform({
  icon,
  name,
}: {
  icon: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 font-bold">
        {icon}
      </div>

      <span className="text-sm text-white/60">
        {name}
      </span>

    </div>
  );
}


/* PROCESS STEP */

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

      <div className="text-sm text-pink-300">
        {number}
      </div>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/40">
        {text}
      </p>

    </div>
  );
}