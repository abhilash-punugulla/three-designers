import Link from "next/link";

const courses = [
  {
    title: "Business & Management",
    category: "Business",
    icon: "📊",
    lessons: "24 Lessons",
  },
  {
    title: "Computer Science",
    category: "Technology",
    icon: "💻",
    lessons: "32 Lessons",
  },
  {
    title: "Digital Marketing",
    category: "Marketing",
    icon: "📣",
    lessons: "18 Lessons",
  },
  {
    title: "Design Fundamentals",
    category: "Creative",
    icon: "✏️",
    lessons: "21 Lessons",
  },
];

export default function EducationTemplate() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#172033]">

      {/* NAVBAR */}
      <nav className="border-b border-[#172033]/10 bg-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex h-20 items-center justify-between">

            <Link
              href="/website"
              className="text-2xl font-bold tracking-tight"
            >
              EDU<span className="text-blue-600">POINT</span>
            </Link>

            <div className="hidden items-center gap-8 text-sm md:flex">

              <a href="#courses" className="hover:text-blue-600">
                Courses
              </a>

              <a href="#about" className="hover:text-blue-600">
                About
              </a>

              <a href="#faculty" className="hover:text-blue-600">
                Faculty
              </a>

              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>

            </div>

            <a
              href="#courses"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Explore Courses
            </a>

          </div>

        </div>

      </nav>


      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              LEARN · GROW · ACHIEVE
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-[-0.04em] md:text-7xl">

              Education that
              <br />

              <span className="text-blue-600">
                moves you forward.
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#172033]/55">
              Learn practical skills from experienced educators and
              industry professionals through flexible online programs.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#courses"
                className="rounded-lg bg-[#172033] px-7 py-4 text-sm font-semibold text-white hover:bg-[#26334a]"
              >
                Browse Courses
              </a>

              <a
                href="#about"
                className="rounded-lg border border-[#172033]/15 bg-white px-7 py-4 text-sm font-semibold hover:bg-[#f1f3f7]"
              >
                Why EduPoint?
              </a>

            </div>

          </div>


          {/* HERO VISUAL */}
          <div className="relative">

            <div className="rounded-[32px] bg-[#172033] p-5 shadow-2xl">

              <div className="rounded-[22px] bg-white p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs text-[#172033]/40">
                      STUDENT DASHBOARD
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      Welcome back, Alex
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-xl">
                    👨‍🎓
                  </div>

                </div>


                <div className="mt-7 rounded-2xl bg-blue-600 p-6 text-white">

                  <div className="text-xs text-white/60">
                    CURRENT COURSE
                  </div>

                  <div className="mt-2 text-2xl font-bold">
                    Digital Marketing
                  </div>

                  <div className="mt-5 h-2 rounded-full bg-white/20">

                    <div className="h-2 w-[72%] rounded-full bg-white" />

                  </div>

                  <div className="mt-2 text-xs text-white/60">
                    72% completed
                  </div>

                </div>


                <div className="mt-5 grid grid-cols-2 gap-4">

                  <DashboardBox
                    number="12"
                    label="Courses"
                  />

                  <DashboardBox
                    number="86%"
                    label="Average Score"
                  />

                </div>

              </div>

            </div>


            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-5 shadow-xl md:block">

              <div className="text-xs text-[#172033]/40">
                STUDENTS
              </div>

              <div className="mt-1 text-2xl font-bold">
                10,000+
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="bg-[#172033] text-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-14 md:grid-cols-4">

          <Stat number="10K+" label="Students" />
          <Stat number="120+" label="Courses" />
          <Stat number="45" label="Expert Faculty" />
          <Stat number="96%" label="Completion Rate" />

        </div>

      </section>


      {/* COURSES */}
      <section
        id="courses"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Learn Something New
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Popular courses
            </h2>

          </div>

          <a
            href="#courses"
            className="text-sm font-semibold text-blue-600"
          >
            View all courses →
          </a>

        </div>


        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {courses.map((course) => (

            <Course
              key={course.title}
              title={course.title}
              category={course.category}
              icon={course.icon}
              lessons={course.lessons}
            />

          ))}

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#eaf1ff]"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Why EduPoint
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Learning should be practical, accessible and rewarding.
            </h2>

          </div>

          <div className="space-y-5 text-[#172033]/55">

            <p className="leading-8">
              Our programs combine structured lessons with practical
              projects so students can apply what they learn.
            </p>

            <p className="leading-8">
              Whether you're starting a new career, developing a skill
              or preparing for your next opportunity, our platform helps
              you learn at your own pace.
            </p>

          </div>

        </div>

      </section>


      {/* FACULTY */}
      <section
        id="faculty"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Learn From Experts
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Meet our faculty
          </h2>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <Faculty
            icon="👩‍💻"
            name="Sarah Mitchell"
            role="Technology"
          />

          <Faculty
            icon="👨‍🏫"
            name="David Wilson"
            role="Business & Strategy"
          />

          <Faculty
            icon="👩‍🎨"
            name="Maya Patel"
            role="Design & Creative"
          />

        </div>

      </section>


      {/* CTA */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-24"
      >

        <div className="rounded-[32px] bg-blue-600 px-8 py-16 text-center text-white md:px-16">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
            Start Learning
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold md:text-6xl">
            Your next skill could change your career.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100">
            Discover courses designed to help you build practical,
            career-ready skills.
          </p>

          <a
            href="mailto:YOUR-EMAIL@example.com"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-sm font-semibold text-blue-600 hover:bg-blue-50"
          >
            Get Started →
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-[#172033]/10 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-[#172033]/40 md:flex-row">

          <div className="font-bold text-[#172033]">
            EDUPOINT
          </div>

          <div>
            © 2026 Education Template
          </div>

        </div>

      </footer>

    </main>
  );
}


function DashboardBox({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-[#f4f6fa] p-4">

      <div className="text-2xl font-bold">
        {number}
      </div>

      <div className="mt-1 text-xs text-[#172033]/40">
        {label}
      </div>

    </div>
  );
}


function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="border-r border-white/10 px-5 py-5 text-center last:border-r-0">

      <div className="text-3xl font-bold md:text-4xl">
        {number}
      </div>

      <div className="mt-2 text-xs text-white/40">
        {label}
      </div>

    </div>
  );
}


function Course({
  title,
  category,
  icon,
  lessons,
}: {
  title: string;
  category: string;
  icon: string;
  lessons: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#172033]/10 bg-white transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex h-44 items-center justify-center bg-[#eaf1ff] text-6xl">
        {icon}
      </div>

      <div className="p-5">

        <div className="text-xs font-semibold text-blue-600">
          {category}
        </div>

        <h3 className="mt-2 font-bold leading-6">
          {title}
        </h3>

        <div className="mt-5 flex justify-between text-xs text-[#172033]/40">
          <span>{lessons}</span>
          <span>Online</span>
        </div>

        <button className="mt-5 w-full rounded-lg bg-[#172033] py-3 text-xs font-semibold text-white transition group-hover:bg-blue-600">
          View Course
        </button>

      </div>

    </div>
  );
}


function Faculty({
  icon,
  name,
  role,
}: {
  icon: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-[#172033]/10 bg-white p-6">

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1ff] text-3xl">
        {icon}
      </div>

      <div>

        <h3 className="font-bold">
          {name}
        </h3>

        <p className="mt-1 text-sm text-[#172033]/40">
          {role}
        </p>

      </div>

    </div>
  );
}