import React from "react";
import { personal, stats } from "../data";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="border-t border-[#2A2A2A] pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#D85A30] mb-3">
          Who I am
        </p>
        <h2 className="font-syne font-black text-white text-4xl md:text-5xl tracking-tight mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 items-start">
          {/* Bio */}
          <div className="space-y-5">
            {personal.bio.map((p, i) => (
              <p key={i} className="text-gray-400 text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#1A1A1A] border-l-[3px] border-[#D85A30] p-5 rounded-sm"
              >
                <p className="font-syne font-black text-white text-3xl leading-none mb-1">
                  {s.value}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
