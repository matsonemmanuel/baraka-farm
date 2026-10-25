
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Bird,
  CheckCircle2,
  ChevronRight,
  
  MessageCircle,
  Package,
  ShieldCheck,
  Sprout,
  Wheat,
} from "lucide-react";

const feeds = [
  {
    name: "Broiler Starter Feed",
    size: "50 kg",
    price: 120000,
    stage: "Early growth",
    image: "/product-starter-feed.jpg",
    description:
      "Starter nutrition for young broiler chicks during their early growth stage.",
    benefits: [
      "Supports early growth",
      "Suitable for broiler chicks",
      "Practical bulk packaging",
    ],
  },
  {
    name: "Layer Feed",
    size: "50 kg",
    price: 115000,
    stage: "Egg production",
    image: "/product-layer-feed.jpg",
    description:
      "Balanced feed for laying birds as part of a well-managed egg production programme.",
    benefits: [
      "Designed for laying birds",
      "Supports a balanced feeding routine",
      "Suitable for poultry farms",
    ],
  },
];

const feedingStages = [
  {
    number: "01",
    title: "Chick Starter",
    description:
      "Choose an appropriate starter ration for young chicks and follow the feed manufacturer's instructions.",
    icon: Bird,
  },
  {
    number: "02",
    title: "Grower Feed",
    description:
      "Use a suitable grower ration for developing birds according to their age and production purpose.",
    icon: Sprout,
  },
  {
    number: "03",
    title: "Broiler Finisher",
    description:
      "Select a suitable finisher ration for broilers approaching market weight, following product guidance.",
    icon: Wheat,
  },
  {
    number: "04",
    title: "Layer Feed",
    description:
      "Provide an appropriate layer ration when birds reach the laying stage, based on their nutritional needs.",
    icon: Package,
  },
];

