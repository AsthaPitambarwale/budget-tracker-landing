"use client";

const items = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Smart Categorization",
    desc: "Automatically groups every transaction so you instantly know where your money goes."
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m8-8h2M2 12h2m12.364-6.364l1.414 1.414M4.222 19.778l1.414-1.414M19.778 19.778l-1.414-1.414M4.222 4.222l1.414 1.414" />
      </svg>
    ),
    title: "Goal-Based Saving",
    desc: "Create saving goals with fun progress visuals and track achievements effortlessly."
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-pink-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Friendly Insights",
    desc: "Simple, guilt-free suggestions to help reduce unnecessary spending."
  }
];

export default function Features() {
  return (
    <section id="features" className="mt-28 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
        Powerful Features, Simple Experience
      </h2>

      <p className="mt-3 text-slate-600 dark:text-slate-300 text-center max-w-xl mx-auto">
        Everything you need to track money effortlessly — beautifully designed with clarity in mind.
      </p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
          >
            <div className="mb-5 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
              {it.icon}
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-white text-center">
              {it.title}
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-center leading-relaxed">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
