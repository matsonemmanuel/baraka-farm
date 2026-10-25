
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  Package,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  Truck,
  Warehouse,
  Wheat,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "256700123456";

const productOptions = [
  {
    label: "Poultry Feeds",
    description: "Starter, growers, finisher and layer feeds",
    icon: Wheat,
  },
  {
    label: "Feeders & Drinkers",
    description: "Feeding and drinking equipment",
    icon: ShoppingBasket,
  },
  {
    label: "Vaccines & Medicines",
    description: "Poultry health and biosecurity supplies",
    icon: ShieldCheck,
  },
  {
    label: "Housing Equipment",
    description: "Brooding, housing and ventilation equipment",
    icon: Warehouse,
  },
  {
    label: "Farm Tools",
    description: "Cleaning, spraying and maintenance tools",
    icon: Package,
  },
  {
    label: "Supply Packages",
    description: "Starter, growth or commercial packages",
    icon: ClipboardCheck,
  },
  {
    label: "Other Supplies",
    description: "Other poultry farming requirements",
    icon: Sprout,
  },
];

type QuoteForm = {
  fullName: string;
  phone: string;
  email: string;
  farmName: string;
  location: string;
  customerType: string;
  birdType: string;
  flockSize: string;
  farmStage: string;
  budget: string;
  delivery: string;
  timeline: string;
  details: string;
};

const initialForm: QuoteForm = {
  fullName: "",
  phone: "",
  email: "",
  farmName: "",
  location: "",
  customerType: "Poultry farmer",
  birdType: "",
  flockSize: "",
  farmStage: "",
  budget: "",
  delivery: "Need delivery information",
  timeline: "As soon as possible",
  details: "",
};

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

const inputClass =
  "mt-2 min-h-12 w-full rounded-xl border border-[#DDE1D6] bg-white px-4 py-3 text-sm text-[#202923] outline-none transition placeholder:text-[#9AA197] focus:border-[#174D35] focus:ring-2 focus:ring-[#174D35]/10";

const labelClass = "text-sm font-bold text-[#28392E]";

function RequiredMark() {
  return <span className="ml-1 text-red-600">*</span>;
}

