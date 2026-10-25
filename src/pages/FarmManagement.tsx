
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
 
  House,
  Sprout,
  ShieldCheck,
  ChartNoAxesColumnIncreasing,
  
  FileText,
  Download,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Droplets,
  Wind,
  Wheat,
  Syringe,
  
} from "lucide-react";

const categories = [
  {
    title: "Housing & Environment",
    description: "Create a comfortable and safe space for your birds.",
    image: "/management-housing.jpg",
    icon: House,
  },
  {
    title: "Feeding & Nutrition",
    description: "Choose the right feeds for every stage.",
    image: "/management-feeding.jpg",
    icon: Wheat,
  },
  {
    title: "Health & Biosecurity",
    description: "Prevent and control common poultry diseases.",
    image: "/management-health.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Management Practices",
    description: "Daily care, record keeping and farm routines.",
    image: "/management-records.jpg",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Business Growth",
    description: "Turn your poultry farm into a profitable business.",
    image: "/management-business.jpg",
    icon: Sprout,
  },
];

const articles = [
  {
    category: "HOUSING",
    title: "How to Build a Cost-Effective Poultry House",
    description:
      "Learn different housing designs suitable for small and large flocks.",
    image: "/management-housing.jpg",
    href: "/insights",
  },
  {
    category: "FEEDING",
    title: "Feeding Guide for Healthy and Fast Growth",
    description:
      "Understand feed types, feeding schedules and how to reduce feed costs.",
    image: "/management-feeding.jpg",
    href: "/insights",
  },
  {
    category: "HEALTH",
    title: "Common Poultry Diseases and Prevention",
    description:
      "Learn how to identify, prevent and manage common poultry diseases.",
    image: "/management-health.jpg",
    href: "/insights",
  },
  {
    category: "MANAGEMENT",
    title: "Record Keeping for a Profitable Poultry Farm",
    description:
      "Simple record keeping tools to track costs, production and profits.",
    image: "/management-records.jpg",
    href: "/insights",
  },
];

const tips = [
  {
    title: "Always provide clean water",
    description:
      "Clean, fresh water improves growth and reduces the risk of disease.",
    image: "/tip-clean-water.jpg",
    icon: Droplets,
  },
  {
    title: "Maintain good ventilation",
    description:
      "Proper airflow keeps birds healthy and reduces ammonia.",
    image: "/tip-ventilation.jpg",
    icon: Wind,
  },
  {
    title: "Keep the house dry and clean",
    description:
      "Regular cleaning helps prevent diseases and bad smells.",
    image: "/tip-clean-house.jpg",
    icon: House,
  },
  {
    title: "Use quality feeds",
    description:
      "Balanced nutrition supports growth and better egg production.",
    image: "/tip-quality-feed.jpg",
    icon: Wheat,
  },
  {
    title: "Follow a vaccination schedule",
    description:
      "Work with a qualified animal-health professional on disease prevention.",
    image: "/tip-vaccination.jpg",
    icon: Syringe,
  },
];

const faqs = [
  {
    question: "What is the best housing system for poultry?",
    answer:
      "The best system depends on your flock size, budget, climate and production goals. Your poultry house should provide adequate space, ventilation, drainage, protection and easy cleaning.",
  },
  {
    question: "How often should I vaccinate my birds?",
    answer:
      "Vaccination schedules depend on the type of bird, age, local disease risks and vaccines used. Ask a qualified veterinary or animal-health professional to prepare an appropriate schedule for your flock.",
  },
  {
    question: "What type of feed is best for broilers and layers?",
    answer:
      "Broilers and layers have different nutritional needs. Use a suitable starter, grower or finisher ration for broilers and an appropriate layer ration for laying birds, following the feed manufacturer's instructions.",
  },
  {
    question: "How can I prevent common poultry diseases?",
    answer:
      "Maintain good biosecurity, clean water and housing, appropriate vaccination, suitable nutrition and careful observation. Isolate sick birds safely and seek professional veterinary advice when needed.",
  },
  {
    question: "How do I manage waste from a poultry farm?",
    answer:
      "Keep litter dry, remove waste regularly, control flies and odours, and store or compost manure appropriately away from water sources. Follow local environmental and public-health guidance.",
  },
];

