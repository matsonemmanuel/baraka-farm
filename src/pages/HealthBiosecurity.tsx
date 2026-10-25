
import { Link } from "react-router-dom";
import {
  ArrowRight,
  
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Droplets,
  Footprints,
  Hand,
  HeartPulse,
  
  MessageCircle,

  ShieldCheck,
  SprayCan,
  
  TriangleAlert,
  Truck,
  Users,
  Wind,
} from "lucide-react";

const whatsappNumber = "256700123456";

const principles = [
  {
    number: "01",
    title: "Control Farm Access",
    description:
      "Limit unnecessary visitors and establish clear procedures for people entering poultry housing.",
    icon: Footprints,
    actions: [
      "Restrict unnecessary entry into poultry houses.",
      "Keep a record of visitors where appropriate.",
      "Use dedicated footwear and clothing for poultry areas.",
    ],
  },
  {
    number: "02",
    title: "Clean and Disinfect",
    description:
      "Maintain a consistent cleaning routine for housing, equipment and areas used to handle birds.",
    icon: SprayCan,
    actions: [
      "Remove dirt and organic material before disinfection.",
      "Use suitable products according to label instructions.",
      "Clean drinkers and feeders regularly.",
    ],
  },
  {
    number: "03",
    title: "Protect Feed and Water",
    description:
      "Reduce contamination risks by storing feed correctly and maintaining clean drinking-water systems.",
    icon: Droplets,
    actions: [
      "Store feed in a dry, protected place.",
      "Check water sources and drinkers routinely.",
      "Prevent pests and wild birds from accessing supplies.",
    ],
  },
  {
    number: "04",
    title: "Observe Your Flock",
    description:
      "Regular observation helps you notice changes in behaviour, feeding, drinking or general condition.",
    icon: HeartPulse,
    actions: [
      "Observe birds during daily farm rounds.",
      "Record unusual changes and when they began.",
      "Seek veterinary advice when health concerns arise.",
    ],
  },
];

const warningSigns = [
  "Unexpected deaths or a sudden increase in mortality.",
  "Marked changes in feeding or drinking behaviour.",
  "Difficulty breathing, coughing or unusual respiratory signs.",
  "Unusual weakness, inactivity or changes in movement.",
  "A noticeable drop in egg production or changes in egg quality.",
  "Several birds showing similar unusual signs.",
];


