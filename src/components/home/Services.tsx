
import { ArrowRight } from "lucide-react";

import trainingImage from "../../assets/images/service1.jpg";
import feedsImage from "../../assets/images/service2.jpg";
import managementImage from "../../assets/images/service3.jpg";

const services = [
  {
    title: "Poultry Training",
    description: "Practical skills for better results.",
    image: trainingImage,
    alt: "Farmer training a group in poultry farming",
    href: "/training",
  },
  {
    title: "Feeds & Equipment",
    description: "Quality supplies for healthy birds.",
    image: feedsImage,
    alt: "Poultry feeds and feeding equipment",
    href: "/products",
  },
  {
    title: "Farm Management",
    description: "Guidance for sustainable growth.",
    image: managementImage,
    alt: "Healthy chickens in a poultry house",
    href: "/farm-management",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F7F5EC] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <div className="mb-5 text-center sm:mb-6">
          <div className="mb-1.5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-4 bg-[#E9B949]" />
            <span className="text-[8px] font-extrabold tracking-[2px] text-[#174D35]">
              OUR SERVICES
            </span>
          </div>

          <h2 className="font-serif text-[25px] font-bold leading-[1.05] text-[#063D2B] sm:text-3xl lg:text-[34px]">
            Everything You Need
            <br />
            to Raise with Confidence
          </h2>

          <p className="mx-auto mt-2 max-w-[520px] text-[10px] leading-relaxed text-[#62675F] sm:text-xs">
            From practical training to quality supplies and expert guidance,
            Baraka Farm supports farmers at every step.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 lg:gap-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <a
                href={service.href}
                aria-label={`Explore ${service.title}`}
                className="block"
              >
                {/* Image */}
                <div className="h-[165px] overflow-hidden sm:h-[105px] lg:h-[150px]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card content */}
                <div className="flex min-h-[65px] items-center justify-between gap-2 px-3 py-2.5 sm:min-h-[68px] sm:px-2.5 lg:px-3">
                  <div>
                    <h3 className="font-serif text-[13px] font-bold leading-tight text-[#202923] sm:text-[12px] lg:text-[14px]">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-[10px] leading-snug text-[#62675F] sm:text-[9px] lg:text-[10px]">
                      {service.description}
                    </p>
                  </div>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] transition-colors group-hover:bg-[#063D2B] group-hover:text-white">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
