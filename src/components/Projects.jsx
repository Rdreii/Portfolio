import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="border-t border-[#2A2A2A] pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#D85A30] mb-3">
          What I've built
        </p>
        <h2 className="font-syne font-black text-white text-4xl md:text-5xl tracking-tight mb-16">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#D85A30] hover:-translate-y-1 transition-all duration-200 group"
            >
              {/* Thumb */}
              <div
                className="h-32 flex items-center justify-center font-syne font-black text-white text-2xl tracking-wide"
                style={{ backgroundColor: p.color }}
              >
                {p.abbr}
              </div>

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#FAECE7]/10 text-[#D85A30]"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="text-[10px] text-gray-600 uppercase tracking-widest ml-auto self-center">
                    {p.year}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-white text-lg mb-2 group-hover:text-[#D85A30] transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.description}
                </p>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-xs font-medium uppercase tracking-widest text-[#D85A30] hover:underline"
                  >
                    View Project ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
