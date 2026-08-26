import Link from "next/link";

const properties = [
  {
    title: "The Palm Residence",
    location: "Banjara Hills, Hyderabad",
    price: "₹4.8 Cr",
    type: "4 BHK Villa",
    icon: "🏡",
  },
  {
    title: "Skyline 42",
    location: "Madhapur, Hyderabad",
    price: "₹2.35 Cr",
    type: "3 BHK Apartment",
    icon: "🏢",
  },
  {
    title: "Lakeview House",
    location: "Kondapur, Hyderabad",
    price: "₹3.1 Cr",
    type: "4 BHK Residence",
    icon: "🏠",
  },
];

export default function RealEstateTemplate() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#20231f]">

      {/* TOP BAR */}
      <div className="bg-[#20231f] px-6 py-3 text-center text-xs tracking-wide text-white/70">
        PRIVATE PROPERTY COLLECTION · SCHEDULE A VIEWING
      </div>


      {/* NAVBAR */}
      <nav className="mx-auto max-w-7xl px-6 py-7">

        <div className="flex items-center justify-between border-b border-[#20231f]/15 pb-6">

          <Link
            href="/website"
            className="font-serif text-2xl tracking-tight"
          >
            AURELIA
            <span className="ml-2 text-xs tracking-[0.25em] text-[#8c7654]">
              ESTATES
            </span>
          </Link>


          <div className="hidden items-center gap-9 text-sm md:flex">

            <a href="#properties" className="hover:text-[#8c7654]">
              Properties
            </a>

            <a href="#about" className="hover:text-[#8c7654]">
              About
            </a>

            <a href="#services" className="hover:text-[#8c7654]">
              Services
            </a>

            <a href="#contact" className="hover:text-[#8c7654]">
              Contact
            </a>

          </div>


          <a
            href="#contact"
            className="border border-[#20231f] px-5 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#20231f] hover:text-white"
          >
            Enquire
          </a>

        </div>

      </nav>


      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12">

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c7654]">
              Luxury Property Advisory
            </p>

            <h1 className="mt-7 font-serif text-6xl leading-[0.95] md:text-8xl">

              Find a place
              <br />

              <span className="italic text-[#8c7654]">
                worth calling home.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#20231f]/55">
              Curated residences, exceptional locations and personalised
              property advisory for buyers looking for something different.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#properties"
                className="bg-[#20231f] px-7 py-4 text-sm text-white"
              >
                Explore Properties
              </a>

              <a
                href="#contact"
                className="border border-[#20231f]/20 px-7 py-4 text-sm"
              >
                Book a Consultation
              </a>

            </div>

          </div>


          {/* HERO PROPERTY */}
          <div className="relative min-h-[560px] overflow-hidden bg-[#c9c0af]">

            <div className="absolute inset-7 border border-white/30" />

            <div className="absolute inset-x-12 bottom-12 top-12 bg-[#8d806d]">

              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-12 left-10 text-white">

                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Featured Residence
                </p>

                <h2 className="mt-3 font-serif text-4xl">
                  The Palm Residence
                </h2>

                <p className="mt-2 text-sm text-white/60">
                  Hyderabad · 4 BHK · Private Garden
                </p>

              </div>

            </div>

            <div className="absolute right-10 top-10 text-5xl">
              🏡
            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}
      <section
        id="about"
        className="border-y border-[#20231f]/10 bg-white"
      >

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#8c7654]">
            A Different Approach
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            Property is more than
            <br />
            <span className="italic">
              four walls.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#20231f]/50">
            We carefully select properties based on location, architecture,
            quality and long-term value — then guide you through every step
            of the buying process.
          </p>

        </div>

      </section>


      {/* PROPERTIES */}
      <section
        id="properties"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-[#8c7654]">
              Featured Collection
            </p>

            <h2 className="mt-4 font-serif text-5xl">
              Selected properties
            </h2>

          </div>

          <span className="text-sm text-[#20231f]/40">
            Hyderabad · 2026 Collection
          </span>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {properties.map((property) => (

            <Property
              key={property.title}
              title={property.title}
              location={property.location}
              price={property.price}
              type={property.type}
              icon={property.icon}
            />

          ))}

        </div>

      </section>


      {/* PROPERTY SEARCH */}
      <section className="bg-[#20231f] text-white">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-xs uppercase tracking-[0.3em] text-[#b9a17c]">
            Find Your Property
          </p>

          <h2 className="mt-4 font-serif text-5xl">
            What are you looking for?
          </h2>

          <div className="mt-10 grid gap-3 md:grid-cols-4">

            <SearchBox text="Property Type" />
            <SearchBox text="Location" />
            <SearchBox text="Budget" />

            <button className="bg-[#b9a17c] px-6 py-4 text-sm font-semibold text-[#20231f]">
              Search Properties
            </button>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="grid gap-10 md:grid-cols-3">

          <div className="md:col-span-1">

            <p className="text-xs uppercase tracking-[0.3em] text-[#8c7654]">
              Our Services
            </p>

            <h2 className="mt-5 font-serif text-5xl">
              Personal
              <br />
              guidance.
            </h2>

          </div>


          <div className="space-y-0 md:col-span-2">

            <Service
              number="01"
              title="Property Acquisition"
              text="We identify properties that match your lifestyle, requirements and investment goals."
            />

            <Service
              number="02"
              title="Private Viewings"
              text="Arrange personalised property tours around your schedule."
            />

            <Service
              number="03"
              title="Investment Advisory"
              text="Understand location, market potential and long-term property value."
            />

          </div>

        </div>

      </section>


      {/* CTA */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-24"
      >

        <div className="bg-[#d9d0bf] p-10 md:p-16">

          <p className="text-xs uppercase tracking-[0.3em] text-[#8c7654]">
            Private Consultation
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Let's find somewhere
            <br />
            <span className="italic">
              extraordinary.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-[#20231f]/50">
            Tell us what you're looking for and our property advisors
            will help you find the right opportunity.
          </p>

          <a
            href="mailto:YOUR-EMAIL@example.com"
            className="mt-8 inline-block bg-[#20231f] px-8 py-4 text-sm text-white"
          >
            Request a Consultation →
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-[#20231f]/10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-[#20231f]/40 md:flex-row">

          <div className="font-serif text-lg text-[#20231f]">
            AURELIA ESTATES
          </div>

          <div>
            © 2026 Real Estate Template
          </div>

        </div>

      </footer>

    </main>
  );
}


function Property({
  title,
  location,
  price,
  type,
  icon,
}: {
  title: string;
  location: string;
  price: string;
  type: string;
  icon: string;
}) {
  return (
    <article className="group">

      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#d9d0bf]">

        <div className="absolute inset-5 border border-white/30" />

        <div className="text-7xl transition duration-500 group-hover:scale-110">
          {icon}
        </div>

        <div className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-white/70">
          Featured Property
        </div>

      </div>

      <div className="border-b border-[#20231f]/15 py-6">

        <div className="flex items-start justify-between gap-4">

          <div>

            <h3 className="font-serif text-2xl">
              {title}
            </h3>

            <p className="mt-2 text-sm text-[#20231f]/45">
              {location}
            </p>

          </div>

          <div className="text-right">

            <div className="font-semibold">
              {price}
            </div>

            <div className="mt-1 text-xs text-[#20231f]/40">
              {type}
            </div>

          </div>

        </div>

        <button className="mt-5 text-sm font-semibold text-[#8c7654]">
          View Property →
        </button>

      </div>

    </article>
  );
}


function SearchBox({ text }: { text: string }) {
  return (
    <button className="flex items-center justify-between border border-white/15 px-5 py-4 text-left text-sm text-white/60">
      {text}
      <span>⌄</span>
    </button>
  );
}


function Service({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-[#20231f]/15 py-7">

      <div className="grid gap-4 md:grid-cols-[80px_1fr_1fr]">

        <div className="text-sm text-[#8c7654]">
          {number}
        </div>

        <h3 className="font-serif text-2xl">
          {title}
        </h3>

        <p className="text-sm leading-7 text-[#20231f]/45">
          {text}
        </p>

      </div>

    </div>
  );
}