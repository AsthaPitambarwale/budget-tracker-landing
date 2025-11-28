"use client";

import { useState, useEffect } from "react";

const testimonials = [
  { name: "Aisha", text: "Saved ₹12,000 in 3 months — the goal badges kept me motivated!" },
  { name: "Ravi", text: "Simple and colorful — I finally stopped overspending on food." },
  { name: "Meera", text: "Perfect for quick checks and easy budgeting on the go." },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="mt-20 mb-24 relative px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
        What Early Users Say
      </h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
        See how our users are achieving their goals and saving smarter.
      </p>

      <div className="mt-10 flex flex-col items-center">
        {/* Testimonial Card */}
        <div className="relative max-w-xl w-full">
          <div className="p-8 bg-gradient-to-br from-pink-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105">
            <p className="text-slate-900 dark:text-white text-lg">“{testimonials[current].text}”</p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-300 font-semibold text-right">
              — {testimonials[current].name}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2">
            <button
              onClick={prev}
              className="p-2 bg-white dark:bg-slate-700 rounded-full shadow hover:bg-slate-100 dark:hover:bg-slate-600 transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="p-2 bg-white dark:bg-slate-700 rounded-full shadow hover:bg-slate-100 dark:hover:bg-slate-600 transition"
            >
              ›
            </button>
          </div>
        </div>

        {/* Dots Indicators */}
        <div className="mt-6 flex gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${idx === current ? "bg-pink-500 dark:bg-pink-400" : "bg-slate-300 dark:bg-slate-500"}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
