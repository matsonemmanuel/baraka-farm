
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Heart,
  MessageCircle,
  Sprout,
  Star,
  Users,
} from "lucide-react";

const whatsappNumber = "256700123456";

const stories = [
  {
    category: "Starting Out",
    title: "Every Farming Journey Starts Somewhere",
    description:
      "A story about taking the first steps into poultry farming, preparing a farm, learning the basics and building confidence along the way.",
    image: "/product-housing.jpg",
    lesson: "Start with a plan and learn as you grow.",
    stage: "New farmers",
  },
  {
    category: "Learning & Growth",
    title: "The Lessons That Make a Farm Stronger",
    description:
      "Explore how daily routines, careful observation, good record keeping and informed decisions can help farmers improve their operations.",
    image: "/product-feeds.jpg",
    lesson: "Consistency matters more than guesswork.",
    stage: "Growing farms",
  },
  {
    category: "Farm Management",
    title: "Building Better Habits on the Farm",
    description:
      "Discover the importance of planning feed supplies, maintaining clean equipment and making bird health a daily priority.",
    image: "/product-feeder.jpg",
    lesson: "Good management begins with everyday practices.",
    stage: "All farmers",
  },
];

const storyPrinciples = [
  {
    icon: Sprout,
    title: "The beginning",
    description:
      "Understand where a farmer started, the goals they set and the challenges they faced.",
  },
  {
    icon: BookOpen,
    title: "The learning",
    description:
      "Discover the practical lessons, decisions and experiences that shaped the journey.",
  },
  {
    icon: Star,
    title: "The progress",
    description:
      "Celebrate milestones, share useful insights and inspire other farmers.",
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

export default function FarmerStories() {
  const shareStoryUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Baraka Farm, I would like to share my poultry farming story for consideration on your Farmer Stories page.",
  )}`;

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[430px] items-center bg-[#063D2B] py-16 sm:min-h-[490px] sm:py-20">
        <img
          src="/bird2.jpg"
          alt="Poultry farming and agricultural work"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03271C]/95 via-[#063D2B]/85 to-[#063D2B]/40" />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link to="/" className="transition hover:text-[#E9B949]">
              Home
            </Link>
            <ChevronRight size={15} />
            <span>Insights</span>
            <ChevronRight size={15} />
            <span className="text-[#E9B949]">Farmer Stories</span>
          </div>

          <div className="max-w-3xl">
            <SectionLabel light>Real experiences. Shared wisdom.</SectionLabel>

            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Every Farmer Has
              <span className="block text-[#E9B949]">
                a Story Worth Sharing.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Discover the experiences, lessons and ambitions behind poultry
              farming. This is a space to celebrate farmers, learn from their
              journeys and inspire the next generation of agricultural
              entrepreneurs.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#stories"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-7 py-3 text-sm font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
              >
                Explore Stories <ArrowRight size={18} />
              </a>

              <a
                href={shareStoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Share Your Story
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <Heart size={17} className="text-[#E9B949]" />
                Farmer experiences
              </span>
              <span className="flex items-center gap-2">
                <BookOpen size={17} className="text-[#E9B949]" />
                Practical lessons
              </span>
              <span className="flex items-center gap-2">
                <Users size={17} className="text-[#E9B949]" />
                Community inspiration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>More than farming</SectionLabel>

            <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
              Behind every farm is a journey of learning, effort and hope.
            </h2>

            <p className="mt-5 leading-8 text-[#687168]">
              Farmers have different starting points, resources, ambitions and
              challenges. Their experiences can offer valuable perspectives to
              others who are starting out or looking to improve their farming
              practices.
            </p>

            <p className="mt-4 leading-8 text-[#687168]">
              Through Farmer Stories, Baraka Farm aims to create space for
              experiences that encourage learning, celebrate progress and
              strengthen connections across the farming community.
            </p>
          </div>

          <div className="rounded-3xl bg-[#063D2B] p-7 text-white sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9B949] text-[#063D2B]">
              <BookOpen size={28} />
            </div>

            <h3 className="mt-6 font-serif text-2xl font-bold sm:text-3xl">
              Every experience can teach us something.
            </h3>

            <p className="mt-4 leading-7 text-white/70">
              A new farmer's first steps, a practical lesson learned through
              experience or a milestone worth celebrating can all help others
              make more informed decisions.
            </p>

            <a
              href={shareStoryUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#E9B949] transition hover:text-white"
            >
              Tell us your story <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured story */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <SectionLabel>Featured story</SectionLabel>
            <h2 className="font-serif text-3xl font-bold text-[#063D2B] sm:text-4xl">
              The Journey Behind the Farm
            </h2>
          </div>

          <article className="grid overflow-hidden rounded-3xl border border-[#E4E5D8] bg-[#FCFCF8] lg:grid-cols-2">
            <div className="relative min-h-[280px] bg-[#E4E5D8] sm:min-h-[390px]">
              <img
                src="/product-housing.jpg"
                alt="Poultry housing and farm facilities"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/65 via-transparent to-transparent" />

              <span className="absolute bottom-5 left-5 rounded-full bg-[#E9B949] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#063D2B]">
                Featured
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <SectionLabel>Starting out</SectionLabel>

              <h3 className="font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">
                Every Great Farm Begins with a First Step
              </h3>

              <p className="mt-5 leading-8 text-[#687168]">
                Starting a poultry farm means making decisions, learning
                essential management practices and preparing for challenges.
                Planning housing, budgeting for feed and equipment, and
                developing consistent daily routines are important parts of
                building a foundation.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#687168]">
                This introductory feature highlights themes that new farmers
                can reflect on as they plan their own journey.
              </p>

              <div className="mt-6 rounded-xl border border-[#E4E5D8] bg-white p-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#9A7924]">
                  A lesson to remember
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-[#174D35]">
                  Prepare carefully, seek reliable advice and build good
                  management habits from the beginning.
                </p>
              </div>

              <p className="mt-5 text-xs leading-5 text-[#858C82]">
                Illustrative editorial feature, not a verified interview with
                a specific farmer.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Story cards */}
      <section
        id="stories"
        className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>Learn from experience</SectionLabel>
              <h2 className="font-serif text-3xl font-bold text-[#063D2B] sm:text-4xl">
                Stories and Lessons from the Farm
              </h2>
              <p className="mt-4 leading-7 text-[#687168]">
                Explore story themes that highlight the knowledge, decisions
                and everyday practices involved in poultry farming.
              </p>
            </div>

            <span className="w-fit rounded-full border border-[#E4E5D8] bg-white px-4 py-2 text-xs font-bold text-[#687168]">
              Editorial previews
            </span>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#E4E5D8] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-[#E4E5D8]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/55 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-xs font-extrabold text-[#174D35]">
                    {story.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9A7924]">
                    {story.stage}
                  </p>

                  <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#063D2B]">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687168]">
                    {story.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-[#F7F5EC] p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#174D35]">
                      Key takeaway
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#59645B]">
                      {story.lesson}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Baraka Farm, I would like to learn more about the Farmer Stories theme: ${story.title}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-extrabold text-[#174D35] transition hover:text-[#9A7924]"
                  >
                    Discuss this topic
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-7 text-xs leading-6 text-[#858C82]">
            The cards above are editorial previews, not published farmer
            testimonials. Replace them with genuine stories, approved
            photographs and the farmers' own words as these become available.
          </p>
        </div>
      </section>

      {/* What makes a story */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>Every journey has value</SectionLabel>
            <h2 className="font-serif text-3xl font-bold text-[#063D2B] sm:text-4xl">
              What Makes a Farmer's Story?
            </h2>
            <p className="mt-4 leading-7 text-[#687168]">
              We want stories that share meaningful experiences and useful
              lessons with the wider farming community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {storyPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-[#E4E5D8] bg-[#FCFCF8] p-7 transition hover:bg-white hover:shadow-md sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#174D35]/10 text-[#174D35]">
                    <Icon size={27} />
                  </div>

                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.15em] text-[#9A7924]">
                    PART {index + 1}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-[#063D2B]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687168]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Share your story */}
      <section className="bg-[#063D2B] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <SectionLabel light>Your experience matters</SectionLabel>

            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Have a poultry farming story to share?
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              Tell us about your farming journey, the lessons you have learned,
              the challenges you have overcome or the milestones you are proud
              of. Your experience may help another farmer take their next step.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#E9B949]" />
                Your journey
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#E9B949]" />
                Your lessons
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#E9B949]" />
                Your achievements
              </span>
            </div>
          </div>

          <a
            href={shareStoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-7 py-4 text-sm font-extrabold text-[#063D2B] transition hover:bg-[#D7A72E]"
          >
            <MessageCircle size={19} />
            Share Your Story
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Closing navigation */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl border border-[#E4E5D8] bg-white p-6 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>Keep learning</SectionLabel>
            <h2 className="font-serif text-2xl font-bold text-[#063D2B] sm:text-3xl">
              Turn inspiration into action.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#687168]">
              Explore farm management resources and practical poultry supplies
              to support your own farming journey.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/farm-management"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#063D2B] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#174D35]"
            >
              Farm Management
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#DDE1D6] px-6 py-3 text-sm font-extrabold text-[#174D35] transition hover:bg-[#F7F5EC]"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
