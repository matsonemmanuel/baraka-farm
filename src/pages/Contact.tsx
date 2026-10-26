/** @jsxRuntime classic */
// @ts-ignore - Provided by the host application when dependencies are not installed locally.
import React, { useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: any;
    }
  }
}

function Link({
  to,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}
// Local icon components keep this file self-contained when lucide-react is unavailable.
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string };

function icon(children: React.ReactNode, viewBox = "0 0 24 24") {
  return function Icon({ size = 24, className, ...props }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...props}
      >
        {children}
      </svg>
    );
  };
}
const baseUrl = import.meta.env.BASE_URL;
const ArrowRight = icon(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);
const GraduationCap = icon(<><path d="m3 8 9-4 9 4-9 4-9-4Z" /><path d="M7 10v4c2 2 8 2 10 0v-4" /><path d="M21 8v6" /></>);
const ShoppingCart = icon(<><circle cx="9" cy="20" r="1" /><circle cx="19" cy="20" r="1" /><path d="M3 4h2l2.7 11.3a2 2 0 0 0 2 1.7h7.7a2 2 0 0 0 2-1.7L21 7H6" /></>);
const UserRoundCheck = icon(<><circle cx="10" cy="8" r="4" /><path d="M3 21v-2a7 7 0 0 1 11-5.7" /><path d="m16 19 2 2 4-5" /></>);
const Handshake = icon(<><path d="m11 14 3-3" /><path d="M8 11 5 8l-3 3 6 6a2 2 0 0 0 3 0l5-5a2 2 0 0 0 0-3l-4-4-3 3 4 4" /><path d="m16 10 3 3 3-3-6-6-3 3" /></>);
const Phone = icon(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92Z" />);
const Mail = icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>);
const MapPin = icon(<><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>);
const Clock = icon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>);
const MessageCircle = icon(<><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" /><path d="M8 9h8M8 13h5" /></>);
const ChevronDown = icon(<path d="m6 9 6 6 6-6" />);
const ChevronUp = icon(<path d="m18 15-6-6-6 6" />);
const Users = icon(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>);
const Leaf = icon(<><path d="M11 20A7 7 0 0 1 4 13c0-5 7-9 16-9 0 9-4 16-9 16Z" /><path d="M4 13c4 0 9 0 16-9" /></>);
const CheckCircle2 = icon(<><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>);

const enquiryTypes = [
  {
    title: "Training Enquiries",
    description: "Ask about our training programmes, schedules and registration.",
    icon: GraduationCap,
    subject: "Poultry training",
  },
  {
    title: "Product Orders",
    description: "Enquire about feeds, equipment and other supplies.",
    icon: ShoppingCart,
    subject: "Product order",
  },
  {
    title: "Farm Consultation",
    description: "Get expert advice for your poultry farm.",
    icon: UserRoundCheck,
    subject: "Farm consultation",
  },
  {
    title: "Partnerships",
    description: "Explore collaboration and partnership opportunities.",
    icon: Handshake,
    subject: "Partnership",
  },
];

const faqs = [
  {
    question: "Where is Baraka Farm located?",
    answer:
      "Baraka Farm is based in Kikuube, Uganda. Please contact us before travelling so we can confirm directions and arrange a suitable visit.",
  },
  {
    question: "What training programmes do you offer?",
    answer:
      "Our poultry learning topics include housing and brooding, feeding and nutrition, disease prevention, farm records and business basics. Contact us for current schedules and registration details.",
  },
  {
    question: "How can I place an order for poultry feeds or equipment?",
    answer:
      "Send us a message with the products, quantities and your location. Our team can confirm availability, pricing and delivery or collection arrangements.",
  },
  {
    question: "Do you offer farm consultation services?",
    answer:
      "You can contact us to discuss your flock, housing, feeding or farm-management needs. We will advise on the most appropriate support available.",
  },
  {
    question: "How quickly do you respond to enquiries?",
    answer:
      "We aim to respond to enquiries within 24 hours. Response times may vary during busy periods.",
  },
];

const subjectOptions = [
  "Poultry training",
  "Product order",
  "Farm consultation",
  "Partnership",
  "Farm equipment",
  "General enquiry",
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [subject, setSubject] = useState("");
  const [sent, setSent] = useState(false);

  function chooseEnquiry(value: string) {
    setSubject(value);
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Frontend-only demonstration. Connect this form to an API or form service
    // before using it to receive real enquiries.
    setSent(true);
  }

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* 1. HERO */}
      <section className="relative isolate min-h-[300px] overflow-hidden sm:min-h-[340px] lg:min-h-[350px]">
        <img
          src={`${baseUrl}housing.png`}
          alt="Poultry farmer holding a healthy chicken in a poultry house"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/15" />

        <div className="mx-auto grid min-h-[300px] max-w-[1440px] gap-8 px-5 py-7 sm:min-h-[340px] sm:px-8 lg:min-h-[350px] lg:grid-cols-[1fr_235px] lg:items-center lg:px-12">
          <div className="max-w-[650px]">
            <div className="mb-5 flex items-center gap-2 text-[11px] text-white/85">
              <Link to="/" className="transition hover:text-[#E9B949]">
                Home
              </Link>
              <span className="text-[#E9B949]">›</span>
              <span>Contact Us</span>
            </div>

            <p className="text-[9px] font-extrabold tracking-[2px] text-[#E9B949] sm:text-[10px]">
              GET IN TOUCH
            </p>

            <h1 className="mt-2 font-serif text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-[60px]">
              Contact Us
            </h1>

            <p className="mt-3 max-w-[500px] text-sm leading-relaxed text-white/90 sm:text-base">
              We are here to support your poultry journey. Reach out for
              training, product enquiries, farm consultation or any other
              information.
            </p>
          </div>

          <div className="hidden space-y-4 lg:block">
            <HeroBenefit
              icon={<MessageCircle size={19} />}
              title="Quick Response"
              description="We reply within 24 hours"
            />
            <HeroBenefit
              icon={<Users size={19} />}
              title="Expert Support"
              description="Get professional advice"
            />
            <HeroBenefit
              icon={<Leaf size={19} />}
              title="Farmer Focused"
              description="We are here for your success"
            />
          </div>
        </div>
      </section>

      {/* 2. CONTACT REASONS */}
      <section className="px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-3 min-[520px]:grid-cols-2 xl:grid-cols-4">
          {enquiryTypes.map(({ title, description, icon: Icon, subject: value }) => (
            <button
              key={title}
              type="button"
              onClick={() => chooseEnquiry(value)}
              className="group flex min-h-[126px] items-start gap-3 rounded-xl border border-transparent bg-white/85 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#E9B949] hover:shadow-md sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] transition group-hover:bg-[#D7A72E]">
                <Icon size={23} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-serif text-base font-bold leading-tight text-[#202923]">
                  {title}
                </span>
                <span className="mt-1 block text-[11px] leading-relaxed text-[#62675F]">
                  {description}
                </span>
                <span className="mt-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                  <ArrowRight size={14} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. CONTACT FORM + LOCATION / CONTACT DETAILS */}
      <section className="px-5 pb-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-4 lg:grid-cols-[1.05fr_1fr]">
          <div
            id="contact-form"
            className="scroll-mt-24 rounded-xl border border-[#ECE8DE] bg-white p-5 shadow-sm sm:p-6"
          >
            <SectionLabel>SEND US A MESSAGE</SectionLabel>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              We’d Love to Hear from You
            </h2>
            <p className="mt-2 text-[12px] leading-relaxed text-[#62675F] sm:text-[13px]">
              Fill in the form below and we will get back to you as soon as
              possible. You can also reach us directly through the contact
              details on the right.
            </p>

            {sent ? (
              <div
                role="status"
                className="mt-6 rounded-xl border border-[#C8E5D4] bg-[#F0FAF3] p-5 text-[#063D2B]"
              >
                <CheckCircle2 size={28} className="mb-2" />
                <h3 className="font-serif text-xl font-bold">Thank you for contacting us.</h3>
                <p className="mt-1 text-sm">
                  Your message has been prepared in this demo. Connect the form
                  to a backend or form service to deliver real enquiries.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-4 text-sm font-bold underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <FormField label="Full Name" required>
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className={fieldClass}
                    />
                  </FormField>
                  <FormField label="Phone Number" required>
                    <input
                      name="phone"
                      required
                      type="tel"
                      autoComplete="tel"
                      placeholder="e.g. +256 773 102 927"
                      className={fieldClass}
                    />
                  </FormField>
                  <FormField label="Email Address">
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@email.com"
                      className={fieldClass}
                    />
                  </FormField>
                  <FormField label="Location / District">
                    <input
                      name="location"
                      autoComplete="address-level2"
                      placeholder="e.g. Kikuube, Uganda"
                      className={fieldClass}
                    />
                  </FormField>
                </div>

                <FormField label="Subject" required>
                  <select
                    name="subject"
                    required
                    value={subject}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSubject(event.target.value)}
                    className={fieldClass}
                  >
                    <option value="">Select a subject</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Message" required>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    className={`${fieldClass} min-h-[96px] resize-y`}
                  />
                </FormField>

                <button
                  type="submit"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-xl bg-[#E9B949] px-5 py-3 text-[10px] font-extrabold tracking-wide text-[#063D2B] transition hover:bg-[#D7A72E] focus:outline-none focus:ring-2 focus:ring-[#063D2B] focus:ring-offset-2"
                >
                  <Mail size={15} />
                  SEND MESSAGE
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {/* Map */}
            <section className="overflow-hidden rounded-xl border border-[#ECE8DE] bg-white shadow-sm">
              <div className="bg-[#063D2B] px-5 py-4 text-white sm:px-6">
                <h2 className="font-serif text-2xl font-bold">Our Location</h2>
                <p className="mt-1 text-[11px] text-white/85 sm:text-[12px]">
                  Visit our farm or get directions using the map below.
                </p>
              </div>
              <iframe
                title="Map showing Kikuube, Uganda"
                src="https://maps.google.com/maps?q=Kikuube%2C%20Uganda&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="h-[230px] w-full border-0 sm:h-[250px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </section>

            {/* Contact information */}
            <section className="rounded-xl border border-[#ECE8DE] bg-white p-5 shadow-sm sm:p-6">
              <SectionLabel>CONTACT INFORMATION</SectionLabel>
              <p className="mt-2 text-[12px] text-[#62675F]">
                Use the details below to reach us directly.
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <ContactDetail
                  icon={<Phone size={19} />}
                  title="Phone / WhatsApp"
                  value="+256 773 102 927"
                  note="Chat with us on WhatsApp"
                  href="tel:+256773102927"
                />
                <ContactDetail
                  icon={<Mail size={19} />}
                  title="Email Address"
                  value="baraka777@gmail.com"
                  note="We respond within 24 hours"
                  href="mailto:baraka777@gmail.com"
                />
                <ContactDetail
                  icon={<MapPin size={19} />}
                  title="Our Location"
                  value="Kikuube, Uganda"
                  note="Visit our farm"
                  href="https://maps.google.com/?q=Kikuube+Uganda"
                />
                <ContactDetail
                  icon={<Clock size={19} />}
                  title="Working Hours"
                  value="Mon – Sat: 8:00 AM – 5:00 PM"
                  note="Sunday: By appointment"
                />
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* 4. QUICK CONTACT CTA */}
      <section className="relative isolate overflow-hidden bg-[#202923] px-5 py-7 text-white sm:px-8 sm:py-8 lg:px-12">
        <img
          src="/contact-quick-chat.jpg"
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-[#10271D]/90 to-black/70" />
        <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionLabel light>PREFER A QUICK CHAT?</SectionLabel>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Contact Us Instantly
            </h2>
            <p className="mt-2 text-[11px] text-white/85 sm:text-[12px]">
              Choose your preferred channel and get in touch with our team.
            </p>
          </div>

          <div className="grid gap-2 min-[480px]:grid-cols-3 lg:min-w-[465px]">
            <a
              href="https://wa.me/256700123456?text=Hello%20Baraka%20Farm%2C%20I%20would%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[60px] items-center gap-3 rounded-xl bg-[#078A4D] px-4 py-3 text-white transition hover:bg-[#06743F]"
            >
              <MessageCircle size={25} />
              <span>
                <span className="block text-[11px] font-extrabold">WhatsApp</span>
                <span className="mt-0.5 block text-[9px]">Chat Now →</span>
              </span>
            </a>
            <a
              href="tel:+256773102927"
              className="flex min-h-[60px] items-center gap-3 rounded-xl bg-[#E9B949] px-4 py-3 text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              <Phone size={23} />
              <span>
                <span className="block text-[11px] font-extrabold">Call Us</span>
                <span className="mt-0.5 block text-[9px]">+256 773 102 927</span>
              </span>
            </a>
            <a
              href="mailto:baraka777@gmail.com"
              className="flex min-h-[60px] items-center gap-3 rounded-xl bg-white px-4 py-3 text-[#063D2B] transition hover:bg-[#F0EEE6]"
            >
              <Mail size={23} />
              <span>
                <span className="block text-[11px] font-extrabold">Email Us</span>
                <span className="mt-0.5 block text-[9px]">Send an Email</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div>
            <SectionLabel>QUICK ANSWERS</SectionLabel>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 max-w-[480px] text-[12px] leading-relaxed text-[#62675F]">
              Here are some common questions from our farmers and customers.
            </p>
            <Link
              to="/insights"
              className="mt-5 inline-flex min-h-10 items-center justify-center gap-3 rounded-xl bg-[#063D2B] px-5 py-3 text-[9px] font-extrabold text-white transition hover:bg-[#174D35]"
            >
              VIEW ALL FAQS <ArrowRight size={14} />
            </Link>
          </div>

          <div className="divide-y divide-[#EAE5D8] rounded-xl bg-white/75 px-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-3 text-left text-[10px] font-bold text-[#202923] transition hover:text-[#08734B] sm:text-[11px]"
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
      </section>
    </main>
  );
}

const fieldClass =
  "w-full rounded-lg border border-[#E2E0D8] bg-white px-3 py-2.5 text-[11px] text-[#202923] outline-none transition placeholder:text-[#92958E] focus:border-[#174D35] focus:ring-2 focus:ring-[#174D35]/10";

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
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
        {icon}
      </span>
      <div>
        <h2 className="font-serif text-sm font-bold text-white">{title}</h2>
        <p className="mt-0.5 max-w-[165px] text-[10px] leading-relaxed text-white/85">
          {description}
        </p>
      </div>
    </div>
  );
}

function FormField({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-[11px] font-bold text-[#202923]">
      <span className="mb-1.5 block">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactDetail({
  icon,
  title,
  value,
  note,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  note: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#08734B] text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-extrabold text-[#202923]">
          {title}
        </span>
        <span className="mt-0.5 block break-words text-[11px] text-[#202923]">
          {value}
        </span>
        <span className="mt-0.5 block text-[9px] text-[#777B73]">{note}</span>
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-start gap-3 rounded-lg p-1 transition hover:bg-[#F7F5EC]"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-start gap-3 rounded-lg p-1">{content}</div>
  );
}
