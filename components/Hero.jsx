"use client";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-100 via-pink-100/60 to-white overflow-hidden py-24">

      {/* Background Glow / Floating Blobs */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 blur-3xl rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-200 blur-3xl rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-14">

        {/* TEXT SECTION */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 tracking-tight">
            BudgetBuddy —  
            <span className="gradient-text bg-gradient-to-r from-pink-600 to-yellow-600">
              Make every rupee count
            </span>
          </h1>

          <p className="text-lg text-slate-700 max-w-xl leading-relaxed">
            Track your expenses, build money habits, and reach your saving goals —
            all with a clean, friendly, and joyful interface.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-600 to-yellow-500 text-white font-semibold shadow-xl hover-scale animate-glow"
            >
              Get Started — Free
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-300 bg-white text-slate-800 font-semibold hover-scale"
            >
              Learn More
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-lg animate-float">
                ⭐
              </div>
              <p className="text-sm text-slate-600">4.8/5 — Loved by early users</p>
            </div>

            <p className="text-sm text-slate-500">• Available soon on iOS & Android</p>
          </div>
        </div>

        {/* SVG ILLUSTRATION */}
        <div className="flex-1 w-full">
          <div className="bg-white rounded-3xl p-8 shadow-xl card-soft">
            <svg
              width="800"
              height="600"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              {/* Background Gradient Blobs */}
              <circle cx="180" cy="150" r="150" fill="url(#pinkGrad)" opacity="0.4" className="animate-float-slow"/>
              <circle cx="620" cy="450" r="180" fill="url(#yellowGrad)" opacity="0.3" className="animate-float-slow"/>
              <circle cx="500" cy="120" r="80" fill="url(#blueGrad)" opacity="0.35" className="animate-float-slow"/>

              {/* Floating Coins */}
              <circle cx="350" cy="400" r="20" fill="#FBBF24" stroke="#F59E0B" strokeWidth="3" className="animate-coin1"/>
              <circle cx="420" cy="370" r="15" fill="#EC4899" stroke="#DB2777" strokeWidth="2" className="animate-coin2"/>
              <circle cx="390" cy="320" r="12" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" className="animate-coin3"/>

              {/* Bar Chart */}
              <rect x="300" y="280" width="30" height="120" rx="6" fill="#F87171" className="animate-bar"/>
              <rect x="340" y="260" width="30" height="140" rx="6" fill="#34D399" className="animate-bar"/>
              <rect x="380" y="220" width="30" height="180" rx="6" fill="#60A5FA" className="animate-bar"/>
              <rect x="420" y="250" width="30" height="150" rx="6" fill="#FBBF24" className="animate-bar"/>

              {/* Growth Arrow */}
              <path d="M360 220 L400 180 L440 220" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-arrow"/>
              <circle cx="400" cy="180" r="6" fill="#EC4899" className="animate-arrow"/>

              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="pinkGrad" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F9A8D4"/>
                  <stop offset="1" stopColor="#F472B6"/>
                </linearGradient>
                <linearGradient id="yellowGrad" x1="300" y1="300" x2="600" y2="600" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FCD34D"/>
                  <stop offset="1" stopColor="#FBBF24"/>
                </linearGradient>
                <linearGradient id="blueGrad" x1="400" y1="0" x2="600" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#93C5FD"/>
                  <stop offset="1" stopColor="#3B82F6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