export default function RequestQuote() {
  const [form, setForm] = useState<QuoteForm>(initialForm);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");

  const updateField = (field: keyof QuoteForm, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: "" }));
    setNotice("");
  };

  const toggleProduct = (product: string) => {
    setSelectedProducts((previous) =>
      previous.includes(product)
        ? previous.filter((item) => item !== product)
        : [...previous, product],
    );

    setErrors((previous) => ({ ...previous, products: "" }));
    setNotice("");
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter a contact phone number.";
    } else if (form.phone.trim().replace(/[\s()+-]/g, "").length < 7) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.location.trim()) {
      nextErrors.location = "Please tell us where your farm is located.";
    }

    if (selectedProducts.length === 0) {
      nextErrors.products = "Select at least one product or supply category.";
    }

    if (!form.details.trim()) {
      nextErrors.details =
        "Briefly describe what you need so we can prepare your enquiry.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("");

    if (!validateForm()) {
      document
        .getElementById(
          Object.keys(errors)[0] === "products" ? "product-selection" : "quote-form",
        )
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const message = [
      "BARAKA FARM — QUOTATION REQUEST",
      "",
      "CUSTOMER DETAILS",
      `Name: ${form.fullName.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim() || "Not provided"}`,
      `Farm/business: ${form.farmName.trim() || "Not provided"}`,
      `Location: ${form.location.trim()}`,
      `Customer type: ${form.customerType}`,
      "",
      "PRODUCTS & SUPPLIES",
      ...selectedProducts.map((product) => `• ${product}`),
      "",
      "FARM DETAILS",
      `Bird type: ${form.birdType || "Not specified"}`,
      `Flock size: ${form.flockSize || "Not specified"}`,
      `Farm stage: ${form.farmStage || "Not specified"}`,
      "",
      "QUOTATION PREFERENCES",
      `Budget: ${form.budget || "Open to recommendations"}`,
      `Delivery: ${form.delivery}`,
      `Timeline: ${form.timeline}`,
      "",
      "REQUIREMENTS",
      form.details.trim(),
      "",
      "Please review my requirements and share available products, current prices, quantities and delivery information.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Opens WhatsApp with the request prepared for the customer to review and send.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setNotice(
      "Your quotation details are prepared for WhatsApp. Review the message in the new tab and press Send to submit your enquiry.",
    );
  };

  const resetForm = () => {
    setForm(initialForm);
    setSelectedProducts([]);
    setErrors({});
    setNotice("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[390px] items-center bg-[#063D2B] py-16 sm:min-h-[440px] sm:py-20">
        <img
          src="/bird2.jpg"
          alt="Poultry farming at Baraka Farm"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03271C]/95 via-[#063D2B]/85 to-[#063D2B]/40" />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
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
            <span className="text-[#E9B949]">Request a Quote</span>
          </div>

          <div className="max-w-3xl">
            <SectionLabel light>Let's plan your supplies</SectionLabel>
            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Tell Us What Your Farm
              <span className="block text-[#E9B949]">Needs.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Share your requirements and get in touch with Baraka Farm to
              discuss product availability, quantities, pricing and delivery.
              We make it easier to plan your next purchase.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#E9B949]" />
                Tailored enquiries
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#E9B949]" />
                Clear requirements
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle size={17} className="text-[#E9B949]" />
                WhatsApp handoff
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro trust strip */}
      <section className="border-b border-[#E4E5D8] bg-white px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#174D35]/10 text-[#174D35]">
              <ClipboardCheck size={22} />
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#063D2B]">
                Tell us your needs
              </p>
              <p className="mt-1 text-xs text-[#778075]">
                Choose the supplies you need
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9B949]/20 text-[#8A6A18]">
              <FileText size={22} />
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#063D2B]">
                Discuss your quotation
              </p>
              <p className="mt-1 text-xs text-[#778075]">
                Confirm prices and availability
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#174D35]/10 text-[#174D35]">
              <Truck size={22} />
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#063D2B]">
                Plan your order
              </p>
              <p className="mt-1 text-xs text-[#778075]">
                Discuss collection or delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main form and live summary */}
      <section id="quote-form" className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-2xl">
            <SectionLabel>Quotation request form</SectionLabel>
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Let's put your request together.
            </h2>
            <p className="mt-4 leading-7 text-[#687168]">
              Complete the details below. Fields marked with an asterisk are
              required. Your request summary updates as you go.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_370px]">
              {/* Main form */}
              <div className="space-y-7">
                {/* Step 1 */}
                <section className="rounded-3xl border border-[#E4E5D8] bg-white p-5 shadow-sm sm:p-8">
                  <div className="mb-7 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#063D2B] font-extrabold text-[#E9B949]">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#063D2B]">
                        Your contact information
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#7A8278]">
                        Tell us who we should contact about this request.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className={labelClass}>
                        Full name <RequiredMark />
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        className={inputClass}
                        placeholder="Enter your full name"
                        value={form.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        aria-invalid={Boolean(errors.fullName)}
                        required
                      />
                      {errors.fullName && (
                        <p className="mt-2 text-xs text-red-600">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone number <RequiredMark />
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={inputClass}
                        placeholder="e.g. 07XX XXX XXX"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        required
                      />
                      {errors.phone && (
                        <p className="mt-2 text-xs text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={inputClass}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="farmName" className={labelClass}>
                        Farm or business name
                      </label>
                      <input
                        id="farmName"
                        name="farmName"
                        autoComplete="organization"
                        className={inputClass}
                        placeholder="Your farm name (optional)"
                        value={form.farmName}
                        onChange={(e) => updateField("farmName", e.target.value)}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="location" className={labelClass}>
                        Farm or delivery location <RequiredMark />
                      </label>
                      <div className="relative">
                        <MapPin
                          size={18}
                          className="absolute left-4 top-[26px] -translate-y-1/2 text-[#829083]"
                        />
                        <input
                          id="location"
                          name="location"
                          autoComplete="street-address"
                          className={`${inputClass} pl-11`}
                          placeholder="District, town or village"
                          value={form.location}
                          onChange={(e) => updateField("location", e.target.value)}
                          aria-invalid={Boolean(errors.location)}
                          required
                        />
                      </div>
                      {errors.location && (
                        <p className="mt-2 text-xs text-red-600">
                          {errors.location}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="customerType" className={labelClass}>
                        I am a...
                      </label>
                      <select
                        id="customerType"
                        className={inputClass}
                        value={form.customerType}
                        onChange={(e) => updateField("customerType", e.target.value)}
                      >
                        <option>Poultry farmer</option>
                        <option>Starting a poultry farm</option>
                        <option>Farm supply retailer</option>
                        <option>Institution or organisation</option>
                        <option>Other business</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Step 2 */}
                <section
                  id="product-selection"
                  className="rounded-3xl border border-[#E4E5D8] bg-white p-5 shadow-sm sm:p-8"
                >
                  <div className="mb-7 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#063D2B] font-extrabold text-[#E9B949]">
                      02
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#063D2B]">
                        What do you need?
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#7A8278]">
                        Select every category you would like included in your
                        quotation.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {productOptions.map((product) => {
                      const Icon = product.icon;
                      const selected = selectedProducts.includes(product.label);

                      return (
                        <button
                          key={product.label}
                          type="button"
                          onClick={() => toggleProduct(product.label)}
                          aria-pressed={selected}
                          className={`group relative flex min-h-[112px] items-start gap-3 rounded-2xl border p-4 text-left transition duration-200 ${
                            selected
                              ? "border-[#174D35] bg-[#174D35]/[0.06] ring-1 ring-[#174D35]"
                              : "border-[#E4E5D8] bg-[#FCFCF8] hover:border-[#A8B8A5] hover:bg-[#F7F5EC]"
                          }`}
                        >
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                              selected
                                ? "bg-[#174D35] text-white"
                                : "bg-[#E9B949]/20 text-[#174D35]"
                            }`}
                          >
                            <Icon size={20} />
                          </span>

                          <span className="min-w-0 flex-1 pr-4">
                            <span className="block text-sm font-extrabold text-[#063D2B]">
                              {product.label}
                            </span>
                            <span className="mt-1.5 block text-xs leading-5 text-[#7A8278]">
                              {product.description}
                            </span>
                          </span>

                          <span
                            className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border transition ${
                              selected
                                ? "border-[#174D35] bg-[#174D35] text-white"
                                : "border-[#D3D9CF] bg-white text-transparent"
                            }`}
                          >
                            <Check size={12} strokeWidth={3} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {errors.products && (
                    <p className="mt-3 text-sm text-red-600">
                      {errors.products}
                    </p>
                  )}

                  {selectedProducts.length > 0 && (
                    <div className="mt-5 rounded-xl bg-[#F7F5EC] p-4">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#174D35]">
                        Selected categories ({selectedProducts.length})
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedProducts.map((product) => (
                          <span
                            key={product}
                            className="inline-flex items-center gap-2 rounded-full border border-[#D9E1D4] bg-white px-3 py-2 text-xs font-bold text-[#174D35]"
                          >
                            {product}
                            <button
                              type="button"
                              onClick={() => toggleProduct(product)}
                              aria-label={`Remove ${product}`}
                              className="rounded-full p-0.5 transition hover:bg-[#E4E5D8]"
                            >
                              <X size={13} />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </section>

                {/* Step 3 */}
                <section className="rounded-3xl border border-[#E4E5D8] bg-white p-5 shadow-sm sm:p-8">
                  <div className="mb-7 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#063D2B] font-extrabold text-[#E9B949]">
                      03
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#063D2B]">
                        Tell us about your farm
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#7A8278]">
                        These details help us understand the quantities and
                        products you may need.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="birdType" className={labelClass}>
                        Type of birds
                      </label>
                      <select
                        id="birdType"
                        className={inputClass}
                        value={form.birdType}
                        onChange={(e) => updateField("birdType", e.target.value)}
                      >
                        <option value="">Select if applicable</option>
                        <option>Broilers</option>
                        <option>Layers</option>
                        <option>Local / indigenous chickens</option>
                        <option>Mixed flock</option>
                        <option>Other poultry</option>
                        <option>Not applicable yet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="flockSize" className={labelClass}>
                        Flock size
                      </label>
                      <select
                        id="flockSize"
                        className={inputClass}
                        value={form.flockSize}
                        onChange={(e) => updateField("flockSize", e.target.value)}
                      >
                        <option value="">Select flock size</option>
                        <option>Not started yet</option>
                        <option>1–100 birds</option>
                        <option>101–500 birds</option>
                        <option>501–1,000 birds</option>
                        <option>1,001–5,000 birds</option>
                        <option>More than 5,000 birds</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="farmStage" className={labelClass}>
                        Farm stage
                      </label>
                      <select
                        id="farmStage"
                        className={inputClass}
                        value={form.farmStage}
                        onChange={(e) => updateField("farmStage", e.target.value)}
                      >
                        <option value="">Select farm stage</option>
                        <option>Planning to start</option>
                        <option>Preparing for chicks</option>
                        <option>Already raising birds</option>
                        <option>Expanding an existing farm</option>
                        <option>Commercial operation</option>
                        <option>Retail / resale</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className={labelClass}>
                        Estimated budget (UGX)
                      </label>
                      <select
                        id="budget"
                        className={inputClass}
                        value={form.budget}
                        onChange={(e) => updateField("budget", e.target.value)}
                      >
                        <option value="">Prefer to discuss</option>
                        <option>Below UGX 100,000</option>
                        <option>UGX 100,000–500,000</option>
                        <option>UGX 500,001–1,000,000</option>
                        <option>UGX 1,000,001–5,000,000</option>
                        <option>Above UGX 5,000,000</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Step 4 */}
                <section className="rounded-3xl border border-[#E4E5D8] bg-white p-5 shadow-sm sm:p-8">
                  <div className="mb-7 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#063D2B] font-extrabold text-[#E9B949]">
                      04
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#063D2B]">
                        Delivery and requirements
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#7A8278]">
                        Let us know what you need and when you need it.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="delivery" className={labelClass}>
                        Delivery preference
                      </label>
                      <select
                        id="delivery"
                        className={inputClass}
                        value={form.delivery}
                        onChange={(e) => updateField("delivery", e.target.value)}
                      >
                        <option>Need delivery information</option>
                        <option>Delivery to my farm</option>
                        <option>I will arrange collection</option>
                        <option>Discuss available options</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className={labelClass}>
                        When do you need the supplies?
                      </label>
                      <select
                        id="timeline"
                        className={inputClass}
                        value={form.timeline}
                        onChange={(e) => updateField("timeline", e.target.value)}
                      >
                        <option>As soon as possible</option>
                        <option>Within one week</option>
                        <option>Within two to four weeks</option>
                        <option>Planning for a future date</option>
                        <option>Just comparing options</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="details" className={labelClass}>
                        Describe what you need <RequiredMark />
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={5}
                        className={`${inputClass} resize-y`}
                        placeholder="For example: I need feed for 300 broilers, 10 feeders and suitable drinkers. Please share available options and prices."
                        value={form.details}
                        onChange={(e) => updateField("details", e.target.value)}
                        aria-invalid={Boolean(errors.details)}
                        required
                      />
                      <div className="mt-2 flex items-start justify-between gap-4">
                        {errors.details ? (
                          <p className="text-xs text-red-600">
                            {errors.details}
                          </p>
                        ) : (
                          <p className="text-xs leading-5 text-[#8A9187]">
                            Include product names, quantities, sizes or any
                            special requirements you know.
                          </p>
                        )}
                        <span className="shrink-0 text-xs text-[#8A9187]">
                          {form.details.length} characters
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Submission */}
                <section className="rounded-3xl border border-[#E4E5D8] bg-white p-5 shadow-sm sm:p-8">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={23}
                      className="mt-0.5 shrink-0 text-[#174D35]"
                    />
                    <div>
                      <h3 className="font-extrabold text-[#063D2B]">
                        Your information
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#7A8278]">
                        Your details will be included in the WhatsApp message
                        you prepare. Please review the message before sending
                        it. Do not include passwords, payment PINs or other
                        sensitive information.
                      </p>
                    </div>
                  </div>

                  {notice && (
                    <div
                      role="status"
                      className="mt-6 rounded-2xl border border-[#B8D9B7] bg-[#F0F8EF] p-4 text-sm leading-6 text-[#174D35]"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          size={21}
                          className="mt-0.5 shrink-0"
                        />
                        <p>{notice}</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#063D2B] px-6 py-4 text-sm font-extrabold text-white shadow-md transition hover:bg-[#174D35] focus:outline-none focus:ring-2 focus:ring-[#E9B949] focus:ring-offset-2 sm:w-auto sm:min-w-[260px]"
                  >
                    <MessageCircle size={19} />
                    Prepare Quote on WhatsApp
                    <ArrowRight size={18} />
                  </button>

                  <p className="mt-4 text-xs leading-5 text-[#8A9187]">
                    This prepares a WhatsApp message. Your enquiry is not
                    submitted until you review and send that message.
                  </p>
                </section>
              </div>

              {/* Live summary */}
              <aside className="space-y-5 lg:sticky lg:top-32">
                <div className="overflow-hidden rounded-3xl bg-[#063D2B] text-white shadow-lg">
                  <div className="border-b border-white/10 p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E9B949]">
                          Live overview
                        </p>
                        <h3 className="mt-2 text-xl font-extrabold">
                          Your Request
                        </h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#E9B949]">
                        <FileText size={24} />
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      Your summary updates as you complete the form.
                    </p>
                  </div>

                  <div className="space-y-6 p-6 sm:p-7">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                        Contact
                      </p>
                      <p className="mt-2 break-words font-bold">
                        {form.fullName.trim() || "Your name"}
                      </p>
                      <p className="mt-1 break-words text-sm text-white/65">
                        {form.phone.trim() || "Phone number"}
                      </p>
                      <p className="mt-1 break-words text-sm text-white/65">
                        {form.location.trim() || "Farm / delivery location"}
                      </p>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                          Selected supplies
                        </p>
                        <span className="rounded-full bg-[#E9B949] px-2.5 py-1 text-xs font-extrabold text-[#063D2B]">
                          {selectedProducts.length}
                        </span>
                      </div>

                      {selectedProducts.length ? (
                        <ul className="mt-3 space-y-2.5">
                          {selectedProducts.map((product) => (
                            <li
                              key={product}
                              className="flex items-start gap-2 text-sm leading-5 text-white/85"
                            >
                              <CheckCircle2
                                size={16}
                                className="mt-0.5 shrink-0 text-[#E9B949]"
                              />
                              {product}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-3 text-sm leading-6 text-white/50">
                          Your chosen product categories will appear here.
                        </p>
                      )}
                    </div>

                    <div className="h-px bg-white/10" />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                        Farm details
                      </p>
                      <div className="mt-3 space-y-2 text-sm text-white/80">
                        <p>
                          <span className="text-white/50">Birds:</span>{" "}
                          {form.birdType || "Not specified"}
                        </p>
                        <p>
                          <span className="text-white/50">Flock:</span>{" "}
                          {form.flockSize || "Not specified"}
                        </p>
                        <p>
                          <span className="text-white/50">Farm stage:</span>{" "}
                          {form.farmStage || "Not specified"}
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                        Budget and timing
                      </p>
                      <p className="mt-3 text-sm text-white/85">
                        {form.budget || "Budget open for discussion"}
                      </p>
                      <p className="mt-2 text-sm text-white/65">
                        {form.timeline}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E9B949]/30 bg-white/[0.05] p-4">
                      <p className="text-sm font-extrabold text-[#E9B949]">
                        No obligation to order
                      </p>
                      <p className="mt-2 text-xs leading-5 text-white/65">
                        Use your quotation to review options, pricing and
                        availability before deciding what to purchase.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-[#E4E5D8] bg-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9B949]/20 text-[#174D35]">
                    <Clock3 size={22} />
                  </div>
                  <h3 className="mt-4 font-extrabold text-[#063D2B]">
                    Need help with the form?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#7A8278]">
                    You can contact our team directly to discuss your supply
                    requirements.
                  </p>
                  <a
                    href={`https://wa.me/${256773102927}?text=${encodeURIComponent("Hello Baraka Farm, I need assistance with a quotation for poultry farming supplies.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#174D35] transition hover:text-[#9A7924]"
                  >
                    <MessageCircle size={17} />
                    Chat with us
                    <ArrowRight size={16} />
                  </a>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#DDE1D6] bg-transparent px-5 py-3 text-sm font-bold text-[#59645B] transition hover:border-[#174D35] hover:bg-white hover:text-[#063D2B]"
                >
                  <ArrowLeft size={16} />
                  Clear and start again
                </button>
              </aside>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-[#E4E5D8] bg-white p-6 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Explore before you enquire</SectionLabel>
            <h2 className="font-serif text-2xl font-bold text-[#063D2B] sm:text-3xl">
              Still deciding what your farm needs?
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#687168]">
              Browse our product catalogue or compare the supply package
              options before preparing your quotation request.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#063D2B] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#174D35]"
            >
              Browse Products <ArrowRight size={17} />
            </Link>
            <Link
              to="/products/supply-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#DDE1D6] px-6 py-3 text-sm font-extrabold text-[#174D35] transition hover:bg-[#F7F5EC]"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
