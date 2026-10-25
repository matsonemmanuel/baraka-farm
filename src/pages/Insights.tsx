import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowLeft, Search, CalendarDays, Clock3, Eye, Mail,
  LockKeyhole, Bird, ShieldCheck,
  ChartNoAxesColumnIncreasing, Users, FileText, BookOpen, Sprout,
} from "lucide-react";

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  views: string;
}
const baseUrl = import.meta.env.BASE_URL;
const articles: Article[] = [
  { id: 1, title: "Practical Tips for a Healthier Poultry Flock", description: "Simple, proven practices that improve flock health, productivity and farm profitability.", category: "Poultry Farming", image: "/images/poultry-health.jpg", date: "June 18, 2026", readTime: "6 min read", views: "1.2k" },
  { id: 2, title: "How to Build a Profitable Poultry Business", description: "Learn the fundamentals of planning, management and market access for your poultry enterprise.", category: "Business Tips", image: "/images/poultry-business.jpg", date: "June 12, 2026", readTime: "8 min read", views: "980" },
  { id: 3, title: "Choosing the Right Feed for Better Growth", description: "A practical guide to poultry nutrition and feed choices at every production stage.", category: "Poultry Farming", image: "/images/poultry-feed.jpg", date: "June 8, 2026", readTime: "5 min read", views: "860" },
  { id: 4, title: "Preparing Your Brooder for New Chicks", description: "Create a safe, warm and healthy environment before your chicks arrive.", category: "Training", image: "/images/brooder.jpg", date: "May 30, 2026", readTime: "4 min read", views: "740" },
  { id: 5, title: "Recognising Common Poultry Diseases", description: "Spot early warning signs and protect your birds with timely action.", category: "Health", image: "/images/poultry-disease.jpg", date: "May 24, 2026", readTime: "7 min read", views: "690" },
  { id: 6, title: "Keeping Accurate Farm Records", description: "Track costs, production and performance to make better farming decisions.", category: "Business Tips", image: "/images/farm-records.jpg", date: "May 18, 2026", readTime: "5 min read", views: "620" },
  { id: 7, title: "Improving Egg Quality and Hatchability", description: "Practical adjustments to housing, nutrition and flock management.", category: "Poultry Farming", image: "/images/eggs.jpg", date: "May 10, 2026", readTime: "6 min read", views: "580" },
  { id: 8, title: "A Farmer's Journey to Sustainable Growth", description: "How one poultry farmer expanded production while protecting margins.", category: "Farmer Stories", image: "/images/farmer-story.jpg", date: "May 4, 2026", readTime: "9 min read", views: "520" },
];

const categories = [
  { name: "All Articles", subtitle: "All insights", icon: FileText },
  { name: "Poultry Farming", subtitle: "Production guides", icon: Bird },
  { name: "Health", subtitle: "Flock care", icon: ShieldCheck },
  { name: "Business Tips", subtitle: "Grow profitably", icon: ChartNoAxesColumnIncreasing },
  { name: "Training", subtitle: "Learn practical skills", icon: BookOpen },
  { name: "Farmer Stories", subtitle: "Real experiences", icon: Users },
  { name: "News & Updates", subtitle: "Latest news", icon: Sprout },
];

const benefits = [
  { title: "Expert Guidance", description: "Advice you can apply", icon: ShieldCheck },
  { title: "Better Flock Health", description: "Practical care tips", icon: Bird },
  { title: "Business Growth", description: "Ideas for stronger returns", icon: ChartNoAxesColumnIncreasing },
];

const topics = [
  { title: "Healthy poultry management", count: "12 articles", category: "Poultry Farming", image: "/images/poultry-health.jpg" },
  { title: "Farm business planning", count: "8 articles", category: "Business Tips", image: "/images/poultry-business.jpg" },
  { title: "Training and skills", count: "6 articles", category: "Training", image: "/images/training.jpg" },
];

