
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Fan,
  Hammer,
  House,
  Layers3,
  MessageCircle,
  
  ShieldCheck,
  Thermometer,
  Warehouse,
  Wind,
} from "lucide-react";

const equipmentCategories = [
  {
    name: "Brooding Equipment",
    image: "/product-brooder.jpg",
    icon: Thermometer,
    description:
      "Explore equipment used to provide suitable warmth and support chick management during brooding.",
    features: [
      "Ask about available heating options",
      "Consider the size of your brooding area",
      "Follow safe equipment operating instructions",
    ],
  },
  {
    name: "Poultry Housing Fittings",
    image: "/product-housing.jpg",
    icon: Warehouse,
    description:
      "Explore practical fittings and accessories for organising your poultry house.",
    features: [
      "Options depend on your housing system",
      "Consider flock size and layout",
      "Prioritise durable, easy-to-clean materials",
    ],
  },
  {
    name: "Ventilation Equipment",
    image: "/product-housing.jpg",
    icon: Wind,
    description:
      "Ask about equipment and fittings that support appropriate airflow in poultry housing.",
    features: [
      "Consider house size and bird density",
      "Plan for local climate conditions",
      "Maintain adequate airflow",
    ],
  },
  {
    name: "Flooring & Litter Supplies",
    image: "/product-housing.jpg",
    icon: Layers3,
    description:
      "Explore housing materials and litter-related supplies suitable for your poultry management system.",
    features: [
      "Consider moisture management",
      "Maintain clean and dry litter",
      "Choose materials suitable for poultry",
    ],
  },
  {
    name: "Farm Building Materials",
    image: "/product-tools.jpg",
    icon: Hammer,
    description:
      "Enquire about materials and fittings that may be needed when constructing or improving a poultry house.",
    features: [
      "Plan your building dimensions",
      "Consider durability and local conditions",
      "Confirm material availability before ordering",
    ],
  },
  {
    name: "Housing Safety & Protection",
    image: "/product-housing.jpg",
    icon: ShieldCheck,
    description:
      "Explore housing accessories that support secure poultry areas and practical biosecurity routines.",
    features: [
      "Consider protection from predators",
      "Plan safe entry and access points",
      "Support effective farm hygiene",
    ],
  },
];