const biosecurityHabits = [
  {
    title: "People and footwear",
    description:
      "Keep poultry-area footwear and clothing separate from everyday outdoor wear.",
    icon: Users,
  },
  {
    title: "Equipment and vehicles",
    description:
      "Clean equipment before moving it between poultry areas or farms where practical.",
    icon: Truck,
  },
  {
    title: "Housing and airflow",
    description:
      "Maintain appropriate ventilation and keep poultry housing in good condition.",
    icon: Wind,
  },
  {
    title: "Hand hygiene",
    description:
      "Wash hands before and after handling birds, equipment or poultry-house materials.",
    icon: Hand,
  },
];

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] ${
        light ? "text-[#E9B949]" : "text-[#174D35]"
      }`}
    >
      <span className="h-[2px] w-7 bg-[#E9B949]" />
      {children}
    </div>
  );
}

export default function HealthBiosecurity() {
  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[430px] items-center bg-[#063D2B] py-16 sm:min-h-[480px] sm:py-20">
        <img
          src="/bird2.jpg"
          alt="Poultry farming and flock management"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03271C]/95 via-[#063D2B]/85 to-[#063D2B]/40" />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link to="/" className="transition hover:text-[#E9B949]">
              Home
            </Link>
            <ChevronRight size={15} />
            <Link
              to="/farm-management"
              className="transition hover:text-[#E9B949]"
            >
              Farm Management
            </Link>
            <ChevronRight size={15} />
            <span className="text-[#E9B949]">Health &amp; Biosecurity</span>
          </div>

          <div className="max-w-3xl">
            <SectionLabel light>Protect your poultry</SectionLabel>

            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Healthy Birds.
              <span className="block text-[#E9B949]">
                Stronger Biosecurity.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Discover practical ways to improve poultry hygiene, reduce the
              risk of disease introduction and spread, recognise warning signs,
              and maintain a healthier farm environment.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#biosecurity-practices"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-7 py-3 text-sm font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                Explore Best Practices
                <ArrowRight size={18} />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Baraka Farm, I would like to enquire about poultry health and biosecurity guidance.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Ask Our Team
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-[#E9B949]" />
                Prevention-focused practices
              </span>
              <span className="flex items-center gap-2">
                <ClipboardCheck size={17} className="text-[#E9B949]" />
                Daily health checks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionLabel>Prevention matters</SectionLabel>

            <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Biosecurity begins with the everyday decisions you make on your
              farm.
            </h2>

            <p className="mt-5 leading-8 text-[#687168]">
              Poultry diseases can affect bird welfare, productivity and farm
              income. Good biosecurity combines hygiene, controlled access,
              clean equipment, appropriate housing and regular flock
              observation.
            </p>

            <p className="mt-4 leading-8 text-[#687168]">
              No single measure prevents every disease. A consistent approach,
              supported by qualified veterinary advice and locally appropriate
              disease-control guidance, can help reduce avoidable risks.
            </p>

            <Link
              to="/farm-management"
              className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#174D35] transition hover:text-[#9A7924]"
            >
              <ChevronRight size={17} className="rotate-180" />
              Back to Farm Management Guides
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#063D2B] p-7 text-white sm:p-9">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[28px] border-white/5" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9B949] text-[#063D2B]">
                <ShieldCheck size={29} />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-bold sm:text-3xl">
                Build a routine. Protect your flock.
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                Effective biosecurity is not a one-time activity. It depends on
                repeatable procedures that everyone working on the farm
                understands and follows.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Control movement into poultry areas",
                  "Clean equipment and maintain hygiene",
                  "Observe birds and record unusual changes",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#E9B949]"
                    />
                    <span className="text-sm leading-6 text-white/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core practices */}
      <section
        id="biosecurity-practices"
        className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>Four essential areas</SectionLabel>
            <h2 className="font-serif text-3xl font-bold text-[#063D2B] sm:text-4xl">
              Everyday Biosecurity Practices
            </h2>
            <p className="mt-4 leading-7 text-[#687168]">
              Make prevention part of your regular farm routine with practical,
              repeatable steps.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group rounded-3xl border border-[#E4E5D8] bg-[#FCFCF8] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B9C8B5] hover:bg-white hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#174D35]/10 text-[#174D35] transition group-hover:bg-[#174D35] group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-extrabold tracking-[0.16em] text-[#9A7924]">
                        PRACTICE {item.number}
                      </p>
                      <h3 className="mt-1 text-xl font-extrabold text-[#063D2B]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#687168]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#E4E5D8] pt-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#174D35]">
                      Practical steps
                    </p>

                    <ul className="mt-4 space-y-3">
                      {item.actions.map((action) => (
                        <li
                          key={action}
                          className="flex items-start gap-3 text-sm leading-6 text-[#59645B]"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-[#B58B25]"
                          />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily checklist */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionLabel>Keep an eye on your flock</SectionLabel>

            <h2 className="font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              A Daily Poultry Health Checklist
            </h2>

            <p className="mt-5 leading-8 text-[#687168]">
              A routine inspection can help you identify changes that deserve
              attention. Check your flock consistently and record unusual
              observations rather than relying on memory alone.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#E9B949]/50 bg-white p-5">
              <ClipboardCheck
                size={23}
                className="mt-0.5 shrink-0 text-[#9A7924]"
              />
              <p className="text-sm leading-7 text-[#59645B]">
                Use a notebook or farm record sheet to record observations,
                dates, affected birds and actions taken.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E4E5D8] bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-extrabold text-[#063D2B]">
              Daily inspection points
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#7A8278]">
              Work through these items during your normal farm rounds.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Observe bird activity, behaviour and general appearance.",
                "Check feed availability and drinking-water cleanliness.",
                "Inspect ventilation, temperature and litter conditions.",
                "Look for injuries, unusual droppings or respiratory signs.",
                "Check equipment, housing and access-control arrangements.",
                "Record and promptly follow up on unusual observations.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#174D35]/10 text-[#174D35]">
                    <CheckCircle2 size={16} />
                  </span>
                  <span className="text-sm leading-6 text-[#59645B]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cleaning routine */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-[#DDE5D8] sm:min-h-[400px]">
              <img
                src="/product-housing.jpg"
                alt="Poultry housing and farm facilities"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/85 via-[#063D2B]/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-[#E9B949]">
                  Clean surroundings matter
                </p>
                <h3 className="mt-3 max-w-md font-serif text-2xl font-bold text-white sm:text-3xl">
                  Make cleanliness part of the farm routine.
                </h3>
              </div>
            </div>

            <div>
              <SectionLabel>Cleaning and disinfection</SectionLabel>

              <h2 className="font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
                Clean first. Disinfect correctly.
              </h2>

              <p className="mt-5 leading-8 text-[#687168]">
                Effective cleaning helps remove dirt and organic material that
                can interfere with disinfection. Choose products appropriate
                for poultry environments and always follow their labels.
              </p>

              <div className="mt-7 space-y-5">
                {[
                  {
                    title: "Remove visible dirt",
                    text: "Clear litter and organic material as appropriate for the cleaning task.",
                  },
                  {
                    title: "Wash equipment",
                    text: "Clean feeders, drinkers and surfaces using suitable methods.",
                  },
                  {
                    title: "Use products correctly",
                    text: "Follow label instructions for dilution, contact time, protective equipment and safe use.",
                  },
                  {
                    title: "Prepare housing responsibly",
                    text: "Follow an appropriate cleaning and downtime plan between flocks where applicable.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E9B949]/20 text-sm font-extrabold text-[#174D35]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-extrabold text-[#063D2B]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#687168]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-xl border border-[#E4E5D8] bg-[#F7F5EC] p-4 text-xs leading-6 text-[#687168]">
                Never mix disinfectants or cleaning chemicals unless their
                labels explicitly permit it. Keep chemicals away from birds,
                feed and drinking water as directed by the product label.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionLabel>Know when to act</SectionLabel>

            <h2 className="font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Recognise warning signs early.
            </h2>

            <p className="mt-5 leading-8 text-[#687168]">
              Changes in flock health may have different causes. Do not assume
              that a particular sign confirms a specific disease. Seek
              professional assessment when something seems unusual.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#E7C1A8] bg-[#FFF7F0] p-5">
              <TriangleAlert
                size={23}
                className="mt-0.5 shrink-0 text-[#A44924]"
              />
              <div>
                <h3 className="font-extrabold text-[#7E341A]">
                  When to seek urgent help
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#7E5A49]">
                  Sudden deaths, severe illness or rapidly spreading signs
                  require prompt veterinary attention. Restrict unnecessary
                  movement of birds and equipment and contact a veterinary
                  professional or local veterinary authority for instructions.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E4E5D8] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A44924]/10 text-[#A44924]">
                <TriangleAlert size={24} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#063D2B]">
                  Signs that deserve attention
                </h3>
                <p className="mt-1 text-sm text-[#7A8278]">
                  Observe, record and seek advice.
                </p>
              </div>
            </div>

            <ul className="mt-7 space-y-4">
              {warningSigns.map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A44924]/10 text-[#A44924]">
                    <TriangleAlert size={14} />
                  </span>
                  <span className="text-sm leading-6 text-[#59645B]">
                    {sign}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl bg-[#F7F5EC] p-5">
              <h4 className="font-extrabold text-[#063D2B]">
                What information should you record?
              </h4>
              <p className="mt-2 text-sm leading-7 text-[#687168]">
                Note when the signs started, how many birds are affected,
                recent deaths, changes in feed or water intake and any recent
                movements of birds. Share these observations with your
                veterinary professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional habits */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <SectionLabel>Make prevention consistent</SectionLabel>
            <h2 className="font-serif text-3xl font-bold text-[#063D2B] sm:text-4xl">
              Small habits. Stronger farm routines.
            </h2>
            <p className="mt-4 leading-7 text-[#687168]">
              Make sure everyone working on the farm understands the procedures
              and follows them consistently.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {biosecurityHabits.map((habit) => {
              const Icon = habit.icon;

              return (
                <article
                  key={habit.title}
                  className="rounded-2xl border border-[#E4E5D8] bg-[#FCFCF8] p-6 transition hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#174D35]/10 text-[#174D35]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 font-extrabold text-[#063D2B]">
                    {habit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#687168]">
                    {habit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional advice CTA */}
      <section className="bg-[#063D2B] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <SectionLabel light>Get the right support</SectionLabel>

            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Your flock's health deserves informed decisions.
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              For suspected disease, vaccination schedules, treatment decisions
              and medicine use, consult a qualified veterinary professional.
              Follow local veterinary guidance and product instructions.
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Baraka Farm, I would like to enquire about poultry health, hygiene and biosecurity supplies or guidance.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-7 py-4 text-sm font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
          >
            <MessageCircle size={19} />
            Contact Baraka Farm
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Bottom navigation */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl border border-[#E4E5D8] bg-white p-6 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-[#9A7924]">
              Continue exploring
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-[#063D2B] sm:text-3xl">
              Build your farm management knowledge.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#687168]">
              Return to the management guides or explore the supplies available
              for your poultry operation.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/farm-management"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#063D2B] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#174D35]"
            >
              Farm Management Guides
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#DDE1D6] px-6 py-3 text-sm font-extrabold text-[#174D35] transition hover:bg-[#F7F5EC]"
            >
              Browse Supplies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
