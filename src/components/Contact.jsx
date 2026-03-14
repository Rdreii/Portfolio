import React from "react";
import { personal } from "../data";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
  { label: "GitHub", value: personal.github, href: personal.github },
  { label: "LinkedIn", value: personal.linkedin, href: personal.linkedin },
  { label: "Location", value: personal.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="border-t border-[#2A2A2A] pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#D85A30] mb-3">
          Let's work together
        </p>
        <h2 className="font-syne font-black text-white text-4xl md:text-5xl tracking-tight mb-6">
          Contact
        </h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-xl mb-16">
          I'm actively looking for junior developer roles and open to freelance
          projects. If you're building something meaningful, let's talk.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact links */}
          <div className="space-y-3">
            {links.map((l) => (
              <div key={l.label}>
                {l.href ? (
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 px-5 py-4 border border-[#2A2A2A] rounded-sm hover:border-[#D85A30] hover:text-[#D85A30] text-gray-400 transition-all group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#D85A30] shrink-0" />
                    <span className="text-xs uppercase tracking-widest text-gray-600 w-20 shrink-0">
                      {l.label}
                    </span>
                    <span className="text-sm group-hover:text-[#D85A30] transition-colors truncate">
                      {l.value}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 px-5 py-4 border border-[#2A2A2A] rounded-sm text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-[#D85A30] shrink-0" />
                    <span className="text-xs uppercase tracking-widest text-gray-600 w-20 shrink-0">
                      {l.label}
                    </span>
                    <span className="text-sm truncate">{l.value}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! This form isn't wired up yet — please email me directly.");
            }}
          >
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 bg-transparent border border-[#2A2A2A] rounded-sm text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#D85A30] transition-colors"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-3 bg-transparent border border-[#2A2A2A] rounded-sm text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#D85A30] transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Your message..."
              required
              className="w-full px-4 py-3 bg-transparent border border-[#2A2A2A] rounded-sm text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#D85A30] transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-7 py-3 bg-[#D85A30] text-white text-sm font-medium uppercase tracking-widest rounded-sm hover:bg-[#993C1D] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
