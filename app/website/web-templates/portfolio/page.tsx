import Link from "next/link";

export default function PortfolioTemplate() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#f5f5f5]">

      {/* NAVBAR */}
      <nav className="mx-auto max-w-7xl px-6 py-6">

        <div className="flex items-center justify-between border-b border-white/10 pb-5">

          <Link
            href="/website"
            className="text-xl font-black tracking-tight"
          >
            ALEX<span className="text-lime-400">.</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#work" className="hover:text-white">
              Work
            </a>

            <a href="#about" className="hover:text-white">
              About
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-black hover:bg-lime-300"
          >
            Let's Talk
          </a>

        </div>

      </nav>


      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-20">

        <div className="grid items-end gap-12 lg:grid-cols-2">

          <div>

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-lime-400">
              Independent Designer
            </p>

            <h1 className="mt-7 text-7xl font-black leading-[0.82] tracking-[-0.06em] md:text-9xl">

              DESIGN
              <br />

              THAT
              <br />

              <span className="text-lime-400">
                MOVES.
              </span>

            </h1>

          </div>


          <div className="lg:pb-3">

            <p className="max-w-lg text-lg leading-8 text-white/50">
              I create digital experiences, visual identities and products
              for ambitious brands that want to stand out.
            </p>

            <div className="mt-8 flex items-center gap-4">

              <a
                href="#work"
                className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black"
              >
                View My Work ↓
              </a>

              <span className="text-sm text-white/30">
                Available for projects
              </span>

            </div>

          </div>

        </div>


        {/* BIG CREATIVE VISUAL */}
        <div className="mt-20 grid gap-5 md:grid-cols-12">

          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-lime-400 md:col-span-7">

            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[60px] border-black/10" />

            <div className="absolute bottom-8 left-8 text-black">

              <div className="text-xs font-bold uppercase tracking-widest">
                Selected Identity
              </div>

              <div className="mt-3 text-5xl font-black tracking-tight">
                FORM / 01
              </div>

            </div>

            <div className="text-[110px] font-black leading-none tracking-[-0.08em] text-black md:text-[160px]">
              A
            </div>

          </div>


          <div className="grid min-h-[420px] bg-[#242424] p-8 md:col-span-5">

            <div className="flex items-start justify-between">

              <span className="text-xs text-white/30">
                PROJECT
              </span>

              <span className="text-xs text-white/30">
                01 — 04
              </span>

            </div>

            <div className="self-end">

              <h2 className="text-4xl font-bold">
                Brand
                <br />
                Identity
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/40">
                Strategy, identity and digital direction for a
                contemporary brand.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-white/10 bg-[#181818]"
      >

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-12 md:grid-cols-3">

            <div className="text-sm uppercase tracking-[0.2em] text-lime-400">
              About
            </div>

            <div className="md:col-span-2">

              <p className="text-3xl font-medium leading-tight md:text-5xl">
                I believe great design should be{" "}
                <span className="text-lime-400">
                  simple, memorable and useful.
                </span>
              </p>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/40">
                From early concepts to finished digital products, I work
                closely with brands to create work that looks distinctive
                and communicates clearly.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* WORK */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-28"
      >

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-lime-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
              PROJECTS
            </h2>

          </div>

          <p className="max-w-sm text-sm leading-6 text-white/30">
            A selection of branding, digital products and creative
            projects.
          </p>

        </div>


        <div className="mt-14 grid gap-5 md:grid-cols-2">

          <Project
            number="01"
            title="NOVA"
            category="Brand Identity"
            large
          />

          <Project
            number="02"
            title="STUDIO 24"
            category="Digital Experience"
          />

          <Project
            number="03"
            title="MONO"
            category="Creative Direction"
          />

          <Project
            number="04"
            title="FRAME"
            category="Web Design"
            large
          />

        </div>

      </section>


      {/* SERVICES */}
      <section className="bg-lime-400 text-black">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="text-sm font-bold uppercase tracking-[0.2em]">
            Services
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black leading-none tracking-tight md:text-7xl">
            FROM IDEA
            <br />
            TO FINAL
            <br />
            PIXEL.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-3">

            <Service
              number="01"
              title="Brand Identity"
            />

            <Service
              number="02"
              title="Web Design"
            />

            <Service
              number="03"
              title="Creative Direction"
            />

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-28"
      >

        <div className="max-w-4xl">

          <p className="text-sm uppercase tracking-[0.2em] text-lime-400">
            Start a Project
          </p>

          <h2 className="mt-6 text-6xl font-black leading-none tracking-tight md:text-8xl">
            HAVE AN
            <br />
            IDEA?
            <br />
            <span className="text-lime-400">
              LET'S TALK.
            </span>
          </h2>

          <a
            href="mailto:YOUR-EMAIL@example.com"
            className="mt-10 inline-block rounded-full bg-lime-400 px-8 py-4 font-semibold text-black"
          >
            Start a Conversation →
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl justify-between px-6 py-8 text-sm text-white/30">

          <div>
            ALEX.
          </div>

          <div>
            © 2026 Portfolio Template
          </div>

        </div>

      </footer>

    </main>
  );
}


function Project({
  number,
  title,
  category,
  large,
}: {
  number: string;
  title: string;
  category: string;
  large?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden bg-[#222] ${
        large ? "min-h-[520px]" : "min-h-[400px]"
      }`}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />

      <div className="absolute right-10 top-10 text-8xl font-black text-white/[0.04]">
        {number}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8">

        <div className="text-xs uppercase tracking-[0.2em] text-lime-400">
          {category}
        </div>

        <h3 className="mt-3 text-5xl font-black tracking-tight">
          {title}
        </h3>

        <div className="mt-6 inline-block rounded-full border border-white/20 px-5 py-2 text-sm text-white/50 transition group-hover:border-lime-400 group-hover:text-lime-400">
          View Project →
        </div>

      </div>

    </div>
  );
}


function Service({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="border border-black/15 p-6">

      <div className="text-sm font-bold">
        {number}
      </div>

      <div className="mt-12 text-2xl font-bold">
        {title}
      </div>

    </div>
  );
}