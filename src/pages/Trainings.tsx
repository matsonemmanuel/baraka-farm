
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  GraduationCap,
  Users,
  FileText,
  Leaf,
  ShieldCheck,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  ClipboardList,
  HandCoins,
  Sprout,
  Plus,
  Minus,
  UserRound,
  Building2,
  Bird,
  
} from "lucide-react";
const baseUrl = import.meta.env.BASE_URL;

const programmes = [
  {
    title: "Poultry Housing & Brooding",
    description:
      "Learn how to set up proper housing and manage chicks for healthy growth.",
    image: `${baseUrl}training-brooding.jpg`,
    icon: Bird,
  },
  {
    title: "Feeding & Nutrition",
    description:
      "Understand feed types, formulation and feeding strategies for better growth and productivity.",
    image: `${baseUrl}training-feeding.jpg`,
    icon: Leaf,
  },
  {
    title: "Disease Prevention & Management",
    description:
      "Identify common diseases, practise biosecurity and keep your flock healthy.",
    image: `${baseUrl}training-disease.jpg`,
    icon: ShieldCheck,
  },
  {
    title: "Farm Records & Business Skills",
    description:
      "Learn simple record keeping, cost management and how to grow your poultry business.",
    image: `${baseUrl}training-records.jpg`,
    icon: ClipboardList,
  },
];

const benefits = [
  {
    title: "Practical Learning",
    description: "Learn by doing with real farm demonstrations.",
    icon: GraduationCap,
  },
  {
    title: "Experienced Trainer",
    description: "Learn from a practising poultry farmer.",
    icon: Users,
  },
  {
    title: "Updated Knowledge",
    description: "Get the latest best practices in poultry keeping.",
    icon: FileText,
  },
  {
    title: "Ongoing Support",
    description: "Continued guidance even after the training.",
    icon: Leaf,
  },
];

const audiences = [
  { title: "Beginners starting poultry farming", icon: UserRound },
  { title: "Smallholder farmers", icon: Users },
  { title: "Youth and women groups", icon: HandCoins },
  { title: "Existing farmers looking to improve their skills", icon: Sprout },
  { title: "Schools, groups and organisations", icon: Building2 },
];

