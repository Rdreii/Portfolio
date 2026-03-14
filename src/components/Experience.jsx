import React from "react";
import { experience, education } from "../data";

function ExpCard({ item }) {
  return (
    <div
      className="border-l-[3px] pl-6 py-1"
      style={{ borderColor: item.color }}
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <h3 className="font-syne font-bold text-white text-lg">{item.company || item.school}</h3>
        <span className="text-gray-500 text-sm">{item.location}</span>
      </div>
      <p className="text-sm font-medium mb-1" style={{ color: item.color }}>
        {item.role || item.degree}
      </p>
      <p className="text-gray-500 text-xs uppercase tracking-widest mb-5">
        {item.period}
      </p>
      <ul className="space-y-2">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
            <span className="mt-1 shrink-0 text-[#D85A30]">—</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="border-t border-[#2A2A2A] pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#D85A30] mb-3">
          Where I've worked
        </p>
        <h2 className="font-syne font-black text-white text-4xl md:text-5xl tracking-tight mb-16">
          Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">
              Work
            </p>
            <div className="space-y-10">
              {experience.map((e) => (
                <ExpCard key={e.company} item={e} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">
              Education
            </p>
            <div className="space-y-10">
              {education.map((e) => (
                <ExpCard key={e.school} item={e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