export default function FarmManagement() {
  const [tipIndex, setTipIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const visibleTips = Array.from({ length: 5 }, (_, index) => {
    return tips[(tipIndex + index) % tips.length];
  });

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* 1. HERO */}
      <section className="relative isolate min-h-[290px] overflow-hidden sm:min-h-[330px] lg:min-h-[340px]">
        <img
          src="/feeding3.jpg"
          alt="Poultry farmer inspecting healthy chickens in a poultry house"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />

        <div className="mx-auto grid min-h-[290px] max-w-[1440px] gap-8 px-5 py-8 sm:min-h-[330px] sm:px-8 lg:min-h-[340px] lg:grid-cols-[1fr_240px] lg:items-center lg:px-12">
          <div className="max-w-[650px]">
            <div className="mb-6 flex items-center gap-2 text-[11px] text-white/85">
              <Link to="/" className="hover:text-[#E9B949]">
                Home
              </Link>
              <span className="text-[#E9B949]">›</span>
              <span>Farm Management</span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[52px]">
              Farm Management
            </h1>

            <p className="mt-3 max-w-[480px] text-sm leading-relaxed text-white/90 sm:text-base">
              Practical knowledge for healthier birds, better productivity and
              a more profitable poultry business.
            </p>

            <a
              href="#featured-resources"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              EXPLORE GUIDES
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="hidden space-y-5 lg:block">
            <HeroBenefit
              icon={<FileText size={21} />}
              title="Practical Guidance"
              description="Step-by-step advice for real farm conditions"
            />
            <HeroBenefit
              icon={<ShieldCheck size={21} />}
              title="Expert Knowledge"
              description="Best practices from experience"
            />
            <HeroBenefit
              icon={<Sprout size={21} />}
              title="Better Results"
              description="Healthier birds and higher productivity"
            />
          </div>
        </div>
      </section>

      {/* 2. MANAGEMENT CATEGORIES */}
      <section className="bg-white/65 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href="#featured-resources"
                className="group flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-transparent bg-white/85 p-4 text-center transition hover:-translate-y-1 hover:border-[#E9B949] hover:shadow-md"
              >
                <Icon
                  size={29}
                  strokeWidth={2.1}
                  className="mb-3 text-[#174D35] transition group-hover:text-[#C79B29]"
                />
                <h2 className="font-serif text-[12px] font-bold">
                  {item.title}
                </h2>
                <p className="mt-1 text-[10px] leading-relaxed text-[#62675F]">
                  {item.description}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED RESOURCES */}
      <section
        id="featured-resources"
        className="scroll-mt-20 bg-white px-5 py-9 sm:px-8 sm:py-11 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>FEATURED RESOURCES</SectionLabel>
              <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
                Learn, Apply and Improve Your Farm
              </h2>
              <p className="mt-2 text-[12px] text-[#62675F] sm:text-[13px]">
                Explore practical articles, guides and resources to help you
                manage your poultry farm effectively.
              </p>
            </div>

            <Link
              to="/insights"
              className="inline-flex min-h-10 items-center justify-center gap-3 self-start rounded-xl bg-[#075238] px-5 py-3 text-[9px] font-extrabold text-white transition hover:bg-[#174D35] sm:self-auto"
            >
              VIEW ALL ARTICLES
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group overflow-hidden rounded-xl border border-[#ECE8DE] bg-[#FDFCF8] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-[170px] overflow-hidden sm:h-[135px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-3 rounded-md bg-[#E9B949] px-2 py-1 text-[9px] font-extrabold text-[#063D2B]">
                    {article.category}
                  </span>
                </div>

                <div className="flex min-h-[185px] flex-col p-3">
                  <h3 className="font-serif text-base font-bold leading-tight text-[#202923]">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-relaxed text-[#62675F]">
                    {article.description}
                  </p>

                  <Link
                    to={article.href}
                    className="mt-auto inline-flex min-h-9 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-3 py-2 text-[9px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
                  >
                    READ MORE
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE MANAGEMENT GUIDE */}
      <section className="bg-[#063D2B] px-5 py-6 text-white sm:px-8 sm:py-7 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img
            src="/bird1.jpg"
            alt="Farmer checking poultry in a well-managed chicken house"
            loading="lazy"
            className="h-[210px] w-full rounded-xl object-cover sm:h-[260px] lg:h-[250px]"
          />

          <div>
            <SectionLabel light>STEP-BY-STEP GUIDE</SectionLabel>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Complete Poultry Farm Management Guide
            </h2>
            <p className="mt-3 max-w-[540px] text-[12px] leading-relaxed text-white/85 sm:text-[13px]">
              A comprehensive guide covering housing, brooding, feeding, health
              management, waste management, record keeping and profitability,
              designed for both beginners and experienced farmers.
            </p>

            <a
              href="/guides/poultry-farm-management-guide.pdf"
              download
              className="mt-4 inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-5 py-3 text-[9px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              <Download size={16} />
              DOWNLOAD GUIDE (PDF)
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. PRACTICAL TIPS CAROUSEL */}
      <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <SectionLabel>PRACTICAL TIPS</SectionLabel>
              <h2 className="mt-2 font-serif text-2xl font-bold text-[#063D2B] sm:text-3xl">
                Quick Tips for Better Results
              </h2>
              <p className="mt-1 text-[11px] text-[#62675F] sm:text-[12px]">
                Simple but important tips to keep your birds healthy and
                productive.
              </p>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                aria-label="Previous tips"
                onClick={() =>
                  setTipIndex((current) => (current - 1 + tips.length) % tips.length)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCDDD5] bg-white text-[#174D35] transition hover:bg-[#EAE5D8]"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                aria-label="Next tips"
                onClick={() =>
                  setTipIndex((current) => (current + 1) % tips.length)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-5">
            {visibleTips.map((tip, index) => {
              const Icon = tip.icon;

              return (
                <article
                  key={`${tip.title}-${index}`}
                  className="overflow-hidden rounded-xl border border-[#ECE8DE] bg-white shadow-sm"
                >
                  <img
                    src={tip.image}
                    alt={tip.title}
                    loading="lazy"
                    className="h-[130px] w-full object-cover sm:h-[110px]"
                  />

                  <div className="p-3">
                    <div className="flex items-start gap-2">
                      <Icon size={17} className="mt-0.5 shrink-0 text-[#C79B29]" />
                      <h3 className="font-serif text-sm font-bold leading-tight">
                        {tip.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-[10px] leading-relaxed text-[#62675F]">
                      {tip.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. EXPERT ADVICE AND FAQ */}
      <section className="px-5 pb-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative isolate flex min-h-[260px] items-end overflow-hidden rounded-xl bg-[#202923] p-5 text-white sm:p-7">
            <img
              src="/bird2.jpg"
              alt="Healthy poultry on a farm"
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/20" />

            <div className="max-w-[420px]">
              <SectionLabel light>NEED EXPERT ADVICE?</SectionLabel>
              <h2 className="mt-2 font-serif text-3xl font-bold leading-tight">
                Talk to Our Poultry Experts
              </h2>
              <p className="mt-2 text-[11px] leading-relaxed text-white/90 sm:text-[12px]">
                Have a specific challenge on your farm? Our team is ready to
                provide personalised guidance to help you get the best results.
              </p>

              <a
                href="https://wa.me/256700123456?text=Hello%20Baraka%20Farm%2C%20I%20need%20poultry%20farm%20management%20advice."
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#079653] px-5 py-3 text-[10px] font-extrabold text-white transition hover:bg-[#087A44]"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-white p-5 sm:p-6">
            <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>

            <div className="mt-4 divide-y divide-[#EAE5D8]">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-4 py-3 text-left text-[11px] font-bold text-[#202923] transition hover:text-[#174D35] sm:text-[12px]"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={16} className="shrink-0" />
                      ) : (
                        <ChevronDown size={16} className="shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <p className="pb-4 pr-5 text-[11px] leading-relaxed text-[#62675F]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-[2px] w-5 shrink-0 bg-[#E9B949]" />
      <span
        className={`text-[8px] font-extrabold tracking-[2px] ${
          light ? "text-[#E9B949]" : "text-[#174D35]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function HeroBenefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-sm font-bold text-white">{title}</h3>
        <p className="mt-1 max-w-[165px] text-[10px] leading-relaxed text-white/85">
          {description}
        </p>
      </div>
    </div>
  );
}
