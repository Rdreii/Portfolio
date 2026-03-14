import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-[#2A2A2A] max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <p className="text-gray-600 text-xs uppercase tracking-widest">
          Built by{" "}
          <span className="text-[#D85A30]">Ron Andre C. Bulagao</span> — 2026
        </p>
        <p className="text-gray-600 text-xs uppercase tracking-widest">
          🦀 CRAB.dev
        </p>
      </div>
    </footer>
  );
}
