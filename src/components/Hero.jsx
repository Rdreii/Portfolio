import React, { useEffect, useState } from "react";
import { personal, honors } from "../data";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24 pb-16"
    >
      {/* Honors row */}
      <div
        className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        {honors.map((h) => (
          <span
            key={h}
            className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-sm border border-[#3B6D11] text-[#7CC25A] bg-[#3B6D11]/10"
          >
            {h}
          </span>
        ))}
      </div>

      {/* Role tag */}
      <div
        className={`mb-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#D85A30] border border-[#D85A30] px-3 py-1 rounded-sm">
          {personal.role}
        </span>
      </div>

      {/* Name */}
      <h1
        className={`font-syne font-black text-white leading-none tracking-tight mb-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          fontSize: "clamp(3rem, 9vw, 7rem)",
          transitionDelay: "300ms",
        }}
      >
        Ron Andre
        <br />
        <span className="text-[#D85A30]">C. Bulagao</span>
        <span className="text-[#D85A30]">.</span>
      </h1>

      {/* Subtitle */}
      <p
        className={`text-gray-400 text-lg leading-relaxed max-w-xl mb-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        PUP Manila grad. Built production apps at{" "}
        <span className="text-white">PGX Group Inc.</span> using Figma, Flutter &
        Firebase. Looking for the next challenge.
      </p>

      {/* CTAs */}
      <div
        className={`flex gap-4 flex-wrap transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "500ms" }}
      >
        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-7 py-3 bg-[#D85A30] text-white text-sm font-medium uppercase tracking-widest rounded-sm hover:bg-[#993C1D] transition-colors"
        >
          View Projects
        </button>
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-7 py-3 border border-[#2A2A2A] text-gray-300 text-sm font-medium uppercase tracking-widest rounded-sm hover:border-[#D85A30] hover:text-[#D85A30] transition-all"
        >
          Hire Me
        </button>
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          className="px-7 py-3 border border-[#2A2A2A] text-gray-300 text-sm font-medium uppercase tracking-widest rounded-sm hover:border-[#D85A30] hover:text-[#D85A30] transition-all"
        >
          GitHub ↗
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className={`mt-20 flex items-center gap-3 text-gray-600 text-xs uppercase tracking-widest transition-all duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <span className="w-8 h-px bg-gray-600" />
        Scroll to explore
      </div>
    </section>
  );
}