const formatPrice = (price: number) =>
  `UGX ${price.toLocaleString("en-UG")}`;

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-[2px] w-6 bg-[#E9B949]" />
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

export default function PoultryFeeds() {
  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* 1. HERO */}
      <section className="relative isolate min-h-[390px] overflow-hidden sm:min-h-[430px] lg:min-h-[455px]">
        <img
          src="/product-feeds.jpg"
          alt="Poultry feed supplies for healthy birds"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />

        <div className="mx-auto flex min-h-[390px] max-w-[1440px] items-center px-5 py-10 sm:min-h-[430px] sm:px-8 lg:min-h-[455px] lg:px-12">
          <div className="max-w-[700px]">
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
              <span className="text-white">Poultry Feeds</span>
            </nav>

            <SectionLabel light>
              NUTRITION FOR HEALTHIER FLOCKS
            </SectionLabel>

            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              The Right Feed.
              <br />
              <span className="text-[#E9B949]">
                Better Poultry Growth.
              </span>
            </h1>

            <p className="mt-5 max-w-[540px] text-sm leading-7 text-white/85 sm:text-base">
              Explore poultry feed options for different stages of growth
              and production. Baraka Farm helps you choose suitable feeds
              for your farming goals.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#available-feeds"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-6 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                EXPLORE AVAILABLE FEEDS
                <ArrowRight size={16} />
              </a>

              <a
                href={`https://wa.me/256700123456?text=${encodeURIComponent(
                  "Hello Baraka Farm, I would like to enquire about poultry feeds and availability."
                )}`}
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
                Feeding guidance
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
              icon: Wheat,
              title: "Feed for Different Stages",
              text: "Explore options for different poultry production needs.",
            },
            {
              icon: ShieldCheck,
              title: "Informed Selection",
              text: "Ask us about feed type, packaging and suitability.",
            },
            {
              icon: MessageCircle,
              title: "Easy Enquiries",
              text: "Contact our team to confirm current availability.",
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

      {/* 3. AVAILABLE FEEDS */}
      <section
        id="available-feeds"
        className="scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-[650px]">
              <SectionLabel>OUR FEED CATALOGUE</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
                Available Poultry Feeds
              </h2>
              <p className="mt-3 max-w-[600px] text-sm leading-7 text-[#62675F]">
                Browse the feed products currently listed in our website
                catalogue. Contact Baraka Farm to confirm availability,
                current pricing and suitability for your flock.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex min-h-10 items-center gap-2 self-start text-xs font-extrabold text-[#174D35] transition hover:text-[#98771F] sm:self-auto"
            >
              VIEW ALL PRODUCTS
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {feeds.map((feed) => (
              <article
                key={feed.name}
                className="group overflow-hidden rounded-xl border border-[#EAE5D8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-[220px] overflow-hidden bg-white sm:h-[245px]">
                  <img
                    src={feed.image}
                    alt={feed.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#063D2B] px-3 py-1.5 text-[10px] font-bold text-white">
                    {feed.stage}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#063D2B]">
                        {feed.name}
                      </h3>
                      <p className="mt-1 text-xs text-[#62675F]">
                        Pack size: {feed.size}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F7F5EC] text-[#174D35]">
                      <Wheat size={19} />
                    </div>
                  </div>

                  <p className="mt-4 min-h-[48px] text-sm leading-6 text-[#62675F]">
                    {feed.description}
                  </p>

                  <div className="mt-5 border-t border-[#EAE5D8] pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#62675F]">
                      Listed price
                    </p>
                    <p className="mt-1 font-serif text-2xl font-bold text-[#174D35]">
                      {formatPrice(feed.price)}
                    </p>
                    <p className="mt-1 text-[10px] text-[#898D85]">
                      Confirm current price and availability before ordering.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/256700123456?text=${encodeURIComponent(
                      `Hello Baraka Farm, I would like to enquire about ${feed.name}, ${feed.size}. Please confirm current price and availability.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#E9B949] px-4 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
                  >
                    <MessageCircle size={15} />
                    ENQUIRE ABOUT THIS FEED
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}

            <article className="flex flex-col justify-center rounded-xl border border-dashed border-[#C9C6B9] bg-white/60 p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]">
                <Package size={23} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold text-[#063D2B]">
                Need Another Feed Type?
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#62675F]">
                Looking for chick starter, growers mash, broiler finisher
                or another poultry feed? Contact us to discuss your
                requirements.
              </p>

              <Link
                to="/contact?subject=Poultry%20feed%20enquiry"
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-[#063D2B] px-5 py-3 text-[10px] font-extrabold text-white transition hover:bg-[#174D35]"
              >
                REQUEST FEED INFORMATION
                <ArrowRight size={15} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 4. FEEDING GUIDE */}
      <section className="border-y border-[#EAE5D8] bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>UNDERSTANDING FEEDING STAGES</SectionLabel>

          <h2 className="mt-3 max-w-[700px] font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
            Choose Feed According to Your Birds' Needs
          </h2>

          <p className="mt-3 max-w-[700px] text-sm leading-7 text-[#62675F]">
            Birds have different nutritional requirements as they grow.
            The correct feed depends on the bird type, age and production
            purpose. Always follow the manufacturer's feeding instructions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {feedingStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.number}
                  className="rounded-xl border border-[#EAE5D8] bg-[#F7F5EC] p-5 transition hover:border-[#E9B949]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#D7A72E]">
                      {stage.number}
                    </span>
                    <Icon size={24} className="text-[#174D35]" />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-bold text-[#063D2B]">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#62675F]">
                    {stage.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEEDING SUPPORT */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>SMARTER FEEDING DECISIONS</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Good Nutrition Starts With the Right Choices
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#62675F]">
              Selecting suitable feed is only one part of poultry
              management. Proper storage, access to clean water, correct
              feeding practices and good flock management all contribute
              to bird health and performance.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Store feed in a clean, dry place away from pests.",
                "Provide birds with continuous access to clean water.",
                "Follow the feed label and recommended feeding programme.",
                "Check feed quality, packaging and expiry information.",
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

          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#063D2B] sm:min-h-[400px]">
            <img
              src="/product-feeds.jpg"
              alt="Poultry feed supplies"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/95 via-[#063D2B]/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[10px] font-extrabold tracking-[2px] text-[#E9B949]">
                BARAKA FARM
              </p>

              <h3 className="mt-3 max-w-[420px] font-serif text-3xl font-bold leading-tight text-white">
                Support for Your Poultry Farming Journey
              </h3>

              <p className="mt-3 max-w-[440px] text-sm leading-6 text-white/80">
                Ask about feed options, pack sizes and supply arrangements
                for your farm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="bg-[#063D2B] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-[700px]">
            <SectionLabel light>LET'S TALK POULTRY FEEDS</SectionLabel>

            <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
              Have a Feed Enquiry?
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/80">
              Contact Baraka Farm to discuss your feed requirements and
              confirm current prices and availability.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/256700123456?text=${encodeURIComponent(
                "Hello Baraka Farm, I would like to discuss poultry feed supplies."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-5 py-3 text-[10px] font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
            >
              <MessageCircle size={16} />
              CHAT ON WHATSAPP
              <ArrowRight size={15} />
            </a>

            <Link
              to="/contact?subject=Poultry%20feed%20enquiry"
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
