
import {
  ArrowRight,
  Bird,
  Wheat,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";

const trainingTopics = [
  {
    number: "01",
    title: ["Poultry Housing", "& Brooding"],
    icon: Bird,
    href: "/training/housing-brooding",
  },
  {
    number: "02",
    title: ["Feeding &", "Bird Nutrition"],
    icon: Wheat,
    href: "/training/feeding-nutrition",
  },
  {
    number: "03",
    title: ["Hygiene &", "Disease Prevention"],
    icon: ShieldCheck,
    href: "/training/hygiene-disease-prevention",
  },
  {
    number: "04",
    title: ["Farm Records &", "Business Basics"],
    icon: ClipboardList,
    href: "/training/farm-records",
  },
];

export default function Training() {
  return (
    <section
      id="training"
      className="bg-[#F7F5EC] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-9"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <div className="mb-5 text-center sm:mb-6">
          <div className="mb-1.5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-4 bg-[#E9B949]" />

            <span className="text-[8px] font-extrabold tracking-[2px] text-[#174D35]">
              OUR TRAINING
            </span>
          </div>

          <h2 className="font-serif text-[25px] font-bold leading-tight text-[#063D2B] sm:text-3xl lg:text-[32px]">
            Learn with Baraka Farm
          </h2>

          <p className="mt-1.5 text-[10px] text-[#62675F] sm:text-xs">
            Hands-on training designed for practical results.
          </p>
        </div>

        {/* Four training topics */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
          {trainingTopics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link
                key={topic.number}
                to={topic.href}
                className="group flex min-h-[86px] items-center justify-between gap-2 rounded-lg border border-[#E8E4D7] bg-white/70 px-3 py-3 transition-all duration-200 hover:-translate-y-1 hover:border-[#E9B949] hover:bg-white hover:shadow-sm sm:min-h-[90px] lg:min-h-[94px] lg:px-4"
              >
                <div className="min-w-0">
                  <span className="font-serif text-[22px] font-bold leading-none text-[#D6AC35] sm:text-[25px]">
                    {topic.number}
                  </span>

                  <h3 className="mt-2 font-serif text-[11px] font-bold leading-tight text-[#202923] sm:text-xs lg:text-[13px]">
                    {topic.title[0]}
                    <br />
                    {topic.title[1]}
                  </h3>
                </div>

                <div className="flex shrink-0 flex-col items-center justify-between self-stretch">
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    className="text-[#D6AC35] transition-transform group-hover:scale-110"
                  />

                  <ArrowRight
                    size={14}
                    className="text-[#174D35] transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Training enquiry button */}
        <div className="mt-4 flex justify-center">
          <Link
            to="/contact?subject=Training%20enquiry"
            className="inline-flex min-h-10 w-full max-w-[340px] items-center justify-center gap-3 rounded-md bg-[#063D2B] px-6 py-3 text-[9px] font-extrabold tracking-wide text-white transition-colors duration-200 hover:bg-[#174D35] sm:max-w-[340px]"
          >
            ENQUIRE ABOUT TRAINING
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