const stories = [
  { name: "Mary Achieng", location: "Kisumu, Kenya", quote: "The practical training helped me improve flock health and grow my egg sales.", image: "/images/farmer-mary.jpg" },
  { name: "James Mwangi", location: "Nakuru, Kenya", quote: "Better records and feeding practices helped me reduce costs and increase profitability.", image: "/images/farmer-james.jpg" },
  { name: "Ruth Naliaka", location: "Kakamega, Kenya", quote: "I now manage a stronger, more consistent business with the support of what I learned.", image: "/images/farmer-ruth.jpg" },
  { name: "Peter Omondi", location: "Siaya, Kenya", quote: "Small improvements in housing and daily care made a visible difference to my flock.", image: "/images/farmer-peter.jpg" },
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [search, setSearch] = useState("");
  const [storyIndex, setStoryIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatch = activeCategory === "All Articles" || activeCategory === "Farmer Stories" || activeCategory === "News & Updates" || article.category === activeCategory;
      const searchMatch = !term || `${article.title} ${article.description} ${article.category}`.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const visibleStories = Array.from({ length: 3 }, (_, i) => stories[(storyIndex + i) % stories.length]);

  function selectCategory(name: string) {
    setActiveCategory(name);
    if (name !== "All Articles") document.getElementById("featured-articles")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <main className="overflow-hidden bg-[#F7F5EC] text-[#202923]">
      {/* HERO */}
      <section className="relative isolate min-h-[290px] overflow-hidden sm:min-h-[330px] lg:min-h-[350px]">
        <img src={`${baseUrl}happy.jpg`} alt="Healthy brown hen in a poultry farm" className="absolute inset-0 z-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/15" />
        <div className="relative z-20 mx-auto grid min-h-[290px] max-w-[1440px] gap-8 px-5 py-7 sm:min-h-[330px] sm:px-8 lg:min-h-[350px] lg:grid-cols-[1fr_235px] lg:items-center lg:px-12">
          <div className="max-w-[650px]">
            <div className="mb-5 flex items-center gap-2 text-[11px] text-white/85">
              <Link to="/" className="hover:text-[#E9B949]">Home</Link><span className="text-[#E9B949]">›</span><span>Insights</span>
            </div>
            <p className="text-[9px] font-extrabold tracking-[2px] text-[#E9B949] sm:text-[10px]">KNOWLEDGE FOR BETTER POULTRY FARMING</p>
            <h1 className="mt-2 max-w-[620px] font-serif text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-[52px]">Insights, Tips and<br />Real Farmer Stories</h1>
            <p className="mt-3 max-w-[500px] text-sm leading-relaxed text-white/90 sm:text-base">Practical knowledge, expert advice and inspiring stories to help you build a more productive and profitable poultry business.</p>
          </div>
          <div className="hidden space-y-4 lg:block">
            {benefits.map(({ title, description, icon: Icon }) => <div key={title} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B]"><Icon size={18} /></span>
              <div><h2 className="font-serif text-sm font-bold text-white">{title}</h2><p className="mt-0.5 text-[10px] text-white/85">{description}</p></div>
            </div>)}
          </div>
        </div>
      </section>

      {/* CATEGORY SHORTCUTS */}
      <section className="border-b border-[#EAE5D8] bg-white/65 px-4 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-3 min-[480px]:grid-cols-3 lg:grid-cols-7 lg:gap-3">
          {categories.map(({ name, subtitle, icon: Icon }) => {
            const active = activeCategory === name;
            return <button key={name} type="button" onClick={() => selectCategory(name)} aria-pressed={active} className={`group flex min-h-[94px] flex-col items-center justify-center rounded-xl border px-2 py-3 text-center transition hover:-translate-y-0.5 hover:shadow-md ${active ? "border-transparent bg-white shadow-sm" : "border-transparent bg-white/70 hover:border-[#E9B949]"}`}>
              <span className={`mb-2 flex h-9 w-9 items-center justify-center rounded-full transition ${active ? "bg-[#08734B] text-white" : "bg-[#E9B949] text-[#063D2B] group-hover:bg-[#D7A72E]"}`}><Icon size={17} /></span>
              <span className="text-[10px] font-extrabold leading-tight sm:text-[11px]">{name}</span><span className="mt-1 text-[9px] leading-tight text-[#62675F]">{subtitle}</span>
            </button>;
          })}
        </div>
      </section>

      {/* FEATURED ARTICLE AND SIDEBAR */}
      <section id="featured-articles" className="scroll-mt-20 bg-[#F7F5EC] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div><SectionLabel>FEATURED ARTICLE</SectionLabel><h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#063D2B] sm:text-4xl">Latest from Our Blog</h2><p className="mt-1 text-[11px] text-[#62675F] sm:text-[12px]">Stay informed with expert insights, practical guides and real stories from the poultry sector.</p></div>
              <button type="button" onClick={() => { setActiveCategory("All Articles"); setSearch(""); }} className="inline-flex min-h-9 items-center justify-center gap-2 self-start rounded-lg bg-[#063D2B] px-4 py-2 text-[9px] font-extrabold text-white transition hover:bg-[#174D35] sm:self-auto">View All Articles <ArrowRight size={13} /></button>
            </div>

            {filtered.length ? <div className="mt-5 grid gap-3 md:grid-cols-2">
              <article className="group overflow-hidden rounded-xl border border-[#ECE8DE] bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative h-[190px] overflow-hidden sm:h-[220px]"><img src={filtered[0].image} alt={filtered[0].title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute bottom-3 left-3 rounded-md bg-[#E9B949] px-2 py-1 text-[9px] font-extrabold text-[#063D2B]">{filtered[0].category.toUpperCase()}</span></div>
                <div className="p-4"><h3 className="font-serif text-xl font-bold leading-tight text-[#063D2B] sm:text-2xl">{filtered[0].title}</h3><p className="mt-2 text-[11px] leading-relaxed text-[#62675F]">{filtered[0].description}</p><ArticleMeta article={filtered[0]} /><Link to="/insights" className="mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] hover:bg-[#D7A72E]" aria-label={`Read ${filtered[0].title}`}><ArrowRight size={17} /></Link></div>
              </article>
              <div className="grid gap-3">
                {filtered.slice(1, 3).map((article) => <article key={article.id} className="group overflow-hidden rounded-xl border border-[#ECE8DE] bg-white shadow-sm transition hover:shadow-lg">
                  <div className="relative h-[150px] overflow-hidden sm:h-[135px]"><img src={article.image} alt={article.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute bottom-2 left-3 rounded-md bg-[#E9B949] px-2 py-1 text-[9px] font-extrabold text-[#063D2B]">{article.category.toUpperCase()}</span></div>
                  <div className="flex items-center gap-3 p-3"><div className="min-w-0 flex-1"><h3 className="font-serif text-base font-bold leading-tight text-[#202923]">{article.title}</h3><ArticleMeta article={article} compact /></div><Link to="/insights" aria-label={`Read ${article.title}`} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] hover:bg-[#D7A72E]"><ArrowRight size={15} /></Link></div>
                </article>)}
              </div>
            </div> : <div className="mt-5 rounded-xl bg-white p-8 text-center text-sm text-[#62675F]">No articles match this search. Try another term or category.</div>}
          </div>

          <aside className="rounded-xl bg-white/70 p-4 sm:p-5">
            <h3 className="font-serif text-base font-bold text-[#202923]">Search Articles</h3>
            <label className="mt-3 flex h-10 items-center gap-2 rounded-lg border border-[#EAE5D8] bg-white px-3"><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search articles..." aria-label="Search articles" className="min-w-0 flex-1 bg-transparent text-[10px] outline-none placeholder:text-[#898D85]" /><Search size={16} className="shrink-0 text-[#174D35]" /></label>
            <div className="my-5 border-t border-[#EAE5D8]" /><h3 className="font-serif text-base font-bold text-[#202923]">Popular Topics</h3>
            <div className="mt-3 space-y-3">{topics.map((topic) => <button key={topic.title} type="button" onClick={() => selectCategory(topic.category)} className="group flex w-full items-center gap-2 text-left"><img src={topic.image} alt="" loading="lazy" className="h-10 w-10 shrink-0 rounded-md object-cover" /><span className="min-w-0 flex-1"><span className="block text-[10px] font-bold leading-tight text-[#202923] group-hover:text-[#08734B]">{topic.title}</span><span className="mt-1 block text-[9px] text-[#777B73]">{topic.count}</span></span><ArrowRight size={13} className="shrink-0 text-[#174D35] transition group-hover:translate-x-1" /></button>)}</div>
          </aside>
        </div>
      </section>

      {/* TRENDING ARTICLES */}
      <section className="bg-white/70 px-5 pb-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between gap-3"><h2 className="flex items-center gap-2 font-serif text-xl font-bold text-[#063D2B] sm:text-2xl"><span className="h-[2px] w-5 bg-[#E9B949]" />Trending Articles</h2><Link to="/insights" className="inline-flex items-center gap-2 text-[10px] font-bold hover:text-[#08734B]">View All <ArrowRight size={14} /></Link></div>
        <div className="mt-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">{articles.slice(3, 8).map((article) => <article key={article.id} className="group overflow-hidden rounded-xl border border-[#ECE8DE] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="h-[115px] overflow-hidden sm:h-[105px]"><img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-3"><h3 className="min-h-[38px] font-serif text-[13px] font-bold leading-tight text-[#202923]">{article.title}</h3><div className="mt-2 flex items-center gap-1 text-[8px] text-[#777B73]"><CalendarDays size={10} />{article.date}</div><div className="mt-1 flex items-center justify-between gap-2"><span className="inline-flex items-center gap-1 text-[8px] text-[#777B73]"><Eye size={10} />{article.views}</span><Link to="/insights" aria-label={`Read ${article.title}`} className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] hover:bg-[#D7A72E]"><ArrowRight size={13} /></Link></div></div></article>)}</div>
      </div></section>

      {/* NEWSLETTER */}
      <section className="relative isolate overflow-hidden bg-[#063D2B] px-5 py-7 text-white sm:px-8 sm:py-8 lg:px-12"><div className="absolute inset-0 z-0 bg-gradient-to-r from-[#063D2B] via-[#064630] to-[#075238]" /><div className="relative z-10 mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div><SectionLabel light>STAY UPDATED</SectionLabel><h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">Get the Latest Poultry Insights</h2><p className="mt-2 max-w-[560px] text-[11px] leading-relaxed text-white/85 sm:text-[13px]">Subscribe to receive new articles, practical tips, training updates and opportunities directly to your inbox.</p></div>
        <div>{subscribed ? <div role="status" className="rounded-xl border border-white/20 bg-white/10 p-4 text-sm text-white">Thank you! Your subscription request has been received.</div> : <form onSubmit={subscribe} className="flex flex-col gap-2 sm:flex-row"><label className="flex min-h-11 flex-1 items-center gap-2 rounded-full border border-white/20 bg-white px-4 text-[#202923]"><Mail size={16} className="shrink-0 text-[#174D35]" /><input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email address" aria-label="Email address" className="min-w-0 flex-1 bg-transparent text-[11px] outline-none placeholder:text-[#898D85]" /></label><button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#E9B949] px-5 py-3 text-[10px] font-extrabold text-[#063D2B] hover:bg-[#D7A72E]">Subscribe <ArrowRight size={14} /></button></form>}<p className="mt-2 flex items-center gap-1.5 text-[9px] text-white/75"><LockKeyhole size={11} />We respect your privacy. No spam, only valuable content.</p></div>
      </div></section>

      {/* FARMER STORIES */}
      <section className="bg-[#F7F5EC] px-5 py-8 sm:px-8 sm:py-9 lg:px-12"><div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between gap-4"><div><SectionLabel>FARMER STORIES</SectionLabel><h2 className="mt-2 font-serif text-2xl font-bold text-[#063D2B] sm:text-3xl">Real People. Real Results.</h2><p className="mt-1 text-[11px] text-[#62675F] sm:text-[12px]">Stories from farmers who have applied the knowledge and support from Baraka Farm.</p></div><div className="flex shrink-0 gap-2"><button type="button" aria-label="Previous farmer stories" onClick={() => setStoryIndex((current) => (current - 1 + stories.length) % stories.length)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCDDD5] bg-white text-[#174D35] hover:bg-[#EAE5D8]"><ArrowLeft size={15} /></button><button type="button" aria-label="Next farmer stories" onClick={() => setStoryIndex((current) => (current + 1) % stories.length)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] hover:bg-[#D7A72E]"><ArrowRight size={15} /></button></div></div>
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">{visibleStories.map((story) => <article key={story.name} className="grid overflow-hidden rounded-xl border border-[#ECE8DE] bg-white/90 sm:grid-cols-[100px_1fr]"><img src={story.image} alt={`Farmer ${story.name}`} loading="lazy" className="h-[170px] w-full object-cover sm:h-full sm:min-h-[130px]" /><div className="p-3"><p className="font-serif text-2xl leading-none text-[#E9B949]">“</p><p className="text-[10px] italic leading-relaxed text-[#62675F]">{story.quote}</p><p className="mt-2 text-[10px] font-extrabold text-[#202923]">{story.name}</p><p className="text-[9px] text-[#777B73]">{story.location}</p><p className="mt-1 text-[12px] tracking-[1px] text-[#E9B949]" aria-label="5 out of 5 stars">★★★★★</p></div></article>)}</div>
      </div></section>
    </main>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className="flex items-center gap-2"><span className="h-[2px] w-5 shrink-0 bg-[#E9B949]" /><span className={`text-[8px] font-extrabold tracking-[2px] ${light ? "text-[#E9B949]" : "text-[#174D35]"}`}>{children}</span></div>;
}

function ArticleMeta({ article, compact = false }: { article: Article; compact?: boolean }) {
  return <div className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[8px] text-[#777B73] ${compact ? "mt-2" : ""}`}><span className="inline-flex items-center gap-1"><CalendarDays size={10} />{article.date}</span><span className="inline-flex items-center gap-1"><Clock3 size={10} />{article.readTime}</span><span className="inline-flex items-center gap-1"><Eye size={10} />{article.views}</span></div>;
}