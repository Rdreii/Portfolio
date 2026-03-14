import React, { useEffect, useRef, useState } from "react";
import { skills } from "../data";

export default function Skills() {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="border-t border-[#2A2A2A] pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#D85A30] mb-3">
          What I work with
        </p>
        <h2 className="font-syne font-black text-white text-4xl md:text-5xl tracking-tight mb-16">
          Skills
        </h2>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skills.map((s) => (
            <div
              key={s.name}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm p-5 hover:border-[#D85A30] transition-colors group"
            >
              <p className="text-[10px] font-medium uppercase tracking-widest text-[#D85A30] mb-2">
                {s.category}
              </p>
              <p className="font-syne font-bold text-white text-sm mb-4">
                {s.name}
              </p>
              <div className="h-[2px] bg-[#2A2A2A] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#D85A30] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animated ? `${s.level}%` : "0%" }}
                />
              </div>
              <p className="text-right text-[10px] text-gray-600 mt-1">
                {s.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
