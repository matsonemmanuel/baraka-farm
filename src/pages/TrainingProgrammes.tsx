
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  House,
  Wheat,
  ShieldCheck,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,

  Users,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

const programmes = [
  {
    number: "01",
    title: "Poultry Housing & Brooding",
    category: "FOUNDATION PROGRAMME",
    description:
      "Learn how to prepare a suitable poultry house, create the right brooding environment and give young chicks a strong start.",
    image: "/training-housing.jpg",
    icon: House,
    topics: [
      "Poultry house design and preparation",
      "Brooding temperature and ventilation",
      "Space, litter and lighting management",
      "Daily chick care and observation",
    ],
  },
  {
    number: "02",
    title: "Feeding & Nutrition",
    category: "FEEDING PROGRAMME",
    description:
      "Understand poultry nutrition, appropriate feed selection and practical feeding routines for healthier, productive birds.",
    image: "/training-feeding.jpg",
    icon: Wheat,
    topics: [
      "Feed types and nutritional needs",
      "Feeding by age and production stage",
      "Clean water and feeding routines",
      "Feed storage and waste reduction",
    ],
  },
  {
    number: "03",
    title: "Disease Prevention & Management",
    category: "POULTRY HEALTH PROGRAMME",
    description:
      "Build practical knowledge of biosecurity, early warning signs and disease-prevention routines for your flock.",
    image: "/training-health.jpg",
    icon: ShieldCheck,
    topics: [
      "Farm biosecurity practices",
      "Recognising signs of illness",
      "Cleaning and disinfection routines",
      "Vaccination planning with animal-health professionals",
    ],
  },
  {
    number: "04",
    title: "Farm Records & Business Skills",
    category: "FARM BUSINESS PROGRAMME",
    description:
      "Develop the business skills needed to track farm costs, monitor production and make informed management decisions.",
    image: "/training-business.jpg",
    icon: ChartNoAxesColumnIncreasing,
    topics: [
      "Daily poultry farm records",
      "Feed costs, sales and expenses",
      "Production and performance tracking",
      "Planning and managing farm profitability",
    ],
  },
];

const benefits = [
  {
    icon: BookOpen,
    title: "Practical Learning",
    description:
      "Focus on knowledge that can be applied to everyday poultry farming.",
  },
  {
    icon: Users,
    title: "Farmer Focused",
    description:
      "Programme topics designed around common poultry farming challenges.",
  },
  {
    icon: GraduationCap,
    title: "Build Your Skills",
    description:
      "Strengthen your knowledge and confidence as a poultry farmer.",
  },
];

