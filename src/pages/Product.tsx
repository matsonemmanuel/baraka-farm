
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Truck,
  Headset,
  House,
  Sprout,
  Bird,
  Droplets,
  Flame,
  Syringe,
  Wrench,
  Egg,
  BadgeCheck,
  HandCoins,
  Award,
  Users,
  MessageCircle,
  X,
} from "lucide-react";

type Product = {
  name: string;
  size: string;
  price: number;
  description: string;
  category: string;
  image: string;
  badge?: string;
};

const baseUrl = import.meta.env.BASE_URL;
const categories = [
  { name: "Poultry Feeds", image: `${baseUrl}feed booster.png`, icon: Bird },
  { name: "Feeders", image: `${baseUrl}feeder1.png`, icon: House },
  { name: "Drinkers", image: `${baseUrl}drinker2.png`, icon: Droplets },
  {
    name: "Heating & Brooding",
    image: `${baseUrl}feeding6.png`,
    icon: Flame,
  },
  {
    name: "Vaccines & Medicines",
    image: `${baseUrl}vaccine.png`,
    icon: Syringe,
  },
  {
    name: "Housing Equipment",
    image: `${baseUrl}wire.png`,
    icon: House,
  },
  { name: "Farm Tools", image: `${baseUrl}spade.png`,icon: Wrench },
  { name: "Other Supplies", image: `${baseUrl}drinkers.png`, icon: Egg },
];

const products: Product[] = [
  {
    name: "Broiler Starter Feed",
    size: "50kg",
    price: 120000,
    description: "High-quality starter feed for faster and healthier growth.",
    category: "Poultry Feeds",
    image: `${baseUrl}feed booster.png`,
    badge: "Best Seller",
  },
  {
    name: "Layer Feed",
    size: "50kg",
    price: 115000,
    description: "Balanced nutrition for stronger layers and better egg production.",
    category: "Poultry Feeds",
    image: `${baseUrl}sack.png`,
  },
  {
    name: "Chick Feeder",
    size: "5kg",
    price: 18000,
    description: "Durable plastic feeder for chicks, easy to clean.",
    category: "Feeders",
    image: `${baseUrl}feeder1.png`,
  },
  {
    name: "Chick Drinker",
    size: "6L",
    price: 20000,
    description: "Clean and safe water for healthier chicks.",
    category: "Drinkers",
    image: `${baseUrl}drinker2.png`,
  },
  {
    name: "Brooding Lamp",
    size: "250W",
    price: 45000,
    description: "Provides the right warmth for healthy chick growth.",
    category: "Heating & Brooding",
    image: `${baseUrl}feeding6.png`,
  },
  {
    name: "Poultry Vaccines",
    size: "Enquire",
    price: 8000,
    description: "Essential vaccines for disease prevention.",
    category: "Vaccines & Medicines",
    image: `${baseUrl}vaccine.png`,
  },
  {
    name: "Egg Trays",
    size: "30 eggs",
    price: 4000,
    description: "Strong and reusable trays for safe egg handling.",
    category: "Other Supplies",
    image: `${baseUrl}layer.png`,
  },
  {
    name: "Knapsack Sprayer",
    size: "16L",
    price: 120000,
    description: "For farm hygiene and disinfection.",
    category: "Farm Tools",
    image: `${baseUrl}birds.png`,
  },
];

const trustItems = [
  {
    title: "Genuine Products",
    description: "Quality and trusted brands",
    icon: ShieldCheck,
  },
  {
    title: "Competitive Prices",
    description: "Great value for farmers",
    icon: HandCoins,
  },
  {
    title: "Expert Guidance",
    description: "Help in product selection",
    icon: Award,
  },
  {
    title: "Reliable Supply",
    description: "Available when you need it",
    icon: Users,
  },
];

const packages = [
  {
    title: "Starter Packages",
    description: "For new farmers",
    icon: House,
  },
  {
    title: "Growth Packages",
    description: "For expanding farms",
    icon: Sprout,
  },
  {
    title: "Commercial Packages",
    description: "For larger operations",
    icon: Bird,
  },
];

