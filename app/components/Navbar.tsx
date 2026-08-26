"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "App", href: "/app" },
    { name: "Website", href: "/website" },
    { name: "Web + App", href: "/web-app" },
    { name: "Social Media", href: "/social-media" },
  ];

  return (
    <header className="mx-auto max-w-7xl px-5 pt-5">
      <nav className="relative flex items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 backdrop-blur-xl">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="leading-[0.85]"
        >
          <span className="text-xl font-bold">three</span>
          <br />
          <span className="text-xl font-bold text-white/50">
            designers
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-1 md:flex">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* DESKTOP CONTACT */}
        <a
          href="#contact"
          className="hidden rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm hover:bg-white/15 md:block"
        >
          Contact Us
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-xl md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute left-0 right-0 top-[70px] z-50 rounded-3xl border border-white/10 bg-[#0c0c15]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden">

            <div className="flex flex-col gap-1">

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-5 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm hover:bg-white/20"
              >
                Contact Us
              </a>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
}