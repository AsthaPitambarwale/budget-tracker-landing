"use client";

const plans = [
  {
    name: "Free",
    price: "₹0",
    gradient: "from-slate-100 to-white",
    perks: [
      "Basic expense tracking",
      "1 saving goal",
      "Community money tips"
    ],
  },
  {
    name: "Pro",
    price: "₹299/mo",
    highlight: true,
    gradient: "from-pink-600 to-yellow-500",
    perks: [
      "Unlimited goals",
      "Smart budgeting",
      "Export to CSV"
    ],
  },
  {
    name: "Premium",
    price: "₹599/mo",
    gradient: "from-slate-100 to-white",
    perks: [
      "Priority support",
      "Bank sync (Auto Import)",
      "Deep financial insights"
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mt-20 mb-24 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
        Pricing
      </h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
        Choose a plan that fits your saving habits — upgrade anytime.
      </p>

      {/* Pricing Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans.map((p, idx) => (
          <div
            key={idx}
            className={`relative p-8 rounded-3xl shadow-lg border
              transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer
              ${p.highlight ? `bg-gradient-to-br ${p.gradient} text-white shadow-xl` : `bg-white ${p.gradient}`}`}
          >
            {/* Popular Badge */}
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-pink-600 font-bold px-4 py-1 rounded-full text-sm shadow-md">
                Most Popular
              </span>
            )}

            {/* Plan Name */}
            <h3 className="text-2xl font-extrabold mb-2 tracking-tight text-center">
              {p.name}
            </h3>

            {/* Price */}
            <p className={`mt-3 text-4xl font-extrabold text-center ${p.highlight ? "text-white" : "text-slate-900"}`}>
              {p.price}
            </p>

            {/* Features */}
            <ul className={`mt-6 space-y-3 text-sm leading-relaxed ${p.highlight ? "text-white/90" : "text-slate-600"}`}>
              {p.perks.map((k, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-lg text-pink-500">✔</span> {k}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              className={`w-full mt-8 py-3 rounded-xl font-semibold text-center shadow-md 
                ${p.highlight 
                  ? "bg-white text-pink-600 hover:bg-white/90" 
                  : "bg-gradient-to-r from-pink-600 to-yellow-500 text-white hover:opacity-90"} 
                transition-all duration-300`}
            >
              Choose {p.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