const formatPrice = (price: number) =>
  `UGX ${price.toLocaleString("en-UG")}`;

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "All Categories" || product.category === category;

      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  function chooseCategory(name: string) {
    setCategory(name);
    document.getElementById("product-catalogue")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* 1. HERO BANNER */}
      <section className="relative isolate min-h-[285px] overflow-hidden sm:min-h-[330px] lg:min-h-[350px]">
        <img
          src={`${baseUrl}bird4.png`}
          alt="Poultry farmer holding a bag of poultry feed"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/10" />

        <div className="mx-auto grid min-h-[285px] max-w-[1440px] items-center gap-7 px-5 py-8 sm:min-h-[330px] sm:px-8 lg:min-h-[350px] lg:grid-cols-[1fr_230px] lg:px-12">
          <div className="max-w-[650px]">
            <div className="mb-5 flex items-center gap-2 text-[11px] text-white/85">
              <Link to="/" className="hover:text-[#E9B949]">
                Home
              </Link>
              <span className="text-[#E9B949]">›</span>
              <span>Products & Supplies</span>
            </div>

            <p className="text-[9px] font-extrabold tracking-[2px] text-[#E9B949] sm:text-[10px]">
              QUALITY POULTRY SUPPLIES
            </p>

            <h1 className="mt-2 max-w-[620px] font-serif text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-[52px]">
              Everything Your
              <br />
              Poultry Farm Needs
            </h1>

            <p className="mt-3 max-w-[500px] text-sm leading-relaxed text-white/90 sm:text-base">
              Reliable feeds, durable equipment and trusted supplies for
              healthier birds and better results.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#product-catalogue"
                className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-5 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                BROWSE PRODUCTS
                <ArrowRight size={15} />
              </a>

              <Link
                to="/contact?subject=Product%20quote"
                className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-white/80 px-5 py-3 text-[10px] font-bold text-white transition hover:bg-white/10"
              >
                <BadgeCheck size={15} />
                REQUEST A QUOTE
              </Link>
            </div>
          </div>

          <div className="hidden space-y-5 lg:block">
            <HeroBenefit
              icon={<ShieldCheck size={22} />}
              title="Quality Assured"
              description="Trusted brands and verified products"
            />
            <HeroBenefit
              icon={<Truck size={22} />}
              title="Reliable Supply"
              description="Available when you need them"
            />
            <HeroBenefit
              icon={<Headset size={22} />}
              title="Expert Advice"
              description="Guidance on product selection and use"
            />
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SHORTCUTS */}
      <section className="border-b border-[#EAE5D8] bg-white/70 px-4 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-3 min-[480px]:grid-cols-4 lg:grid-cols-8 lg:gap-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => chooseCategory(item.name)}
                className={`group flex min-w-0 flex-col items-center rounded-xl border p-2 text-center transition hover:-translate-y-1 hover:shadow-md ${
                  category === item.name
                    ? "border-[#E9B949] bg-[#F7F5EC]"
                    : "border-transparent bg-white/80"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-[78px] w-full rounded-lg object-contain sm:h-[90px]"
                />

                <span className="mt-2 text-[10px] font-bold text-[#202923] sm:text-[11px]">
                  {item.name}
                </span>

                <span className="mt-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] transition group-hover:bg-[#063D2B] group-hover:text-white">
                  <Icon size={13} />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. PRODUCT CATALOGUE */}
      <section
        id="product-catalogue"
        className="scroll-mt-20 px-5 py-9 sm:px-8 sm:py-11 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div className="max-w-[470px]">
              <SectionLabel>OUR PRODUCTS</SectionLabel>

              <h2 className="mt-2 font-serif text-3xl font-bold leading-[1.08] text-[#063D2B] sm:text-4xl">
                Quality Supplies
                <br /> for Every Stage
              </h2>

              <p className="mt-2 text-[12px] leading-relaxed text-[#62675F] sm:text-[13px]">
                From day-old chicks to full production, we supply high-quality
                feeds, equipment and essential farm inputs to help you raise
                healthy, productive birds.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-[520px]">
              <label className="flex min-h-11 flex-1 items-center gap-2 rounded-lg border border-[#E5E3DC] bg-white px-3">
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products (e.g. broiler feed, drinker)"
                  className="min-w-0 flex-1 bg-transparent text-[11px] outline-none placeholder:text-[#898D85]"
                  aria-label="Search products"
                />
                <Search size={18} className="shrink-0 text-[#174D35]" />
              </label>

              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                aria-label="Filter by category"
                className="min-h-11 rounded-lg border border-[#E5E3DC] bg-white px-3 text-[11px] outline-none focus:border-[#E9B949]"
              >
                <option>All Categories</option>
                {categories.map((item) => (
                  <option key={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>

          {category !== "All Categories" || search ? (
            <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-[#62675F]">
              <span>
                Showing {filteredProducts.length} product
                {filteredProducts.length === 1 ? "" : "s"}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All Categories");
                }}
                className="font-bold text-[#174D35] underline underline-offset-2"
              >
                Clear filters
              </button>
            </div>
          ) : null}

          <div className="mt-6 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-lg border border-[#EAE5D8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-[170px] overflow-hidden bg-white sm:h-[155px] lg:h-[135px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {product.badge && (
                    <span className="absolute left-2 top-2 rounded-md bg-[#167347] px-2 py-1 text-[9px] font-bold text-white">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex min-h-[160px] flex-col p-3">
                  <h3 className="font-serif text-sm font-bold leading-tight text-[#202923]">
                    {product.name} ({product.size})
                  </h3>

                  <p className="mt-2 text-[12px] font-extrabold text-[#174D35]">
                    {product.name === "Poultry Vaccines"
                      ? `From ${formatPrice(product.price)}`
                      : formatPrice(product.price)}
                  </p>

                  <p className="mt-1.5 text-[10px] leading-[1.5] text-[#62675F]">
                    {product.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="mt-auto inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-[#E9B949] px-2 py-2 text-[9px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
                  >
                    ADD TO ENQUIRY
                    <ArrowRight size={13} />
                  </button>
                </div>
              </article>
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-span-full rounded-xl border border-[#EAE5D8] bg-white p-8 text-center">
                <Search className="mx-auto text-[#174D35]" size={28} />
                <h3 className="mt-3 font-serif text-xl font-bold text-[#063D2B]">
                  No products found
                </h3>
                <p className="mt-2 text-sm text-[#62675F]">
                  Try a different search term or select another category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All Categories");
                  }}
                  className="mt-4 rounded-full bg-[#E9B949] px-5 py-2 text-xs font-bold text-[#063D2B]"
                >
                  Show all products
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. SUPPLY PACKAGES BANNER */}
      <section className="relative isolate overflow-hidden bg-[#063D2B] text-white">
        <img
          src="/supply-packages.jpg"
          alt="Young chick on a poultry farm"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#063D2B] via-[#063D2B]/90 to-[#063D2B]/30" />

        <div className="mx-auto grid max-w-[1440px] gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_250px] lg:items-center lg:px-12">
          <div>
            <SectionLabel light>WHOLE FARM SOLUTIONS</SectionLabel>

            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Complete Supply Packages
            </h2>

            <p className="mt-2 max-w-[530px] text-[12px] leading-relaxed text-white/85 sm:text-[13px]">
              Get everything you need in one package. Special combinations for
              broilers, layers and smallholder farmers.
            </p>

            <Link
              to="/contact?subject=Supply%20package%20enquiry"
              className="mt-5 inline-flex min-h-10 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-5 py-3 text-[9px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              SEE SUPPLY PACKAGES
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-4">
            {packages.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[10px] text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE BARAKA */}
      <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>WHY CHOOSE BARAKA FARM</SectionLabel>

          <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#063D2B] sm:text-3xl">
            Your Trusted Supply Partner
          </h2>

          <p className="mt-2 max-w-[660px] text-[12px] leading-relaxed text-[#62675F]">
            We are committed to providing genuine products, expert advice and
            reliable supply to support your poultry success.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 border-b border-[#EAE5D8] pb-4 last:border-0 sm:border-b lg:border-b-0 lg:border-r lg:pr-3 lg:last:border-r-0"
                >
                  <Icon size={33} className="shrink-0 text-[#D7A72E]" />
                  <div>
                    <h3 className="font-serif text-[12px] font-bold text-[#202923]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[10px] text-[#62675F]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CUSTOM ORDER CTA */}
      <section className="bg-[#075238] px-5 py-5 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E9B949] text-[#E9B949]">
              <MessageCircle size={24} />
            </div>

            <div>
              <h2 className="font-serif text-lg font-bold">
                Need a Custom Order?
              </h2>
              <p className="mt-1 text-[11px] leading-relaxed text-white/80">
                We can help you source specific products not listed on our
                website.
              </p>
            </div>
          </div>

          <Link
            to="/contact?subject=Custom%20order"
            className="inline-flex min-h-11 items-center justify-center gap-3 self-start rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E] sm:self-auto"
          >
            CONTACT US
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 7. PRODUCT ENQUIRY MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="w-full max-w-md rounded-2xl bg-[#F7F5EC] p-5 shadow-2xl sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[9px] font-extrabold tracking-[2px] text-[#98771F]">
                  PRODUCT ENQUIRY
                </p>
                <h2
                  id="enquiry-title"
                  className="mt-2 font-serif text-2xl font-bold text-[#063D2B]"
                >
                  {selectedProduct.name}
                </h2>
              </div>

              <button
                type="button"
                aria-label="Close enquiry"
                onClick={() => setSelectedProduct(null)}
                className="rounded-full p-2 text-[#063D2B] hover:bg-[#EAE5D8]"
              >
                <X size={20} />
              </button>
            </div>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="mt-4 h-40 w-full rounded-xl object-cover"
            />

            <p className="mt-3 text-sm text-[#62675F]">
              {selectedProduct.description}
            </p>

            <p className="mt-2 font-bold text-[#174D35]">
              {selectedProduct.name === "Poultry Vaccines"
                ? `From ${formatPrice(selectedProduct.price)}`
                : formatPrice(selectedProduct.price)}
            </p>

            <p className="mt-3 text-xs leading-relaxed text-[#62675F]">
              Continue to contact Baraka Farm to confirm availability, quantity
              and the final price.
            </p>

            <a
              href={`https://wa.me/256700123456?text=${encodeURIComponent(
                `Hello Baraka Farm, I would like to enquire about ${selectedProduct.name} (${selectedProduct.size}). The listed price is ${formatPrice(selectedProduct.price)}. Please confirm availability and details.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#063D2B] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#174D35]"
            >
              <MessageCircle size={17} />
              Enquire on WhatsApp
              <ArrowRight size={15} />
            </a>

            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="mt-3 w-full py-2 text-xs font-semibold text-[#62675F] hover:text-[#063D2B]"
            >
              Continue browsing
            </button>
          </div>
        </div>
      )}
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
        <p className="mt-1 max-w-[160px] text-[10px] leading-relaxed text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
}
