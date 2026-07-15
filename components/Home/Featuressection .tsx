import {
  Sparkles,
  LayoutTemplate,
  ClipboardList,
  Database,
  MessageCircle,
  Mail,
  CalendarCheck,
  BarChart3,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const FEATURES: Feature[] = [
  {
    title: "High-Converting Landing Page",
    description:
      "A page designed to turn visitors into leads, not just look pretty. Built for speed, clarity, and conversions.",
    icon: LayoutTemplate,
  },
  {
    title: "Lead Capture Forms",
    description:
      "Smart forms that capture the right details without friction. No more losing leads to long, clunky forms.",
    icon: ClipboardList,
  },
  {
    title: "CRM Integration",
    description:
      "Every lead flows straight into your CRM automatically. No manual entry, no missed contacts.",
    icon: Database,
  },
  {
    title: "WhatsApp Automation",
    description:
      "Instant automated replies and follow-ups on WhatsApp. Keep leads engaged the moment they convert.",
    icon: MessageCircle,
  },
  {
    title: "Email Automation",
    description:
      "Nurture sequences that run on autopilot. Stay top-of-mind without lifting a finger.",
    icon: Mail,
  },
  {
    title: "Appointment Booking",
    description:
      "Let leads book calls directly into your calendar. No back-and-forth scheduling emails.",
    icon: CalendarCheck,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track every visitor, lead, and sale in one place. Make decisions backed by real data.",
    icon: BarChart3,
  },
  {
    title: "Technical Support",
    description:
      "Ongoing support to keep your funnel running smoothly. We handle the tech, you handle the sales.",
    icon: LifeBuoy,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0714] px-6 py-24 md:py-28">
      {/* Violet ambient background, matching the tone used elsewhere on the page */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(150,13,242,0.16),_transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Eyebrow + heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal is-visible mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-violet-300" />
            <span className="text-xs font-medium tracking-wide text-white/70">
              What&apos;s included
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl md:text-6xl ">
            Everything You Need To{" "}
            <span className="text-gradient-luxury">Generate More Leads</span>
          </h2>
          <p className="reveal is-visible mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60">
            One system, fully built and connected — no piecing together tools
            or hiring five different freelancers.
          </p>
        </div>

        {/* Card grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ title, description, icon: Icon }, index) => (
            <div
              key={title}
              className="group reveal is-visible relative flex flex-col items-start gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_-12px_rgba(150,13,242,0.5)]"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Corner glow accent, appears on hover */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-400/0 blur-2xl transition-colors duration-500 group-hover:bg-violet-400/20" />

              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-violet-500 text-white shadow-[0_0_20px_-4px_rgba(150,13,242,0.6)] transition-transform duration-500 group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </span>

              <div className="relative">
                <p className="font-display text-lg font-bold text-white">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {description}
                </p>
              </div>

              {/* Bottom hairline that lights up on hover */}
              <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-violet-400/0 to-transparent transition-colors duration-500 group-hover:via-violet-400/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}