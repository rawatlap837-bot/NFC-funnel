"use client";

import { useRef, useState, useEffect } from "react";
import {
  MousePointerClick,
  ListX,
  Clock,
  TrendingDown,
  Frown,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import GlobalSpotlight from "../animation/Globalspotlight"; 


type ProblemCard = {
  title: string;
  icon: LucideIcon;
};

const PROBLEMS: ProblemCard[] = [
  { title: "Visitors leave without taking action", icon: MousePointerClick },
  { title: "No proper lead management", icon: ListX },
  { title: "Manual follow-ups", icon: Clock },
  { title: "Low conversion rates", icon: TrendingDown },
  { title: "Poor customer experience", icon: Frown },
  { title: "Wasted marketing budget", icon: Wallet },
];

const GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function ProblemSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const disableAnimations = isMobile;

  return (
    <section className="problem-section relative bg-white px-6 py-24 md:py-28">
      <style>{`
        .problem-section {
          --glow-color: ${GLOW_COLOR};
        }
        .problem-card {
          --glow-x: 50%;
          --glow-y: 50%;
          --glow-intensity: 0;
          --glow-radius: 200px;
        }
        .problem-card::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1.5px;
          background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
              rgba(${GLOW_COLOR}, calc(var(--glow-intensity) * 0.9)) 0%,
              rgba(${GLOW_COLOR}, calc(var(--glow-intensity) * 0.35)) 35%,
              transparent 65%);
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
        }
        .problem-card:hover {
          box-shadow: 0 12px 30px -12px rgba(132, 0, 255, 0.18);
        }
        .particle::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: rgba(${GLOW_COLOR}, 0.18);
          border-radius: 50%;
          z-index: -1;
        }
      `}</style>

      {!disableAnimations && (
        <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl">
          <GlobalSpotlight
            gridRef={gridRef}
            sectionSelector=".problem-section"
            cardSelector=".problem-card"
            spotlightRadius={400}
            glowColor={GLOW_COLOR}
          />
        </div>
      )}

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="reveal is-visible mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          Still Getting Traffic But{" "}
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
            Not Enough Sales?
          </span>
        </h2>

        {/* Card grid */}
        <div ref={gridRef} className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map(({ title, icon: Icon }, index) => (
            // @ts-expect-error GlobalSpotlight props type does not include children
            <GlobalSpotlight
              key={title}
              className="problem-card card reveal is-visible group flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-purple-200"
              style={{ transitionDelay: `${index * 60}ms` }}
              disableAnimations={disableAnimations}
              particleCount={12}
              glowColor={GLOW_COLOR}
              sectionSelector=".problem-section"
              cardSelector=".problem-card"
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
            >
              <span className="relative z-[2] flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 ring-1 ring-purple-100 transition-colors duration-300 group-hover:bg-purple-100 group-hover:ring-purple-200">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <p className="relative z-[2] text-lg font-semibold leading-snug text-slate-900">
                {title}
              </p>
            </GlobalSpotlight>
          ))}
        </div>

        {/* Closing statement */}
        <p className="reveal is-visible mx-auto mt-16 max-w-2xl text-center text-lg leading-relaxed text-slate-500">
          Every day your business is losing potential customers because there
          is no structured system guiding visitors toward becoming buyers.
        </p>
      </div>
    </section>
  );
}