const housingPrinciples = [
  {
    number: "01",
    title: "Plan the Space",
    description:
      "Consider flock size, bird type, movement, equipment placement and access for routine cleaning.",
    icon: House,
  },
  {
    number: "02",
    title: "Manage Temperature",
    description:
      "Provide age-appropriate warmth for chicks and monitor conditions throughout the poultry house.",
    icon: Thermometer,
  },
  {
    number: "03",
    title: "Allow Airflow",
    description:
      "Plan suitable ventilation to help control excess heat, moisture and air quality.",
    icon: Fan,
  },
  {
    number: "04",
    title: "Keep Housing Clean",
    description:
      "Use appropriate materials and routines to maintain clean, dry housing and manage litter effectively.",
    icon: ShieldCheck,
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
    <div className="flex items-center gap-2">
      <span className="h-[2px] w-6 shrink-0 bg-[#E9B949]" />
      <span
        className={`text-[9px] font-extrabold tracking-[2px] ${
          light ? "text-[#E9B949]" : "text-[#174D35]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export default function HousingEquipment() {
  const whatsappNumber = "256700123456";

  function enquiryLink(category: string) {
    const message = `Hello Baraka Farm, I would like to enquire about ${category}. Please share available options, specifications, prices and delivery information.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* 1. HERO BANNER */}
      <section className="relative isolate min-h-[390px] overflow-hidden sm:min-h-[430px] lg:min-h-[455px]">
        <img
          src="/product-housing.jpg"
          alt="Poultry housing equipment and farm facilities"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />

        <div className="mx-auto flex min-h-[390px] max-w-[1440px] items-center px-5 py-10 sm:min-h-[430px] sm:px-8 lg:min-h-[455px] lg:px-12">
          <div className="max-w-[720px]">
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2 text-[11px] text-white/80"
            >
              <Link to="/" className="transition hover:text-[#E9B949]">
                Home
              </Link>
              <ChevronRight size={13} className="text-[#E9B949]" />
              <Link
                to="/products"
                className="transition hover:text-[#E9B949]"
              >
                Products & Supplies
              </Link>
              <ChevronRight size={13} className="text-[#E9B949]" />
              <span className="text-white">Housing Equipment</span>
            </nav>

            <SectionLabel light>
              BUILD A BETTER POULTRY HOUSE
            </SectionLabel>

            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Better Housing.
              <br />
              <span className="text-[#E9B949]">
                Healthier Flocks.
              </span>
            </h1>

            <p className="mt-5 max-w-[570px] text-sm leading-7 text-white/85 sm:text-base">
              Explore poultry housing essentials for brooding, ventilation,
              housing fittings and everyday farm management. Find options
              suited to your farm's needs and setup.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#housing-categories"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                EXPLORE EQUIPMENT
                <ArrowRight size={16} />
              </a>

              <a
                href={enquiryLink("poultry housing equipment")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/60 px-5 py-3 text-[10px] font-extrabold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={16} />
                ENQUIRE ON WHATSAPP
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-white/85">
              <span className="flex items-center gap-2">
                <House size={16} className="text-[#E9B949]" />
                Housing solutions
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-[#E9B949]" />
                Equipment enquiries
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENEFITS STRIP */}
      <section className="border-b border-[#EAE5D8] bg-white px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 sm:grid-cols-3 sm:gap-6">
          {[
            {
              icon: Warehouse,
              title: "Practical Housing Options",
              text: "Explore equipment categories for different farm setups.",
            },
            {
              icon: Wind,
              title: "Comfort & Airflow",
              text: "Consider ventilation, temperature and housing conditions.",
            },
            {
              icon: MessageCircle,
              title: "Product Enquiries",
              text: "Ask about specifications, prices and availability.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                  <Icon size={21} />
                </div>

                <div>
                  <h2 className="font-serif text-sm font-bold text-[#063D2B]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#62675F]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. HOUSING EQUIPMENT CATALOGUE */}
      <section
        id="housing-categories"
        className="scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>POULTRY HOUSING SOLUTIONS</SectionLabel>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
            Equip Your Poultry House
          </h2>

          <p className="mt-3 max-w-[700px] text-sm leading-7 text-[#62675F]">
            Explore housing and farm-building categories for new poultry
            projects and existing farms. Contact Baraka Farm to confirm
            which products are available and suitable for your requirements.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentCategories.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.name}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#EAE5D8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-[215px] overflow-hidden bg-white sm:h-[225px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                      <Icon size={22} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-xl font-bold text-[#063D2B]">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-[#62675F]">
                      {item.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[11px] leading-5 text-[#414941]"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-[#B78B20]"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={enquiryLink(item.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#E9B949] px-3 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
                    >
                      <MessageCircle size={15} />
                      ENQUIRE ABOUT THIS ITEM
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 text-xs leading-6 text-[#62675F]">
            These are equipment categories for enquiries, not a guarantee
            of stock. Product specifications, photographs, pricing and
            availability should be confirmed before publication.
          </p>
        </div>
      </section>

      {/* 4. HOUSING PLANNING GUIDE */}
      <section className="border-y border-[#EAE5D8] bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>PLAN YOUR POULTRY HOUSE</SectionLabel>

          <h2 className="mt-3 max-w-[740px] font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
            The Essentials of Good Poultry Housing
          </h2>

          <p className="mt-3 max-w-[700px] text-sm leading-7 text-[#62675F]">
            Good housing supports bird welfare and makes daily farm
            management easier. Consider these essentials when planning
            a new poultry house or improving an existing one.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {housingPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.number}
                  className="rounded-xl border border-[#EAE5D8] bg-[#F7F5EC] p-5 transition hover:border-[#E9B949]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#D7A72E]">
                      {principle.number}
                    </span>
                    <Icon size={24} className="text-[#174D35]" />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-bold text-[#063D2B]">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#62675F]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. HOUSING MANAGEMENT */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>BUILD FOR DAILY FARMING</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Design With Maintenance in Mind
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#62675F]">
              A well-planned poultry house should be practical to clean,
              maintain and monitor. Think about everyday farm activities
              before choosing building materials and equipment.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Make provision for adequate airflow and appropriate temperature control.",
                "Choose durable materials suited to your local conditions.",
                "Plan access for cleaning, inspection and equipment maintenance.",
                "Provide suitable protection against predators and unauthorised entry.",
                "Arrange equipment so daily feeding, watering and monitoring are convenient.",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#B78B20]"
                  />
                  <span className="text-sm leading-6 text-[#414941]">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/farm-management"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#174D35] px-5 py-3 text-[10px] font-extrabold text-[#174D35] transition hover:bg-[#063D2B] hover:text-white"
            >
              EXPLORE FARM MANAGEMENT
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#063D2B] sm:min-h-[400px]">
            <img
              src="/product-housing.jpg"
              alt="Poultry house and housing facilities"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/95 via-[#063D2B]/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                <House size={24} />
              </div>

              <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                A Better Environment for Your Flock
              </h3>

              <p className="mt-3 max-w-[440px] text-sm leading-6 text-white/85">
                Thoughtful housing design can make flock care, cleaning
                and daily management more practical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL ENQUIRY CTA */}
      <section className="bg-[#063D2B] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-[700px]">
            <SectionLabel light>HOUSING EQUIPMENT ENQUIRIES</SectionLabel>

            <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
              Planning or Improving Your Poultry House?
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/80">
              Tell us about your project and the equipment you need.
              Contact Baraka Farm to enquire about available options,
              specifications and prices.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={enquiryLink("poultry housing equipment")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-5 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              <MessageCircle size={16} />
              CHAT ON WHATSAPP
              <ArrowRight size={15} />
            </a>

            <Link
              to="/contact?subject=Housing%20equipment%20enquiry"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 px-5 py-3 text-[10px] font-extrabold text-white transition hover:bg-white/10"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
