
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Eye,
  Target,
  Gem,
  Users,
  ChartNoAxesColumnIncreasing,
  Bird,
  Wheat,
  GraduationCap,
  Handshake,
  Leaf,
  Sprout,
  UserRound,
} from "lucide-react";
const baseUrl = import.meta.env.BASE_URL;
const impactStats = [
  {
    value: "500+",
    label: "Farmers Trained",
    detail: "With practical skills",
    icon: Users,
  },
  {
    value: "50,000+",
    label: "Birds Supported",
    detail: "Through quality inputs",
    icon: Bird,
  },
  {
    value: "15+",
    label: "Communities Reached",
    detail: "Across the region",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    detail: "From our training participants",
    icon: Wheat,
  },
];

const milestones = [
  {
    year: "2021",
    text: "Started poultry farming with a small flock.",
    icon: Sprout,
  },
  {
    year: "2022",
    text: "Expanded farm operations and began supporting other farmers.",
    icon: Users,
  },
  {
    year: "2023",
    text: "Started formal farmer training programmes.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    text: "Introduced poultry feeds and equipment supplies.",
    icon: Bird,
  },
  {
    year: "2025",
    text: "Reaching more farmers and building stronger communities through knowledge and quality inputs.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

const partners = [
  { name: "URDT", subtitle: "Community Development", type: "urdt" },
  {
    name: "mastercard",
    subtitle: "foundation",
    type: "mastercard",
  },
  {
    name: "Self-Reliance",
    subtitle: "Model",
    type: "self-reliance",
  },
  {
    name: "Local Agricultural",
    subtitle: "Partners",
    type: "agriculture",
  },
  {
    name: "Community",
    subtitle: "Farmers",
    type: "community",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* 1. ABOUT HERO */}
      <section className="relative isolate flex min-h-[245px] items-center overflow-hidden sm:min-h-[285px] lg:min-h-[320px]">
        <img
          src={`${baseUrl}About-hero.jpg`}
          alt="Poultry farmer caring for a chicken on the farm"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_38%]"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#151A14]/95 via-[#151A14]/70 to-[#151A14]/10" />

        <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="max-w-[600px]">
            <div className="mb-5 flex items-center gap-2 text-[11px] text-white/85 sm:text-xs">
              <Link to="/" className="hover:text-[#E9B949]">
                Home
              </Link>
              <span className="text-[#E9B949]">›</span>
              <span>About Us</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px]">
              About Us
            </h1>

            <p className="mt-3 max-w-[390px] text-sm leading-relaxed text-white/90 sm:text-base">
              Our story, our purpose and our commitment to empowering farmers
              through quality poultry farming, training and reliable supplies.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-9">
        <div className="mx-auto grid max-w-[1200px] items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionLabel>OUR STORY</SectionLabel>

            <h2 className="mt-2 max-w-[520px] font-serif text-3xl font-bold leading-[1.05] text-[#063D2B] sm:text-4xl">
              From Passion to
              <br className="hidden sm:block" /> Farmer Empowerment
            </h2>

            <div className="mt-3 max-w-[530px] space-y-2.5 text-[12px] leading-[1.6] text-[#555B54] sm:text-[13px]">
              <p>
                Baraka Farm was founded with a simple belief — that poultry
                farming can transform lives when farmers have the right
                knowledge, quality inputs and continuous support.
              </p>

              <p>
                What started as a personal passion for poultry keeping has
                grown into a platform that trains, equips and walks with
                farmers on their journey to build sustainable poultry
                businesses.
              </p>

              <p>
                Through practical training, reliable supplies and ongoing
                guidance, Baraka Farm is helping individuals, families and
                communities unlock the opportunities in poultry farming.
              </p>
            </div>

            <Link
              to="/contact?subject=Baraka%20Farm%20enquiry"
              className="mt-4 inline-flex min-h-10 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-5 py-3 text-[9px] font-extrabold tracking-wide text-[#063D2B] transition-colors hover:bg-[#D7A72E] sm:text-[10px]"
            >
              LEARN MORE ABOUT OUR JOURNEY
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative pb-8 pr-1 sm:pb-9 sm:pr-3">
            <img
              src={`${baseUrl}about1.jpg`}
              alt="Healthy poultry in a well-managed farm"
              loading="lazy"
              className="h-[250px] w-full rounded-xl object-cover sm:h-[310px] lg:h-[300px]"
            />

            <div className="absolute bottom-0 right-0 flex w-[82%] items-center gap-3 rounded-xl border border-white/80 bg-white/95 p-3 shadow-lg sm:w-[75%] sm:p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F5EC] text-[#D7A72E]">
                <Target size={31} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="font-serif text-base font-bold text-[#063D2B]">
                  Our Vision
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-[#62675F] sm:text-xs">
                  Thriving poultry farmers and stronger communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION, MISSION AND VALUES */}
      <section className="bg-[#063D2B] px-5 py-7 text-white sm:px-8 sm:py-9 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-7 md:grid-cols-3 md:gap-0">
          <ValueColumn
            icon={<Eye size={39} strokeWidth={1.7} />}
            title="Our Vision"
          >
            Thriving poultry farmers and stronger communities.
          </ValueColumn>

          <ValueColumn
            icon={<Target size={39} strokeWidth={1.7} />}
            title="Our Mission"
            bordered
          >
            To provide practical poultry training, quality supplies and expert
            guidance that help farmers grow productive and sustainable poultry
            businesses.
          </ValueColumn>

          <ValueColumn
            icon={<Gem size={39} strokeWidth={1.7} />}
            title="Our Values"
            bordered
          >
            <ul className="space-y-1">
              {[
                "Integrity",
                "Quality",
                "Practical Solutions",
                "Farmer-Centered Approach",
                "Community Impact",
              ].map((value) => (
                <li key={value} className="flex items-center gap-2">
                  <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#E9B949] text-[8px] font-bold text-[#063D2B]">
                    ✓
                  </span>
                  {value}
                </li>
              ))}
            </ul>
          </ValueColumn>
        </div>
      </section>

      {/* 4. OUR IMPACT */}
      <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <SectionLabel>OUR IMPACT</SectionLabel>

            <h2 className="mt-2 max-w-[430px] font-serif text-3xl font-bold leading-[1.08] text-[#063D2B] sm:text-4xl">
              Making a Difference
              <br /> for Farmers
            </h2>

            <p className="mt-3 max-w-[440px] text-[12px] leading-relaxed text-[#62675F] sm:text-[13px]">
              We are proud to support farmers through training, quality
              supplies and ongoing guidance. Here are some of the results we
              have achieved together.
            </p>

            <Link
              to="/insights"
              className="mt-4 inline-flex min-h-10 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-5 py-3 text-[9px] font-extrabold tracking-wide text-[#063D2B] transition-colors hover:bg-[#D7A72E]"
            >
              SEE OUR SUCCESS STORIES
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
            {impactStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex min-h-[88px] items-center gap-3 rounded-xl border border-white bg-white/60 p-3 shadow-sm sm:p-4"
                >
                  <Icon
                    size={31}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#D7A72E]"
                  />

                  <div className="min-w-0">
                    <p className="font-serif text-2xl font-bold leading-none text-[#063D2B] sm:text-[28px]">
                      {stat.value}
                    </p>
                    <h3 className="mt-1 text-[11px] font-bold text-[#202923]">
                      {stat.label}
                    </h3>
                    <p className="mt-1 text-[9px] leading-snug text-[#62675F]">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR JOURNEY */}
      <section className="bg-white/35 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel>OUR JOURNEY</SectionLabel>

          <h2 className="mt-2 font-serif text-3xl font-bold text-[#063D2B] sm:text-4xl">
            Key Milestones
          </h2>

          <div className="relative mt-7 grid grid-cols-1 gap-5 pl-2 sm:grid-cols-5 sm:gap-3 sm:pl-0">
            <div className="absolute bottom-4 left-[21px] top-4 w-[2px] bg-[#E9B949] sm:bottom-auto sm:left-[8%] sm:right-[8%] sm:top-[21px] sm:h-[2px] sm:w-auto" />

            {milestones.map((milestone) => {
              const Icon = milestone.icon;

              return (
                <div
                  key={milestone.year}
                  className="relative grid grid-cols-[44px_1fr] gap-3 sm:block"
                >
                  <div className="relative z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-white bg-[#E9B949] text-white shadow-sm sm:mb-3">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="pt-1 sm:pt-0">
                    <h3 className="font-serif text-xl font-bold text-[#063D2B]">
                      {milestone.year}
                    </h3>
                    <p className="mt-1 max-w-[190px] text-[11px] leading-[1.5] text-[#62675F]">
                      {milestone.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. MEET THE FOUNDER */}
      <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionLabel>MEET THE FOUNDER</SectionLabel>

            <h2 className="mt-2 max-w-[430px] font-serif text-3xl font-bold leading-[1.08] text-[#063D2B] sm:text-4xl">
              A Farmer with a
              <br /> Larger Purpose
            </h2>

            <div className="mt-3 max-w-[520px] space-y-2.5 text-[12px] leading-[1.6] text-[#62675F] sm:text-[13px]">
              <p>
                Baraka Farm is led by a passionate poultry entrepreneur who
                believes in the power of knowledge, quality inputs and
                practical support to transform farmers' lives.
              </p>

              <p>
                With hands-on experience in poultry keeping and a deep
                commitment to farmer development, he works directly with
                farmers to share practical skills, reliable supplies and
                continuous guidance.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-4 inline-flex min-h-10 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-5 py-3 text-[9px] font-extrabold tracking-wide text-[#063D2B] transition-colors hover:bg-[#D7A72E]"
            >
              GET IN TOUCH
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative pb-8 pr-1 sm:pb-9 sm:pr-3">
            <img
              src={`${baseUrl}founder.jpg`}
              alt="Baraka Farm founder holding a chicken"
              loading="lazy"
              className="h-[250px] w-full rounded-xl object-cover object-center sm:h-[310px] lg:h-[290px]"
            />

            <div className="absolute bottom-0 right-0 flex w-[86%] items-center gap-3 rounded-xl border border-white/80 bg-white/95 p-3 shadow-lg sm:w-[78%] sm:p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#063D2B] text-[#E9B949]">
                <UserRound size={25} />
              </div>

              <div>
                <h3 className="text-[11px] font-bold leading-snug text-[#063D2B] sm:text-xs">
                  Committed to
                  <br /> Farmer Empowerment
                </h3>
                <p className="mt-1 text-[10px] leading-snug text-[#62675F]">
                  Practical knowledge.
                  <br /> Real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNERS AND SUPPORTERS */}
      <section className="border-t border-[#EAE5D8] bg-white/60 px-5 py-7 sm:px-8 sm:py-9 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel centered>OUR PARTNERS & SUPPORTERS</SectionLabel>

          <h2 className="mt-2 text-center font-serif text-2xl font-bold leading-tight text-[#063D2B] sm:text-3xl lg:text-[32px]">
            Working Together for Stronger Poultry Communities
          </h2>

          <p className="mx-auto mt-2 max-w-[690px] text-center text-[11px] leading-relaxed text-[#62675F] sm:text-xs">
            We value the organisations and partners who support our journey
            and contribute to farmer development in our communities.
          </p>

          <div className="mt-7 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            {partners.map((partner) => (
              <div
                key={partner.type}
                className="flex min-h-[52px] items-center justify-center gap-2"
              >
                {partner.type === "mastercard" ? (
                  <div className="flex shrink-0 items-center">
                    <span className="h-6 w-6 rounded-full bg-[#D7193F]" />
                    <span className="-ml-3 h-6 w-6 rounded-full bg-[#F4A51C]/90" />
                  </div>
                ) : partner.type === "urdt" ? (
                  <Leaf className="shrink-0 text-[#478C49]" size={27} />
                ) : partner.type === "self-reliance" ? (
                  <Sprout className="shrink-0 text-[#478C49]" size={27} />
                ) : partner.type === "agriculture" ? (
                  <Handshake className="shrink-0 text-[#344D4A]" size={27} />
                ) : (
                  <Users className="shrink-0 text-[#B96A50]" size={27} />
                )}

                <div className="leading-tight">
                  <p
                    className={`text-[11px] font-bold ${
                      partner.type === "urdt"
                        ? "text-[#286644]"
                        : "text-[#34443B]"
                    }`}
                  >
                    {partner.name}
                  </p>
                  <p className="mt-0.5 text-[9px] text-[#62675F]">
                    {partner.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* Reusable section label */
function SectionLabel({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 ${
        centered ? "justify-center" : "justify-start"
      }`}
    >
      <span className="h-[2px] w-4 shrink-0 bg-[#E9B949]" />
      <span className="text-[8px] font-extrabold tracking-[2px] text-[#174D35]">
        {children}
      </span>
    </div>
  );
}

/* Reusable vision, mission and values column */
function ValueColumn({
  icon,
  title,
  children,
  bordered = false,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <div
      className={`${
        bordered
          ? "border-t border-white/30 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0"
          : "md:pr-8"
      }`}
    >
      <div className="mb-2 text-[#E9B949]">{icon}</div>

      <h3 className="font-serif text-xl font-bold text-white">{title}</h3>

      <div className="mt-2 max-w-[320px] text-[11px] leading-[1.55] text-white/85 sm:text-xs">
        {children}
      </div>
    </div>
  );
}
