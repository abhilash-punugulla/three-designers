"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState(false);

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

          {/* Desktop */}
          <div className="hidden items-center gap-2 md:flex">
            <Link href="/" className="rounded-full bg-white/10 px-5 py-2 text-sm">
              Home
            </Link>

            <Link href="/app" className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white">
              App
            </Link>

            <Link href="/website" className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white">
              Website
            </Link>

            <Link href="/web-app" className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white">
              Web + App
            </Link>

            <Link href="/social-media" className="rounded-full px-5 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white">
              Social Media
            </Link>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 bg-white/[0.05] px-5 py-2 text-sm hover:bg-white/10 md:block"
          >
            Contact Us
          </a>

          {/* Mobile button */}
          <button
            onClick={() => setMenu(!menu)}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 md:hidden"
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menu && (
          <div className="mt-3 rounded-3xl border border-white/10 bg-[#11111a] p-4 md:hidden">

            <Link href="/" className="block rounded-xl px-4 py-3 hover:bg-white/10">
              Home
            </Link>

            <Link href="/app" className="block rounded-xl px-4 py-3 hover:bg-white/10">
              App
            </Link>

            <Link href="/website" className="block rounded-xl px-4 py-3 hover:bg-white/10">
              Website
            </Link>

            <Link href="/web-app" className="block rounded-xl px-4 py-3 hover:bg-white/10">
              Web + App
            </Link>

            <Link href="/social-media" className="block rounded-xl px-4 py-3 hover:bg-white/10">
              Social Media
            </Link>

            <a
              href="#contact"
              className="mt-2 block rounded-xl bg-white/10 px-4 py-3 text-center"
            >
              Contact Us
            </a>

          </div>
        )}
      </nav>


      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-28 lg:grid-cols-2">

        <div>

          <div className="mb-7 inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-200">
            ✨ Digital Solutions For Modern Businesses
          </div>

          <h1 className="text-6xl font-bold leading-[1.05] md:text-8xl">
            We Design.
            <br />
            We Build.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              You Grow.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">
            Three Designers creates modern websites, mobile applications
            and social media solutions for businesses, creators and new brands.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <Link
              href="/app"
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-3 text-2xl">📱</div>
              <div className="font-semibold">App</div>
              <div className="mt-1 text-sm text-white/40">
                Modern mobile apps
              </div>
            </Link>

            <Link
              href="/website"
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-3 text-2xl">🌐</div>
              <div className="font-semibold">Website</div>
              <div className="mt-1 text-sm text-white/40">
                Modern business websites
              </div>
            </Link>

            <Link
              href="/web-app"
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-3 text-2xl">⚡</div>
              <div className="font-semibold">Web + App</div>
              <div className="mt-1 text-sm text-white/40">
                Complete digital presence
              </div>
            </Link>

            <Link
              href="/social-media"
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-3 text-2xl">📲</div>
              <div className="font-semibold">Social Media</div>
              <div className="mt-1 text-sm text-white/40">
                Content and management
              </div>
            </Link>

          </div>

        </div>


        {/* VISUAL */}
        <div className="relative flex justify-center">

          <div className="relative h-[430px] w-[350px] rounded-[45px] border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xl">

            <div className="absolute left-8 top-10 h-28 w-28 rounded-3xl bg-gradient-to-br from-blue-500/50 to-purple-500/30 blur-[1px]" />

            <div className="absolute right-8 top-24 h-32 w-32 rounded-3xl bg-gradient-to-br from-pink-500/40 to-purple-500/30" />

            <div className="absolute bottom-28 left-12 h-32 w-32 rounded-3xl bg-gradient-to-br from-purple-500/50 to-blue-500/30" />

            <div className="absolute bottom-16 right-12 h-28 w-28 rounded-3xl bg-gradient-to-br from-pink-500/40 to-purple-500/40" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-xl">
              <div className="font-semibold">
                Creating Digital Experiences
              </div>

              <div className="mt-1 text-sm text-white/40">
                That People Love.
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-5 py-20">

        <div className="rounded-[35px] border border-white/10 bg-white/[0.03] p-8 md:p-14">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <div className="text-sm font-medium uppercase tracking-widest text-purple-300">
                Why Three Designers
              </div>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Simple ideas.
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Modern execution.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-white/40">
                We focus on creating clean, modern and useful digital
                experiences without making things unnecessarily complicated.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <div className="text-2xl">✦</div>
                <h3 className="mt-5 font-semibold">Modern Design</h3>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Clean interfaces with a premium visual style.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <div className="text-2xl">⚡</div>
                <h3 className="mt-5 font-semibold">Fast & Responsive</h3>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Designed to work across phones, tablets and computers.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <div className="text-2xl">◎</div>
                <h3 className="mt-5 font-semibold">Business Focused</h3>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Every design is created around your business goals.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <div className="text-2xl">↗</div>
                <h3 className="mt-5 font-semibold">Built To Grow</h3>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Solutions that can evolve as your business grows.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PACKAGES */}
      <section className="mx-auto max-w-7xl px-5 py-20">

        <div className="text-center">

          <div className="text-sm uppercase tracking-widest text-purple-300">
            Our Packages
          </div>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Start with what{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              you need.
            </span>
          </h2>

          <p className="mt-5 text-white/40">
            Simple packages for businesses at different stages.
          </p>

        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <Package
            icon="📱"
            title="App"
            price="From ₹19,999"
            text="Mobile applications for your business."
            link="/app"
          />

          <Package
            icon="🌐"
            title="Website"
            price="From ₹2,999"
            text="Modern websites for your business."
            link="/website"
          />

          <Package
            icon="✦"
            title="Social Media"
            price="From ₹1,999"
            text="Content and social media management."
            link="/social-media"
          />

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 py-20"
      >

        <div className="rounded-[35px] border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/5 p-10 text-center md:p-16">

          <div className="text-sm uppercase tracking-widest text-purple-300">
            Let's Work Together
          </div>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Have an idea?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/40">
            Tell us what you want to build and we can discuss the right
            solution for your business.
          </p>

          <div className="mt-8">
            <a
              href="https://wa.me/+919951497458"
              className="inline-block rounded-full border border-white/20 bg-white/10 px-8 py-4 hover:bg-white/20"
            >
              Contact Three Designers →
            </a>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 text-sm text-white/40 md:flex-row">

          <div>
            © 2026 Three Designers. All rights reserved.
          </div>

          <div className="flex gap-6">

            <Link href="/app" className="hover:text-white">
              App
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


function Package({
  icon,
  title,
  price,
  text,
  link,
}: {
  icon: string;
  title: string;
  price: string;
  text: string;
  link: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]">

      <div className="text-3xl">{icon}</div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-white/40">
        {text}
      </p>

      <div className="mt-7 text-3xl font-bold">
        {price}
      </div>

      <Link
        href={link}
        className="mt-7 block rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center hover:bg-white/20"
      >
        View Package →
      </Link>

    </div>
  );
}