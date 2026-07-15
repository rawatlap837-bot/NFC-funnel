"use client";

import { CheckCircle2 } from "lucide-react";
import Laserflow from "@/components/animation/Laserflow";

const BENEFITS: string[] = [
  "Capture Qualified Leads",
  "Build Customer Trust",
  "Automate Follow-ups",
  "Schedule Appointments",
  "Convert More Customers",
  "Increase Revenue",
];

export default function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0714] px-6 py-24 md:py-28">
      {/* Ambient background glow to match the hero's dark purple tone */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.12),_transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="reveal is-visible text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Introducing The{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              NCF Funnel System
            </span>
          </h2>
          <p className="reveal is-visible mt-5 text-lg leading-relaxed text-white/60">
            A complete automated sales system that converts visitors into
            paying customers.
          </p>
        </div>

        {/* Full-width container. Laser is allowed to extend outside the rounded border.
            No fixed height here anymore -- the box sizes to its content, so there's
            no leftover empty space below the CTA. */}
        <div className="reveal is-visible relative mt-10 w-full rounded-3xl border border-purple-500/20 bg-black/40">
          {/* Laser layer (outside clip). */}
          <div className="pointer-events-none absolute inset-0 -top-10 -bottom-10 -left-6 -right-6 z-0">
            <Laserflow
              className="absolute inset-0"
              color="#c084fc"
              horizontalBeamOffset={0}
              verticalBeamOffset={-0.2}
              verticalSizing={2}
              horizontalSizing={0.5}
              wispDensity={1}
              wispSpeed={14}
              wispIntensity={4.5}
              flowSpeed={0.35}
              flowStrength={0.3}
              fogIntensity={0.45}
              fogScale={0.3}
              fogFallSpeed={0.5}
              decay={1.05}
              falloffStart={1.15}
            />
          </div>

          {/* Overlaid content, stacked along the beam's vertical path */}
          <div className="relative z-10 flex flex-col items-center gap-10 px-6 py-14 sm:px-12">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur-sm">
              Visitors
            </span>

            <ul className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/30 hover:bg-black/60"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-purple-300 ring-1 ring-purple-400/30">
                    <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-purple-200 backdrop-blur-sm">
              Leads
            </span>

            <div className="flex flex-col items-center gap-5">
              <button className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-900/40 transition-transform duration-300 hover:scale-[1.03] hover:shadow-purple-700/40">
                Book Free Strategy Call
              </button>
              <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/15 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                Sales
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}