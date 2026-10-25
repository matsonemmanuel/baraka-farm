
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  MessageCircle,
  Package,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Warehouse,
} from "lucide-react";

const whatsappNumber = "256700123456";

function enquiryLink(packageName: string) {
  const message = `Hello Baraka Farm, I would like to enquire about the ${packageName}. Please share the available package options, current prices, quantities, and delivery information.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const packages = [
  {
    id: "starter",
    name: "Starter Package",
    subtitle: "For new poultry farmers",
    description:
      "Get started with essential poultry supplies selected to help you prepare for your first flock.",
    icon: Sprout,
    badge: "Start with confidence",
    image: "/product-starter-feed.jpg",
    suitable: "First-time farmers and small flocks",
    includes: [
      "Poultry feed suited to your birds' growth stage",
      "Feeders and drinkers",
      "Basic brooding equipment, where needed",
      "Poultry health and biosecurity essentials",
      "Practical guidance on getting started",
    ],
    note: "Package contents depend on flock size, bird type and age.",
  },
  {
    id: "growth",
    name: "Growth Package",
    subtitle: "For expanding poultry farms",
    description:
      "Bring together the supplies you need to manage a growing flock and improve everyday farm operations.",
    icon: TrendingUp,
    badge: "Grow more efficiently",
    image: "/product-feeder.jpg",
    suitable: "Farmers increasing flock size or production",
    includes: [
      "Feed quantities planned around your flock",
      "Additional feeders and drinkers",
      "Selected housing and brooding equipment",
      "Farm cleaning and disinfection supplies",
      "Poultry health supply planning guidance",
    ],
    note: "Equipment and quantities are tailored to your farm requirements.",
  },
  {
    id: "commercial",
    name: "Commercial Package",
    subtitle: "For larger poultry operations",
    description:
      "Plan your supply requirements around your operation, production goals and ongoing farm needs.",
    icon: Warehouse,
    badge: "For larger operations",
    image: "/product-housing.jpg",
    suitable: "Established farms and commercial producers",
    includes: [
      "Bulk feed supply planning",
      "Feeders, drinkers and housing equipment",
      "Cleaning, hygiene and biosecurity supplies",
      "Farm tools and selected operational essentials",
      "Supply coordination and quotation support",
    ],
    note: "Final specifications depend on capacity, availability and delivery needs.",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Tell us about your farm",
    description:
      "Share your bird type, flock size, production stage and location.",
  },
  {
    number: "02",
    title: "Choose your package",
    description:
      "We help you identify suitable supplies and quantities for your needs.",
  },
  {
    number: "03",
    title: "Receive your quotation",
    description:
      "Review the proposed items, prices, availability and delivery arrangements.",
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
      className={`mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] ${
        light ? "text-[#E9B949]" : "text-[#174D35]"
      }`}
    >
      <span className="h-[2px] w-7 bg-[#E9B949]" />
      {children}
    </div>
  );
}

export default function SupplyPackages() {
  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[430px] items-center bg-[#063D2B] py-20 sm:min-h-[490px] sm:py-24">
        <img
          src="/bird2.jpg"
          alt="Poultry farming at Baraka Farm"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03271C]/95 via-[#063D2B]/85 to-[#063D2B]/35" />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-medium text-white/75">
              <Link to="/" className="transition hover:text-[#E9B949]">
                Home
              </Link>
              <ChevronRight size={15} />
              <Link
                to="/products"
                className="transition hover:text-[#E9B949]"
              >
                Products &amp; Supplies
              </Link>
              <ChevronRight size={15} />
              <span className="text-[#E9B949]">Supply Packages</span>
            </div>

            <SectionLabel light>Practical solutions for every farm</SectionLabel>

            <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              The Right Supplies.
              <span className="block text-[#E9B949]">
                One Complete Plan.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              From your first flock to a growing commercial operation, explore
              poultry supply packages designed around your birds, your farm and
              your goals.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#packages"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-7 py-3 text-sm font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                Explore Packages <ArrowRight size={18} />
              </a>

              <a
                href={enquiryLink("custom poultry supply package")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} /> Talk to Our Team
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#E9B949]" />
                Flexible package options
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#E9B949]" />
                Tailored quotations
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#E9B949]" />
                Practical farm guidance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionLabel>Built around your needs</SectionLabel>
            <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Everything starts with understanding your farm.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#59645B]">
              Every poultry farm has different requirements. The right supplies
              depend on your flock size, whether you raise broilers or layers,
              the age of your birds and the facilities available on your farm.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-[#59645B]">
              Our package options provide a starting point. Contact Baraka Farm
              to discuss the products, quantities and arrangements that suit
              your operation.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E4E5D8] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9B949]/20 text-[#174D35]">
              <ClipboardList size={28} />
            </div>
            <h3 className="text-xl font-extrabold text-[#063D2B]">
              What we consider
            </h3>

            <ul className="mt-5 space-y-4">
              {[
                "Number and type of birds",
                "Bird age and production stage",
                "Available housing and equipment",
                "Feed, hygiene and health supply requirements",
                "Budget, stock availability and delivery location",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#B58B25]"
                  />
                  <span className="text-sm leading-6 text-[#59645B]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Package cards */}
      <section
        id="packages"
        className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>Choose your package</SectionLabel>
            <h2 className="font-serif text-3xl font-bold text-[#063D2B] sm:text-4xl">
              Supply Solutions for Every Stage
            </h2>
            <p className="mt-4 leading-7 text-[#687168]">
              Choose a starting point below. We will help you confirm the
              suitable items, quantities and current prices before you order.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-[#E4E5D8] bg-[#F7F5EC] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-52 overflow-hidden bg-[#E7E9DD]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/75 via-transparent to-transparent" />

                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-[#174D35]">
                      <Icon size={15} />
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#9A7924]">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl font-bold text-[#063D2B]">
                      {item.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#687168]">
                      {item.description}
                    </p>

                    <div className="mt-5 rounded-xl border border-[#E4E5D8] bg-white p-4">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#174D35]">
                        Best suited for
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#59645B]">
                        {item.suitable}
                      </p>
                    </div>

                    <div className="mt-6">
                      <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#063D2B]">
                        <Package size={18} className="text-[#B58B25]" />
                        Potential inclusions
                      </h4>

                      <ul className="mt-4 space-y-3">
                        {item.includes.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm leading-6 text-[#59645B]"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-[#174D35]"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-5 text-xs leading-5 text-[#7B8279]">
                      {item.note}
                    </p>

                    <a
                      href={enquiryLink(item.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#063D2B] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#174D35]"
                    >
                      Enquire About This Package
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-[#E9B949]/50 bg-[#F7F5EC] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div>
              <h3 className="text-xl font-extrabold text-[#063D2B]">
                Need something different?
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#687168]">
                Tell us what you need and we can discuss a custom supply
                package based on your farm requirements.
              </p>
            </div>
            <Link
              to="/products/request-quote"
              className="mt-5 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-6 py-3 text-sm font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E] sm:mt-0"
            >
              Request a Custom Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#063D2B] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel light>Simple and straightforward</SectionLabel>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              How to Get Your Supply Package
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              A simple process to help you identify what your farm needs before
              committing to an order.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {planningSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/15 bg-white/[0.05] p-6 sm:p-7"
              >
                <span className="font-serif text-4xl font-bold text-[#E9B949]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Why choose Baraka Farm?</SectionLabel>
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              A practical approach to poultry supplies.
            </h2>
            <p className="mt-5 leading-8 text-[#687168]">
              We want you to make informed purchasing decisions. Confirm the
              specifications, suitability, availability and cost of your
              supplies before placing an order.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <BadgeCheck
                  size={23}
                  className="mt-0.5 shrink-0 text-[#B58B25]"
                />
                <div>
                  <h3 className="font-extrabold text-[#063D2B]">
                    Clear quotations
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#687168]">
                    Understand the proposed items and their costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={23}
                  className="mt-0.5 shrink-0 text-[#B58B25]"
                />
                <div>
                  <h3 className="font-extrabold text-[#063D2B]">
                    Responsible selection
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#687168]">
                    Choose products appropriate for your farm and birds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClipboardList
                  size={23}
                  className="mt-0.5 shrink-0 text-[#B58B25]"
                />
                <div>
                  <h3 className="font-extrabold text-[#063D2B]">
                    Flexible planning
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#687168]">
                    Discuss quantities and priorities for your operation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle
                  size={23}
                  className="mt-0.5 shrink-0 text-[#B58B25]"
                />
                <div>
                  <h3 className="font-extrabold text-[#063D2B]">
                    Direct enquiries
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#687168]">
                    Speak with our team about your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-[#E4E5D8] sm:min-h-[420px]">
            <img
              src="/product-feeds.jpg"
              alt="Poultry feed supplies"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/90 via-[#063D2B]/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E9B949]">
                Your farm. Your requirements.
              </p>
              <h3 className="mt-3 max-w-md font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                Let's plan the supplies that make sense for you.
              </h3>
              <a
                href={enquiryLink("a tailored farm supply package")}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-6 py-3 text-sm font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                Contact Baraka Farm <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#E9B949] px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#174D35]">
              Ready to get started?
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Get a quotation for your poultry farm.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#174D35]/85">
              Tell us your requirements and let us help you identify a suitable
              supply package.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <Link
              to="/products/request-quote"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#063D2B] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#174D35]"
            >
              Request a Quote <ArrowRight size={17} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#063D2B]/30 px-6 py-3 text-sm font-extrabold text-[#063D2B] transition hover:bg-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
