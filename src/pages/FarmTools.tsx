
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Broom,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Hammer,
  MessageCircle,
  Package,
  ShieldCheck,
  SprayCan,
  Wrench,
  
  Sparkles,
} from "lucide-react";

const farmTools = [
  {
    name: "Cleaning Tools",
    category: "FARM HYGIENE",
    image: "/product-tools.jpg",
    icon: Broom,
    description:
      "Tools for routine cleaning of poultry houses, work areas and farm equipment.",
    features: [
      "Support routine farm cleaning",
      "Choose durable, easy-to-clean tools",
      "Keep cleaning equipment maintained",
    ],
  },
  {
    name: "Sprayers & Disinfection Equipment",
    category: "HYGIENE & BIOSECURITY",
    image: "/product-tools.jpg",
    icon: SprayCan,
    description:
      "Explore sprayers and equipment used for appropriate farm hygiene and disinfection tasks.",
    features: [
      "Ask about available capacities",
      "Follow product safety instructions",
      "Use suitable protective equipment",
    ],
  },
  {
    name: "Hand Tools & Maintenance",
    category: "FARM MAINTENANCE",
    image: "/product-tools.jpg",
    icon: Hammer,
    description:
      "Practical tools for routine poultry-house maintenance and general farm tasks.",
    features: [
      "Options for everyday maintenance",
      "Consider durability and comfort",
      "Store tools safely after use",
    ],
  },
  {
    name: "Feed Handling Tools",
    category: "FEED MANAGEMENT",
    image: "/product-feeds.jpg",
    icon: Package,
    description:
      "Equipment and accessories to help with the handling and movement of poultry feed.",
    features: [
      "Support orderly feed handling",
      "Keep feed protected from moisture",
      "Maintain clean handling equipment",
    ],
  },
  {
    name: "Watering Accessories",
    category: "POULTRY EQUIPMENT",
    image: "/product-drinker.jpg",
    icon: Sparkles,
    description:
      "Explore accessories associated with poultry watering systems and routine equipment care.",
    features: [
      "Ask about compatible accessories",
      "Check drinkers for leaks or blockages",
      "Maintain clean water equipment",
    ],
  },
  {
    name: "General Farm Supplies",
    category: "EVERYDAY ESSENTIALS",
    image: "/product-housing.jpg",
    icon: Wrench,
    description:
      "Enquire about practical farm supplies for everyday poultry-house operations and upkeep.",
    features: [
      "Discuss your farm's requirements",
      "Confirm product specifications",
      "Check current stock before ordering",
    ],
  },
];