export default function TrainingProgrammes() {
  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* HERO */}
      <section className="relative isolate min-h-[310px] overflow-hidden sm:min-h-[350px] lg:min-h-[380px]">
        <img
          src="/training-programmes-hero.jpg"
          alt="Poultry farmer working with healthy chickens"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

        <div className="mx-auto flex min-h-[310px] max-w-[1440px] items-center px-5 py-9 sm:min-h-[350px] sm:px-8 lg:min-h-[380px] lg:px-12">
          <div className="max-w-[700px]">
            <div className="mb-5 flex items-center gap-2 text-[11px] text-white/85">
              <Link to="/" className="transition hover:text-[#E9B949]">
                Home
              </Link>
              <span className="text-[#E9B949]">›</span>
              <Link
                to="/training"
                className="transition hover:text-[#E9B949]"
              >
                Training
              </Link>
              <span className="text-[#E9B949]">›</span>
              <span>Training Programmes</span>
            </div>

            <p className="text-[9px] font-extrabold tracking-[2px] text-[#E9B949] sm:text-[10px]">
              LEARN · PRACTISE · GROW
            </p>

            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]">
              Training Programmes
              <span className="mt-1 block text-[#E9B949]">
                For Better Poultry Farming
              </span>
            </h1>

            <p className="mt-4 max-w-[570px] text-sm leading-relaxed text-white/90 sm:text-base">
              Explore practical learning programmes in poultry housing,
              nutrition, disease prevention and farm business management.
              Strengthen your knowledge and take the next step in your farming
              journey.
            </p>

            <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row">
              <a
                href="#programmes"
                className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                EXPLORE PROGRAMMES
                <ArrowRight size={15} />
              </a>

              <a
                href="https://wa.me/256700123456?text=Hello%20Baraka%20Farm%2C%20I%20would%20like%20to%20enquire%20about%20your%20training%20programmes."
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 text-[10px] font-extrabold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={16} />
                ENQUIRE ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-[#EAE5D8] bg-white px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 sm:grid-cols-3 sm:gap-6">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                <Icon size={21} />
              </span>
              <div>
                <h2 className="font-serif text-base font-bold text-[#063D2B]">
                  {title}
                </h2>
                <p className="mt-1 text-[11px] leading-relaxed text-[#62675F]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMME CARDS */}
      <section
        id="programmes"
        className="scroll-mt-24 px-5 py-9 sm:px-8 sm:py-12 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-[760px]">
            <SectionLabel>OUR LEARNING PROGRAMMES</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl lg:text-5xl">
              Practical Skills for Every Stage of Your Farm
            </h2>

            <p className="mt-3 text-[12px] leading-relaxed text-[#62675F] sm:text-[13px]">
              Explore the core areas of poultry production and farm management.
              Each programme focuses on practical topics that help farmers make
              informed decisions.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {programmes.map((programme) => {
              const Icon = programme.icon;

              return (
                <article
                  key={programme.number}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#E7E2D6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-[190px] overflow-hidden">
                    <img
                      src={programme.image}
                      alt={programme.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />

                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#E9B949] font-serif text-sm font-bold text-[#063D2B]">
                      {programme.number}
                    </span>

                    <span className="absolute bottom-3 left-3 right-3 text-[9px] font-extrabold tracking-[1.4px] text-white">
                      {programme.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F7F5EC] text-[#174D35]">
                      <Icon size={21} />
                    </span>

                    <h3 className="mt-3 font-serif text-xl font-bold leading-tight text-[#063D2B]">
                      {programme.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-relaxed text-[#62675F]">
                      {programme.description}
                    </p>

                    <div className="mt-5 border-t border-[#EAE5D8] pt-4">
                      <h4 className="text-[10px] font-extrabold uppercase tracking-wide text-[#174D35]">
                        What You Will Learn
                      </h4>

                      <ul className="mt-3 space-y-2.5">
                        {programme.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-2 text-[10px] leading-relaxed text-[#62675F]"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#B38B21]"
                            />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/256700123456?text=${encodeURIComponent(
                        `Hello Baraka Farm, I would like to enquire about the ${programme.title} programme.`,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#063D2B] px-4 py-3 text-[9px] font-extrabold text-white transition hover:bg-[#174D35]"
                    >
                      ENQUIRE ABOUT THIS PROGRAMME
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-5 py-9 sm:px-8 sm:py-11 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>GETTING STARTED</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Start Learning with Baraka Farm
            </h2>

            <p className="mt-3 text-[12px] leading-relaxed text-[#62675F] sm:text-[13px]">
              Interested in improving your poultry farming skills? Contact our
              team to discuss the programme that best fits your needs and ask
              about current availability.
            </p>

            <a
              href="https://wa.me/256700123456?text=Hello%20Baraka%20Farm%2C%20please%20share%20your%20training%20programme%20availability%20and%20registration%20details."
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              ASK ABOUT REGISTRATION
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <StepCard
              number="01"
              title="Choose a Programme"
              description="Select the subject that best matches your learning goals."
            />
            <StepCard
              number="02"
              title="Contact Our Team"
              description="Ask about current availability, schedules and arrangements."
            />
            <StepCard
              number="03"
              title="Prepare to Learn"
              description="Discuss your goals and get ready to build practical skills."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#063D2B] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#063D2B] via-[#075238] to-[#174D35]" />

        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="max-w-[680px]">
            <p className="text-[9px] font-extrabold tracking-[2px] text-[#E9B949]">
              YOUR FARMING JOURNEY STARTS HERE
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Ready to Strengthen Your Poultry Skills?
            </h2>

            <p className="mt-2 text-[12px] leading-relaxed text-white/85">
              Talk to Baraka Farm about the learning programme that is right
              for you.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
          >
            CONTACT US
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-[2px] w-6 shrink-0 bg-[#E9B949]" />
      <span className="text-[9px] font-extrabold tracking-[2px] text-[#174D35]">
        {children}
      </span>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-xl border border-[#EAE5D8] bg-[#F7F5EC] p-4">
      <span className="font-serif text-2xl font-bold text-[#C79B29]">
        {number}
      </span>

      <h3 className="mt-2 font-serif text-base font-bold text-[#063D2B]">
        {title}
      </h3>

      <p className="mt-2 text-[10px] leading-relaxed text-[#62675F]">
        {description}
      </p>
    </article>
  );
}