const steps = [
  {
    number: "01",
    title: "Choose a Programme",
    description: "Select the training that fits your needs.",
    icon: Users,
  },
  {
    number: "02",
    title: "Register",
    description: "Fill in a simple enrolment form.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Attend Training",
    description: "Join our hands-on training sessions.",
    icon: CalendarDays,
  },
  {
    number: "04",
    title: "Apply & Grow",
    description: "Use the skills on your farm with our continued support.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

const testimonials = [
  {
    name: "Musa K.",
    location: "Kikuube, Uganda",
    image: "/training-farmer-1.jpg",
    quote:
      "The training was very practical and easy to follow. I now manage my flock with more confidence.",
  },
  {
    name: "Sarah N.",
    location: "Namutumba, Uganda",
    image: "/training-farmer-2.jpg",
    quote:
      "I learned so much about feeding and disease prevention. My birds are healthier now.",
  },
  {
    name: "Patrick B.",
    location: "Kyangwali, Uganda",
    image: "/training-farmer-3.jpg",
    quote:
      "Baraka Farm's training changed my approach to poultry farming. My business is growing steadily.",
  },
];

const faqs = [
  {
    question: "Who can join the training?",
    answer:
      "Our training programmes are designed for beginners, smallholder farmers, youth and women groups, existing poultry farmers, schools and organisations interested in poultry farming.",
  },
  {
    question: "How long does the training take?",
    answer:
      "Training duration depends on the programme and the topics covered. Contact our team to confirm the duration of the next available session.",
  },
  {
    question: "Where is the training conducted?",
    answer:
      "Our training can include practical farm demonstrations and group learning. Contact Baraka Farm to confirm the venue and available arrangements for your group.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Please contact our team to confirm whether certificates are available for your chosen training programme.",
  },
];

export default function Training() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* 1. HERO */}
      <section className="relative isolate flex min-h-[300px] items-center sm:min-h-[340px] lg:min-h-[370px]">
        <img
          src="/group.jpg"
          alt="Practical poultry training with a farmer"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

        <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="max-w-[540px]">
            <div className="mb-5 flex items-center gap-2 text-[11px] text-white/85 sm:text-xs">
              <Link to="/" className="hover:text-[#E9B949]">
                Home
              </Link>
              <span className="text-[#E9B949]">›</span>
              <span>Poultry Training</span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[54px]">
              Poultry Training
            </h1>

            <p className="mt-3 max-w-[350px] text-sm leading-relaxed text-white/90 sm:text-base">
              Practical skills for healthier birds, better results and
              sustainable poultry businesses.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/contact?subject=Training%20registration"
                className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-5 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                VIEW TRAINING PROGRAMMES
                <ArrowRight size={15} />
              </Link>

              <a
                href="#training-video"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/80 px-5 py-3 text-[10px] font-bold text-white transition hover:bg-white/10"
              >
                WATCH VIDEO
                <Play size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH */}
      <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <SectionLabel>OUR APPROACH</SectionLabel>

            <h2 className="mt-2 max-w-[450px] font-serif text-3xl font-bold leading-[1.08] text-[#063D2B] sm:text-4xl">
              Hands-on Training
              <br /> for Real Impact
            </h2>

            <p className="mt-3 max-w-[520px] text-[12px] leading-[1.65] text-[#62675F] sm:text-[13px]">
              Our training programmes are designed to give farmers practical
              knowledge and skills they can apply immediately in their own
              farms. We combine theory with hands-on practice, real farm
              demonstrations and continuous support even after the training.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-6 min-[420px]:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-extrabold text-[#202923]">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-[10px] leading-[1.55] text-[#62675F] sm:text-[11px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. TRAINING PROGRAMMES */}
      <section id="programmes" className="bg-white/70 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel>OUR TRAINING PROGRAMMES</SectionLabel>

          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
            Choose a Training Programme
          </h2>

          <p className="mt-2 text-[12px] text-[#62675F] sm:text-[13px]">
            We offer tailored training programmes for both beginners and
            experienced farmers.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {programmes.map((programme) => (
              <article
                key={programme.title}
                className="group overflow-hidden rounded-xl border border-[#EAE5D8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-[170px] overflow-hidden sm:h-[150px] lg:h-[130px]">
                  <img
                    src={programme.image}
                    alt={programme.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-h-[175px] flex-col p-3 sm:p-3.5">
                  <h3 className="font-serif text-base font-bold leading-tight text-[#202923]">
                    {programme.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-[1.55] text-[#62675F]">
                    {programme.description}
                  </p>

                  <Link
                    to={`/contact?subject=${encodeURIComponent(
                      programme.title
                    )}`}
                    className="mt-auto inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-3 py-2 text-[9px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
                  >
                    LEARN MORE
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO CAN JOIN */}
      <section className="bg-[#063D2B] px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-7 lg:grid-cols-[1.7fr_1fr] lg:gap-8">
          <div>
            <SectionLabel>WHO CAN JOIN</SectionLabel>

            <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Is This Training for You?
            </h2>

            <p className="mt-2 text-[12px] text-white/85">
              Our training programmes are open to:
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {audiences.map((audience) => {
                const Icon = audience.icon;

                return (
                  <div
                    key={audience.title}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F5EC] text-[#D7A72E]">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <p className="mt-2 max-w-[130px] text-[10px] leading-[1.5] text-white/90 sm:text-[11px]">
                      {audience.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            id="training-video"
            className="border-t border-white/30 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"
          >
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Watch poultry training video"
              className="group relative block overflow-hidden rounded-xl"
            >
              <img
                src="/training-video.jpg"
                alt="Farmers taking part in practical poultry training"
                loading="lazy"
                className="h-[180px] w-full object-cover transition duration-300 group-hover:scale-[1.02] sm:h-[210px]"
              />

              <span className="absolute inset-0 flex items-center justify-center bg-black/15 transition group-hover:bg-black/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] shadow-lg">
                  <Play size={21} fill="currentColor" />
                </span>
              </span>
            </a>

            <h3 className="mt-3 text-center text-[12px] font-bold">
              See Our Training in Action
            </h3>

            <p className="mx-auto mt-1 max-w-[280px] text-center text-[10px] leading-relaxed text-white/75">
              Watch how we train and support farmers in practical sessions.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TRAINING PROCESS */}
      <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>OUR TRAINING PROCESS</SectionLabel>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#063D2B] sm:text-4xl">
                Simple Steps to Get Started
              </h2>
            </div>

            <Link
              to="/contact?subject=Training%20registration"
              className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-lg bg-[#063D2B] px-4 py-3 text-[9px] font-extrabold text-white transition hover:bg-[#174D35] sm:self-auto"
            >
              REGISTER FOR TRAINING
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-xl border border-white bg-white/65 p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-bold text-[#E9B949]">
                      {step.number}
                    </span>
                    <Icon size={24} className="text-[#D7A72E]" />
                  </div>

                  <h3 className="mt-3 text-[12px] font-extrabold text-[#202923]">
                    {step.title}
                  </h3>

                  <p className="mt-1 max-w-[220px] text-[11px] leading-[1.5] text-[#62675F]">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={20}
                      className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-[#174D35] lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FARMER TESTIMONIALS */}
      <section className="bg-white/55 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] items-center gap-5 lg:grid-cols-[0.8fr_2.2fr]">
          <div>
            <SectionLabel>FARMER TESTIMONIALS</SectionLabel>

            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              What Farmers Say
            </h2>

            <p className="mt-2 text-[11px] leading-relaxed text-[#62675F]">
              Real experiences from farmers who have trained with Baraka Farm.
            </p>

            <Link
              to="/insights"
              className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-4 py-3 text-[9px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              VIEW MORE STORIES
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-xl border border-[#F0EDE4] bg-white p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                  />

                  <div className="min-w-0">
                    <span className="font-serif text-3xl font-bold leading-none text-[#E9B949]">
                      “
                    </span>
                    <p className="text-[10px] italic leading-[1.6] text-[#62675F]">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="text-[10px] font-extrabold text-[#202923]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-0.5 text-[9px] text-[#777C73]">
                    {testimonial.location}
                  </p>
                  <div
                    className="mt-1 text-[12px] tracking-wide text-[#D7A72E]"
                    aria-label="Five stars"
                  >
                    ★★★★★
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#063D2B] sm:text-4xl">
              Training FAQs
            </h2>

            <p className="mt-2 max-w-[300px] text-[12px] leading-relaxed text-[#62675F]">
              Quick answers to common questions about our training programmes.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-lg border border-[#EAE5D8] bg-white/80"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[11px] font-bold text-[#202923] transition hover:bg-white sm:text-xs"
                  >
                    <span>{faq.question}</span>

                    {isOpen ? (
                      <Minus size={16} className="shrink-0 text-[#174D35]" />
                    ) : (
                      <Plus size={16} className="shrink-0 text-[#174D35]" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#EAE5D8] px-4 py-3 text-[11px] leading-relaxed text-[#62675F]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="relative isolate flex min-h-[155px] items-center overflow-hidden sm:min-h-[180px]">
        <img
          src="/bird2.jpg"
          alt="Poultry flock on a farm"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17140E]/95 via-[#17140E]/75 to-[#17140E]/25" />

        <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-5 px-5 py-7 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <div>
            <SectionLabel>READY TO BUILD YOUR POULTRY BUSINESS?</SectionLabel>

            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Join Our Next Training Session
            </h2>

            <p className="mt-2 max-w-[600px] text-[11px] leading-relaxed text-white/85 sm:text-xs">
              Gain practical skills, meet other farmers and take your poultry
              business to the next level.
            </p>
          </div>

          <Link
            to="/contact?subject=Training%20enquiry"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E] sm:self-auto"
          >
            ENQUIRE NOW
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
      <span className="h-[2px] w-4 shrink-0 bg-[#E9B949]" />
      <span className="text-[8px] font-extrabold tracking-[2px] text-[#174D35]">
        {children}
      </span>
    </div>
  );
}
