
import { Link } from "react-router-dom";
import {
  ArrowRight,
  
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  
  MessageCircle,
  
  ShieldCheck,
  Stethoscope,
  Thermometer,
  
} from "lucide-react";

const healthCategories = [
  {
    name: "Poultry Vaccines",
    image: "/product-vaccines.jpg",
    icon: ShieldCheck,
    description:
      "Enquire about poultry vaccines and suitable vaccination programmes for your flock.",
    points: [
      "Ask about appropriate vaccination schedules",
      "Confirm product storage requirements",
      "Consult a qualified veterinary professional",
    ],
  },
  {
    name: "Veterinary Medicines",
    image: "/product-vaccines.jpg",
    icon: Stethoscope,
    description:
      "Find out about veterinary medicines appropriate to your poultry health needs.",
    points: [
      "Confirm suitability for the birds",
      "Follow veterinary and label instructions",
      "Check withdrawal periods where applicable",
    ],
  },
  {
    name: "Vitamins & Supplements",
    image: "/product-feeds.jpg",
    icon: ClipboardCheck,
    description:
      "Ask about nutritional supplements and their appropriate use in poultry management.",
    points: [
      "Discuss your flock's nutritional needs",
      "Check product ingredients and instructions",
      "Avoid unnecessary or duplicate supplementation",
    ],
  },
  {
    name: "Disinfection & Biosecurity",
    image: "/product-tools.jpg",
    icon: Thermometer,
    description:
      "Explore farm hygiene and biosecurity supplies for poultry housing and equipment.",
    points: [
      "Check suitability for the intended surface",
      "Follow dilution and safety instructions",
      "Observe safe handling and storage guidance",
    ],
  },
];

