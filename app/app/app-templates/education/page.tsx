import Link from "next/link";

export default function Education() {
  return (
    <main className="min-h-screen bg-[#05050d] text-white">

      {/* NAVBAR */}
      <nav className="mx-auto max-w-7xl px-5 pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.05] px-6 py-4 backdrop-blur-xl">

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

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 py-24">

        <div className="max-w-3xl">

          <div className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-200">
            🎓 Education App
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Learn anything.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Anywhere.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            A modern education application concept for schools, colleges,
            coaching centres, teachers and online course businesses.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-block rounded-full bg-white px-7 py-3 font-medium text-black hover:bg-white/80"
          >
            Request This Design →
          </a>

        </div>

        {/* APP PREVIEWS */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <EducationPhone
            title="My Courses"
            icon="📚"
            value="12"
            label="Active Courses"
          />

          <EducationPhone
            title="Today's Lesson"
            icon="🎓"
            value="85%"
            label="Completed"
          />

          <EducationPhone
            title="My Progress"
            icon="📈"
            value="92"
            label="Learning Score"
          />

        </div>

        {/* PERFECT FOR */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">

          <h2 className="text-3xl font-bold">
            Perfect for
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <Box text="Schools & Colleges" />
            <Box text="Coaching Centres" />
            <Box text="Online Courses" />

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 pb-24"
      >

        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-10 text-center md:p-14">

          <div className="text-sm uppercase tracking-widest text-blue-300">
            Education App
          </div>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Want an app like this?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/40">
            We can customise the design, courses, student dashboard,
            payments and features around your education business.
          </p>

          <a
            href="mailto:threedesigner01@gmail.com"
            className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-medium text-black"
          >
            Contact Us
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

function EducationPhone({
  title,
  icon,
  value,
  label,
}: {
  title: string;
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[35px] border border-white/10 bg-white/[0.03] p-8">

      <div className="mx-auto max-w-[240px] rounded-[35px] border border-white/15 bg-[#0b0b13] p-4 shadow-2xl">

        <div className="flex justify-between text-xs text-white/30">
          <span>9:41</span>
          <span>● ● ●</span>
        </div>

        <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-500/25 to-cyan-500/20 p-7">

          <div className="text-4xl">
            {icon}
          </div>

          <div className="mt-5 text-sm text-white/50">
            {title}
          </div>

          <div className="mt-3 text-4xl font-bold">
            {value}
          </div>

          <div className="mt-2 text-xs text-white/40">
            {label}
          </div>

        </div>

        <div className="mt-4 h-3 rounded-full bg-white/10" />

        <div className="mt-3 h-3 w-2/3 rounded-full bg-white/10" />

        <div className="mt-5 grid grid-cols-2 gap-3">

          <div className="h-16 rounded-2xl bg-white/10" />
          <div className="h-16 rounded-2xl bg-white/10" />

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