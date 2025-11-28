"use client";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-t from-white/90 via-white/80 to-white/70 backdrop-blur-md border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand Info */}
          <div className="space-y-2">
            <h4 className="text-2xl font-extrabold text-slate-900">BudgetBuddy</h4>
            <p className="text-sm text-slate-600">
              Track smart. Save better. Live happier.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-3 rounded-full border border-slate-200 hover:border-pink-500 transition-transform transform hover:scale-110 active:scale-95 bg-white shadow-md hover:shadow-lg"
            >
              <span className="text-slate-800 font-semibold">GitHub</span>
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-slate-200 hover:border-blue-500 transition-transform transform hover:scale-110 active:scale-95 bg-white shadow-md hover:shadow-lg"
            >
              <span className="text-slate-800 font-semibold">Twitter</span>
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-slate-200 hover:border-pink-400 transition-transform transform hover:scale-110 active:scale-95 bg-white shadow-md hover:shadow-lg"
            >
              <span className="text-slate-800 font-semibold">Instagram</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-slate-600 flex flex-col md:flex-row items-center justify-center gap-2">
          <span>© {new Date().getFullYear()} <strong>BudgetBuddy</strong>. All rights reserved.</span>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
