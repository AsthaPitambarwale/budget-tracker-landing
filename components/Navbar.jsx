"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-pink-600">
          BudgetBuddy
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center text-slate-700 font-semibold">
          <a href="#features" className="hover:text-pink-600 transition">Features</a>
          <a href="#pricing" className="hover:text-pink-600 transition">Pricing</a>
          <a href="#testimonials" className="hover:text-pink-600 transition">Testimonials</a>
          <a href="#contact" className="hover:text-pink-600 transition">Contact</a>
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex">
          <a
            href="#pricing"
            className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-yellow-500 text-white font-semibold shadow hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 transition"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-white shadow-md w-full px-6 py-4 flex flex-col gap-3">
          <a href="#features" className="hover:text-pink-600 transition" onClick={() => setOpen(false)}>Features</a>
          <a href="#pricing" className="hover:text-pink-600 transition" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#testimonials" className="hover:text-pink-600 transition" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#contact" className="hover:text-pink-600 transition" onClick={() => setOpen(false)}>Contact</a>
          <a
            href="#pricing"
            className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-yellow-500 text-white font-semibold shadow hover:opacity-90 transition text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}
