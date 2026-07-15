import {
  Play,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  CalendarCheck,
  Zap,
  TrendingUp,
} from "lucide-react";
import SideRays from "@/components/animation/Siderays";

const TRUST_BADGES = [
  "CRM Integrated",
  "WhatsApp Automation",
  "Landing Page Included",
  "Technical Support",
];

const ACTIVITY_FEED = [
  { label: "Lead captured from landing page", icon: TrendingUp },
  { label: "WhatsApp follow-up sent", icon: MessageCircle },
  { label: "Appointment booked", icon: CalendarCheck },
  { label: "Automation triggered", icon: Zap },
];

const CHART_BARS = [38, 55, 46, 68, 60, 82, 74, 94];

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden px-6 py-28 md:py-36"
      style={{
        background: "linear-gradient(160deg, #071426 0%, #0E2238 100%)",
      }}
    >
      {/* Animated grid backdrop */}
      <div className="absolute inset-0 bg-grid-luxury opacity-50" />

      {/* WebGL violet side rays */}
      <div className="absolute inset-0">
        <SideRays
          speed={2.5}
          rayColor1="#960DF2"
          rayColor2="#C06EF7"
          intensity={1.6}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.4}
          blend={0.65}
          falloff={1.8}
          opacity={0.5}
        />
      </div>

      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-violet-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* ------------------ TOP TEXT BLOCK ------------------ */}
        <div className="reveal is-visible mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-violet-300" />
            <span className="text-xs font-medium tracking-wide text-white/70">
              Done-for-you sales funnel systems
            </span>
          </div>

          <h1 className="font-display text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl md:text-6xl">
            Turn More Visitors Into{" "}
            <span className="text-gradient-luxury">Paying Customers</span>{" "}
            With A Complete Sales Funnel
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Stop losing leads because of poor follow-ups and broken customer
            journeys. We build high-converting funnels that capture leads,
            automate follow-ups, and increase your sales — without increasing
            your ad spend.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="btn-luxury">Book Free Consultation</button>
            <button className="hover-lift group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-[0.9rem] font-display font-semibold text-white/90 backdrop-blur-sm transition hover:border-white/35 hover:bg-white/5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white/20">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Watch Demo
            </button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------ PRODUCT / DASHBOARD MOCKUP ------------------ */}
        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Diagonal tag labels */}
          <span className="hover-lift absolute -left-4 top-10 z-20 hidden -rotate-6 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-display text-xs font-semibold tracking-wide text-white/80 backdrop-blur-sm sm:block lg:-left-14">
            CRM
          </span>
          <span className="hover-lift absolute -right-4 top-1/3 z-20 hidden rotate-6 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-display text-xs font-semibold tracking-wide text-white/80 backdrop-blur-sm sm:block lg:-right-16">
            AUTOMATION
          </span>
          <span className="hover-lift absolute -left-6 bottom-16 z-20 hidden -rotate-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-display text-xs font-semibold tracking-wide text-white/80 backdrop-blur-sm sm:block lg:-left-20">
            BOOKING
          </span>

          {/* Browser-style mockup frame */}
          <div className="glass-panel overflow-hidden rounded-2xl border border-white/10">
            {/* Chrome bar */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-4 rounded-md bg-white/5 px-3 py-1 text-xs text-white/40">
                app.yourfunnel.io/dashboard
              </span>
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
              {/* Chart card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-white/80">
                    Funnel Performance
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400 ring-1 ring-emerald-400/20">
                    <TrendingUp className="h-3 w-3" />
                    +240%
                  </span>
                </div>
                <div className="flex h-32 items-end gap-2">
                  {CHART_BARS.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-violet-500 to-violet-300 transition-all duration-500 hover:from-violet-400 hover:to-violet-100"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Activity feed card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="font-display text-sm font-semibold text-white/80">
                  Live Activity
                </span>
                <ul className="mt-5 flex flex-col gap-4">
                  {ACTIVITY_FEED.map(({ label, icon: Icon }) => (
                    <li key={label} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-violet-500 text-white">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-white/70">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <span className="h-6 w-6 rounded-full border-2 border-[#0E2238] bg-violet-300" />
                  <span className="h-6 w-6 rounded-full border-2 border-[#0E2238] bg-violet-400" />
                  <span className="h-6 w-6 rounded-full border-2 border-[#0E2238] bg-violet-500" />
                </div>
                <span className="text-xs text-white/50">
                  Trusted by 200+ businesses
                </span>
              </div>
              <span className="hover-lift flex items-center gap-1 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold text-white/80">
                View Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>

          {/* Floating analytics cards, overlapping the mockup edges */}
          <div className="glass-panel float-slow absolute -left-6 -top-8 hidden w-40 px-4 py-3 sm:block lg:-left-16">
            <p className="text-xs text-white/60">Conversion Rate</p>
            <p className="font-display text-xl font-bold text-emerald-400">
              +240%
            </p>
          </div>

          <div className="glass-panel float-slower absolute -right-6 -bottom-8 hidden w-44 px-4 py-3 sm:block lg:-right-16">
            <p className="text-xs text-white/60">Leads Captured</p>
            <p className="font-display text-xl font-bold text-violet-200">
              1,842
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}