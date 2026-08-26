import Link from "next/link";

export default function BusinessTemplate() {
  return (
    <main className="min-h-screen bg-[#05050d] text-white">

      {/* NAVBAR */}
      <nav className="mx-auto max-w-7xl px-5 pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.05] px-6 py-4 backdrop-blur-xl">

          <Link href="/website" className="text-xl font-bold leading-5">
            three
            <br />
            <span className="text-white/40">designers</span>
          </Link>

          <Link
            href="/website"
            className="rounded-full border border-white/15 px-5 py-2 text-sm hover:bg-white/10"
          >
            ← Back to Websites
          </Link>

        </div>
      </nav>


      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 py-24">

        <div className="max-w-4xl">

          <div className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-200">
            💼 Business Website
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

            Build trust.
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Grow your business.
            </span>

          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            A professional business website concept designed to present
            your company, services and brand with confidence.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-block rounded-full bg-white px-7 py-3 font-medium text-black hover:bg-white/80"
          >
            Request This Website →
          </a>

        </div>


        {/* WEBSITE PREVIEW */}
        <div className="mt-20 overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] p-4 shadow-2xl md:p-6">

          <div className="overflow-hidden rounded-[25px] border border-white/10 bg-[#0b0b13]">

            {/* Browser */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />

              <div className="ml-4 h-7 flex-1 rounded-full bg-white/5" />

            </div>


            {/* Website */}
            <div className="grid min-h-[500px] lg:grid-cols-2">

              <div className="flex flex-col justify-center p-8 md:p-14">

                <div className="text-sm text-blue-300">
                  YOUR COMPANY
                </div>

                <h2 className="mt-5 text-4xl font-bold md:text-6xl">
                  We help businesses
                  <span className="text-blue-400">
                    {" "}move forward.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/40">
                  A clean and professional digital presence designed
                  to communicate your value clearly.
                </p>

                <div className="mt-7 flex gap-3">

                  <div className="rounded-full bg-white px-5 py-3 text-xs font-medium text-black">
                    Get Started
                  </div>

                  <div className="rounded-full border border-white/10 px-5 py-3 text-xs">
                    Learn More
                  </div>

                </div>

              </div>


              <div className="relative min-h-[350px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/10">

                <div className="absolute left-12 top-16 h-40 w-40 rounded-[35px] bg-blue-500/30 blur-2xl" />

                <div className="absolute right-16 top-28 h-48 w-48 rounded-[40px] bg-purple-500/30" />

                <div className="absolute bottom-16 left-20 h-32 w-52 rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl" />

              </div>

            </div>

          </div>

        </div>


        {/* FEATURES */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">

          <Feature
            icon="🏢"
            title="Professional"
            text="A strong online presence for your company."
          />

          <Feature
            icon="📈"
            title="Business Focused"
            text="Designed to present your services and convert visitors."
          />

          <Feature
            icon="📱"
            title="Responsive"
            text="Looks great across phones, tablets and desktops."
          />

        </div>

      </section>


      {/* SECTIONS */}
      <section className="mx-auto max-w-7xl px-5 pb-24">

        <div className="rounded-[35px] border border-white/10 bg-white/[0.03] p-8 md:p-12">

          <div className="text-sm uppercase tracking-widest text-blue-300">
            Included Sections
          </div>

          <h2 className="mt-4 text-4xl font-bold">
            Everything your business needs.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            <Box title="Hero Section" />
            <Box title="About Company" />
            <Box title="Services" />
            <Box title="Why Choose Us" />
            <Box title="Testimonials" />
            <Box title="Contact Section" />

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-5 pb-24">

        <div className="rounded-[35px] border border-blue-500/20 bg-blue-500/[0.05] p-10 text-center md:p-16">

          <div className="text-sm uppercase tracking-widest text-blue-300">
            Business Website
          </div>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Want this design?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            We can customise the colours, content, sections and branding
            for your business.
          </p>

          <a
            href="mailto:YOUR-EMAIL@example.com"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-medium text-black hover:bg-white/80"
          >
            Request This Website →
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-8 text-center text-sm text-white/40">
          © 2026 Three Designers
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

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/40">
        {text}
      </p>

    </div>
  );
}


function Box({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white/60">
      ✓ {title}
    </div>
  );
}