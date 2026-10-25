
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Droplets,
  
  MessageCircle,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";

const equipment = [
  {
    name: "Chick Feeders",
    category: "FEEDING EQUIPMENT",
    image: "/product-feeder.jpg",
    description:
      "Feeding equipment designed to help young chicks access feed conveniently during their early growth.",
    features: [
      "Suitable options for young chicks",
      "Easy access to feed",
      "Cleaning and maintenance guidance",
    ],
    enquiry: "Chick feeders",
  },
  {
    name: "Poultry Feeders",
    category: "FEEDING EQUIPMENT",
    image: "/product-feeder.jpg",
    description:
      "Explore feeder options for growing birds and adult poultry, depending on flock size and housing.",
    features: [
      "Options for different flock sizes",
      "Practical daily feeding",
      "Ask about available capacities",
    ],
    enquiry: "Poultry feeders",
  },
  {
    name: "Chick Drinkers",
    category: "DRINKING EQUIPMENT",
    image: "/product-drinker.jpg",
    description:
      "Watering equipment designed to help young birds access clean drinking water.",
    features: [
      "Options for young chicks",
      "Routine cleaning access",
      "Ask about available capacities",
    ],
    enquiry: "Chick drinkers",
  },
  {
    name: "Poultry Drinkers",
    category: "DRINKING EQUIPMENT",
    image: "/product-drinker.jpg",
    description:
      "Explore watering equipment for growing and adult birds to support daily flock management.",
    features: [
      "Options for different flock sizes",
      "Convenient water replenishment",
      "Ask about available designs",
    ],
    enquiry: "Poultry drinkers",
  },
];

const selectionTips = [
  {
    number: "01",
    title: "Consider Your Flock Size",
    description:
      "Choose enough feeding and drinking points for your birds, reducing competition and overcrowding around equipment.",
    icon: Users,
  },
  {
    number: "02",
    title: "Choose the Right Design",
    description:
      "Select equipment appropriate for the age and size of your birds, your housing arrangement and your management system.",
    icon: ShoppingBasket,
  },
  {
    number: "03",
    title: "Prioritise Hygiene",
    description:
      "Choose equipment that can be cleaned thoroughly and maintain a regular cleaning routine for feeders and drinkers.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Plan Water Access",
    description:
      "Make sure birds can access clean water throughout the day and check that drinkers are working properly.",
    icon: Droplets,
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

export default function FeedersDrinkers() {
  const whatsappNumber = "256700123456";

  function whatsappLink(product: string) {
    const message = `Hello Baraka Farm, I would like to enquire about ${product}. Please share the available options, sizes, prices and delivery information.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* 1. HERO BANNER */}
      <section className="relative isolate min-h-[390px] overflow-hidden sm:min-h-[430px] lg:min-h-[455px]">
        <img
          src="/product-feeder.jpg"
          alt="Poultry feeding equipment"
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
              <span className="text-white">Feeders & Drinkers</span>
            </nav>

            <SectionLabel light>
              ESSENTIAL POULTRY EQUIPMENT
            </SectionLabel>

            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Better Feeding.
              <br />
              <span className="text-[#E9B949]">
                Cleaner Water.
              </span>
            </h1>

            <p className="mt-5 max-w-[560px] text-sm leading-7 text-white/85 sm:text-base">
              Explore practical feeding and watering equipment for your
              poultry farm. Find suitable options for chicks, growing birds
              and adult flocks.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#equipment"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                EXPLORE EQUIPMENT
                <ArrowRight size={16} />
              </a>

              <a
                href={whatsappLink("poultry feeders and drinkers")}
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
                <ShieldCheck size={16} className="text-[#E9B949]" />
                Equipment guidance
              </span>
              <span className="flex items-center gap-2">
                <Droplets size={16} className="text-[#E9B949]" />
                Watering solutions
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
              icon: ShoppingBasket,
              title: "Practical Feeding",
              text: "Explore equipment for convenient daily feeding.",
            },
            {
              icon: Droplets,
              title: "Clean Water Access",
              text: "Find drinkers suited to your flock management needs.",
            },
            {
              icon: BadgeCheck,
              title: "Selection Support",
              text: "Ask about designs, capacities and availability.",
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

      {/* 3. EQUIPMENT CATALOGUE */}
      <section
        id="equipment"
        className="scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>FEEDING & WATERING SOLUTIONS</SectionLabel>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
            Equipment for Your Poultry House
          </h2>

          <p className="mt-3 max-w-[680px] text-sm leading-7 text-[#62675F]">
            Browse our equipment categories and enquire about the
            available options. We can help you identify suitable equipment
            based on your birds, flock size and housing system.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((item) => (
              <article
                key={item.name}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#EAE5D8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-[210px] overflow-hidden bg-white sm:h-[190px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-[#063D2B] px-3 py-1.5 text-[9px] font-extrabold tracking-wide text-white">
                    {item.category}
                  </span>
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
                    href={whatsappLink(item.enquiry)}
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
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-[#62675F]">
            Product images are illustrative. Equipment models, sizes,
            prices and stock availability must be confirmed with Baraka Farm.
          </p>
        </div>
      </section>

      {/* 4. HOW TO CHOOSE */}
      <section className="border-y border-[#EAE5D8] bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>BUY WITH CONFIDENCE</SectionLabel>

          <h2 className="mt-3 max-w-[700px] font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
            How to Choose the Right Equipment
          </h2>

          <p className="mt-3 max-w-[680px] text-sm leading-7 text-[#62675F]">
            The right equipment depends on your flock size, the age of
            your birds and how your poultry house is organised.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {selectionTips.map((tip) => {
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

      {/* 5. EQUIPMENT CARE */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>EVERYDAY FARM MANAGEMENT</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Keep Feeding and Watering Equipment Clean
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#62675F]">
              Regular inspection and cleaning help maintain a hygienic
              poultry environment. Make equipment care part of your daily
              flock-management routine.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Clean feeders and drinkers regularly.",
                "Remove wet, spoiled or contaminated feed.",
                "Check drinkers for leaks, blockages and dirt.",
                "Position equipment so birds can access it comfortably.",
                "Repair or replace damaged equipment when necessary.",
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
              src="/product-drinker.jpg"
              alt="Poultry watering equipment"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/95 via-[#063D2B]/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                <Waves size={24} />
              </div>

              <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                Clean Water. Better Management.
              </h3>

              <p className="mt-3 max-w-[420px] text-sm leading-6 text-white/85">
                Reliable access to clean drinking water is an essential
                part of maintaining a healthy poultry flock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="bg-[#063D2B] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-[680px]">
            <SectionLabel light>LET'S EQUIP YOUR FARM</SectionLabel>

            <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
              Looking for Feeders or Drinkers?
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/80">
              Tell us about your poultry flock and the equipment you need.
              Contact Baraka Farm to enquire about options and pricing.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink("poultry feeders and drinkers")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-5 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              <MessageCircle size={16} />
              CHAT ON WHATSAPP
              <ArrowRight size={15} />
            </a>

            <Link
              to="/contact?subject=Feeders%20and%20drinkers%20enquiry"
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