const toolTips = [
  {
    number: "01",
    title: "Choose the Right Tool",
    description:
      "Match each tool to the task, the size of your operation and the conditions in your poultry house.",
    icon: Wrench,
  },
  {
    number: "02",
    title: "Prioritise Hygiene",
    description:
      "Keep tools used for cleaning and feed handling clean, and avoid cross-contamination between work areas.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Work Safely",
    description:
      "Follow equipment instructions, use suitable protective gear and store sharp or powered tools securely.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Maintain Your Tools",
    description:
      "Inspect equipment regularly, clean it after use and repair or replace damaged items when needed.",
    icon: ClipboardList,
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

export default function FarmTools() {
  const whatsappNumber = "256700123456";

  function enquiryLink(product: string) {
    const message = `Hello Baraka Farm, I would like to enquire about ${product}. Please share available options, specifications, prices and delivery information.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* 1. HERO BANNER */}
      <section className="relative isolate min-h-[390px] overflow-hidden sm:min-h-[430px] lg:min-h-[455px]">
        <img
          src="/product-tools.jpg"
          alt="Tools and equipment for poultry farm management"
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
              <span className="text-white">Farm Tools</span>
            </nav>

            <SectionLabel light>
              PRACTICAL TOOLS FOR POULTRY FARMERS
            </SectionLabel>

            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              The Right Tools.
              <br />
              <span className="text-[#E9B949]">
                A Better-Run Farm.
              </span>
            </h1>

            <p className="mt-5 max-w-[570px] text-sm leading-7 text-white/85 sm:text-base">
              Discover practical tools and farm supplies for cleaning,
              maintenance, feed handling and everyday poultry management.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#farm-tools"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                EXPLORE FARM TOOLS
                <ArrowRight size={16} />
              </a>

              <a
                href={enquiryLink("farm tools and supplies")}
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
                <Wrench size={16} className="text-[#E9B949]" />
                Everyday farm tools
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-[#E9B949]" />
                Product enquiries
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
              icon: Wrench,
              title: "Practical Farm Essentials",
              text: "Explore tools for everyday poultry farm tasks.",
            },
            {
              icon: ShieldCheck,
              title: "Safer Farm Operations",
              text: "Choose suitable tools and follow safe-use instructions.",
            },
            {
              icon: MessageCircle,
              title: "Easy Product Enquiries",
              text: "Ask about sizes, specifications and availability.",
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

      {/* 3. FARM TOOLS CATALOGUE */}
      <section
        id="farm-tools"
        className="scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>TOOLS & FARM SUPPLIES</SectionLabel>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
            Tools for Everyday Farm Work
          </h2>

          <p className="mt-3 max-w-[700px] text-sm leading-7 text-[#62675F]">
            Explore tool categories for poultry-house upkeep, hygiene,
            equipment care and feed handling. Contact Baraka Farm to
            confirm which products are available for your requirements.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {farmTools.map((item) => {
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

                    <span className="absolute left-3 top-3 rounded-full bg-[#063D2B] px-3 py-1.5 text-[9px] font-extrabold tracking-wide text-white">
                      {item.category}
                    </span>

                    <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                      <Icon size={20} />
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
            These are catalogue categories for enquiries, not confirmation
            of current stock. Product models, specifications, prices and
            availability should be verified before publication.
          </p>
        </div>
      </section>

      {/* 4. CHOOSING AND CARING FOR TOOLS */}
      <section className="border-y border-[#EAE5D8] bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>SMART FARM TOOL SELECTION</SectionLabel>

          <h2 className="mt-3 max-w-[740px] font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
            Choose Tools That Work for Your Farm
          </h2>

          <p className="mt-3 max-w-[700px] text-sm leading-7 text-[#62675F]">
            The best tools are appropriate for the job, comfortable to use
            and easy to maintain. Consider these essentials before buying.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toolTips.map((tip) => {
              const Icon = tip.icon;

              return (
                <article
                  key={tip.number}
                  className="rounded-xl border border-[#EAE5D8] bg-[#F7F5EC] p-5 transition hover:border-[#E9B949]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#D7A72E]">
                      {tip.number}
                    </span>
                    <Icon size={24} className="text-[#174D35]" />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-bold text-[#063D2B]">
                    {tip.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#62675F]">
                    {tip.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FARM HYGIENE AND MAINTENANCE */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>KEEP YOUR FARM READY</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Good Tools Need Good Maintenance
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#62675F]">
              Regular care helps farm tools remain useful and supports
              cleaner, more organised daily operations.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Clean tools after use and allow them to dry appropriately.",
                "Keep feed-handling tools separate from dirty or contaminated equipment.",
                "Inspect handles, blades and moving parts for damage.",
                "Store tools securely in a designated area.",
                "Follow product instructions when using sprayers or disinfectants.",
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
              src="/product-tools.jpg"
              alt="Farm tools for poultry management"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/95 via-[#063D2B]/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                <Broom size={24} />
              </div>

              <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                Clean, Organised, Productive
              </h3>

              <p className="mt-3 max-w-[440px] text-sm leading-6 text-white/85">
                Appropriate tools and consistent maintenance routines help
                make everyday poultry management more practical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL ENQUIRY CTA */}
      <section className="bg-[#063D2B] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-[700px]">
            <SectionLabel light>FARM TOOLS & SUPPLIES</SectionLabel>

            <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
              Looking for Tools for Your Farm?
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/80">
              Tell us which tools you need. Contact Baraka Farm to enquire
              about available products, specifications and pricing.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={enquiryLink("farm tools and supplies")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-5 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              <MessageCircle size={16} />
              CHAT ON WHATSAPP
              <ArrowRight size={15} />
            </a>

            <Link
              to="/contact?subject=Farm%20tools%20enquiry"
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