const healthPractices = [
  {
    number: "01",
    title: "Seek Veterinary Guidance",
    description:
      "Consult a qualified veterinary professional when planning vaccination, diagnosing illness or choosing medicines.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Follow Product Instructions",
    description:
      "Read the product label carefully and follow its directions for use, administration and storage.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Protect Product Quality",
    description:
      "Observe the manufacturer's storage requirements, expiry date and any cold-chain instructions.",
    icon: Thermometer,
  },
  {
    number: "04",
    title: "Keep Farm Records",
    description:
      "Record vaccinations, treatments, dates and relevant withdrawal periods for food-producing birds.",
    icon: CheckCircle2,
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

export default function VaccinesMedicines() {
  const whatsappNumber = "256700123456";

  function enquiryLink(category: string) {
    const message = `Hello Baraka Farm, I would like to enquire about ${category}. Please confirm available products, prices, storage requirements and any veterinary guidance needed.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* 1. HERO BANNER */}
      <section className="relative isolate min-h-[390px] overflow-hidden sm:min-h-[430px] lg:min-h-[455px]">
        <img
          src="/product-vaccines.jpg"
          alt="Poultry health and veterinary supplies"
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
              <span className="text-white">Vaccines & Medicines</span>
            </nav>

            <SectionLabel light>
              POULTRY HEALTH & BIOSECURITY
            </SectionLabel>

            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Protect Your Flock.
              <br />
              <span className="text-[#E9B949]">
                Manage Health Responsibly.
              </span>
            </h1>

            <p className="mt-5 max-w-[570px] text-sm leading-7 text-white/85 sm:text-base">
              Explore poultry health supplies, vaccination enquiries,
              veterinary products and farm hygiene essentials to support
              responsible flock management.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#health-categories"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                EXPLORE HEALTH SUPPLIES
                <ArrowRight size={16} />
              </a>

              <a
                href={enquiryLink("poultry vaccines and medicines")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/60 px-5 py-3 text-[10px] font-extrabold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={16} />
                MAKE AN ENQUIRY
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-white/85">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#E9B949]" />
                Responsible use
              </span>
              <span className="flex items-center gap-2">
                <Stethoscope size={16} className="text-[#E9B949]" />
                Veterinary guidance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="border-b border-[#EAE5D8] bg-white px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 sm:grid-cols-3 sm:gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Responsible Health Management",
              text: "Make informed decisions about poultry health products.",
            },
            {
              icon: ClipboardCheck,
              title: "Product Information",
              text: "Ask about labels, storage and appropriate use.",
            },
            {
              icon: Stethoscope,
              title: "Veterinary Support",
              text: "Seek professional advice for vaccination and treatment.",
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

      {/* 3. HEALTH PRODUCT CATEGORIES */}
      <section
        id="health-categories"
        className="scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>HEALTH & FARM HYGIENE SUPPLIES</SectionLabel>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
            Explore Our Health Categories
          </h2>

          <p className="mt-3 max-w-[690px] text-sm leading-7 text-[#62675F]">
            Browse the categories below and contact Baraka Farm to enquire
            about specific products, availability and current pricing.
            Product selection and treatment decisions should be guided
            by the product label and a qualified veterinary professional.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {healthCategories.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.name}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#EAE5D8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-[200px] overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
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
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-[11px] leading-5 text-[#414941]"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-[#B78B20]"
                          />
                          {point}
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
                      ENQUIRE ABOUT THIS CATEGORY
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 text-xs leading-6 text-[#62675F]">
            These are catalogue categories, not confirmation of current
            stock. Product names, registration status, availability and
            prices must be verified with the supplier before publication.
          </p>
        </div>
      </section>

      {/* 4. RESPONSIBLE HEALTH PRACTICES */}
      <section className="border-y border-[#EAE5D8] bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>RESPONSIBLE POULTRY CARE</SectionLabel>

          <h2 className="mt-3 max-w-[740px] font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
            Good Health Management Starts With Good Practice
          </h2>

          <p className="mt-3 max-w-[720px] text-sm leading-7 text-[#62675F]">
            Safe storage, appropriate veterinary guidance and accurate
            records help farmers manage poultry health products responsibly.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {healthPractices.map((practice) => {
              const Icon = practice.icon;

              return (
                <article
                  key={practice.number}
                  className="rounded-xl border border-[#EAE5D8] bg-[#F7F5EC] p-5 transition hover:border-[#E9B949]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#D7A72E]">
                      {practice.number}
                    </span>
                    <Icon size={24} className="text-[#174D35]" />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-bold text-[#063D2B]">
                    {practice.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#62675F]">
                    {practice.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. IMPORTANT SAFETY INFORMATION */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>IMPORTANT INFORMATION</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Use Poultry Health Products Safely
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#62675F]">
              Vaccines and veterinary medicines are not interchangeable.
              The appropriate product and its use depend on the birds,
              the health concern and the product's approved instructions.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Consult a qualified veterinary professional about vaccination and treatment.",
                "Never guess doses or combine medicines without appropriate guidance.",
                "Check product registration, expiry dates and storage conditions.",
                "Observe medicine withdrawal periods for meat and eggs where applicable.",
                "Keep health products safely stored and away from children and animals.",
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
              src="/product-vaccines.jpg"
              alt="Poultry health supplies"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/95 via-[#063D2B]/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                <ShieldCheck size={24} />
              </div>

              <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                Prevention, Hygiene and Proper Records
              </h3>

              <p className="mt-3 max-w-[440px] text-sm leading-6 text-white/85">
                Combine good biosecurity, appropriate vaccination planning
                and responsible veterinary care in your flock-management
                routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL ENQUIRY CTA */}
      <section className="bg-[#063D2B] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-[700px]">
            <SectionLabel light>POULTRY HEALTH ENQUIRIES</SectionLabel>

            <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
              Looking for Poultry Health Supplies?
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/80">
              Contact Baraka Farm to ask about product availability,
              prices and storage information. Seek veterinary advice for
              vaccination and treatment decisions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={enquiryLink("poultry health supplies")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-5 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              <MessageCircle size={16} />
              ENQUIRE ON WHATSAPP
              <ArrowRight size={15} />
            </a>

            <Link
              to="/contact?subject=Vaccines%20and%20medicines%20enquiry"
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
