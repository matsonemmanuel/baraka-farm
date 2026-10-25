
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The training was very practical and easy to follow. I now manage my birds with more confidence.",
    author: "Farmer feedback",
  },
  {
    quote:
      "The quality feeds and equipment have really helped my poultry perform well.",
    author: "Farmer feedback",
  },
  {
    quote:
      "I appreciate the support and guidance. Baraka Farm is a reliable partner for farmers.",
    author: "Farmer feedback",
  },
];

export default function FarmerFeedback() {
  return (
    <section
      id="farmer-feedback"
      className="bg-[#F7F5EC] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-9"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <div className="mb-5 text-center sm:mb-6">
          <div className="mb-1.5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-4 bg-[#E9B949]" />

            <span className="text-[8px] font-extrabold tracking-[2px] text-[#174D35]">
              FARMER FEEDBACK
            </span>
          </div>

          <h2 className="font-serif text-[22px] font-bold leading-tight text-[#063D2B] sm:text-3xl lg:text-[30px]">
            Growing Together, One Farmer at a Time
          </h2>

          <p className="mt-1.5 text-[10px] text-[#62675F] sm:text-xs">
            We are proud to support farmers through training, quality supplies
            and ongoing guidance.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="flex min-h-[115px] gap-3 rounded-lg border border-white/80 bg-white/75 px-3 py-3 sm:min-h-[125px] sm:px-3.5 sm:py-3.5"
            >
              <Quote
                size={24}
                strokeWidth={0}
                fill="#E9B949"
                className="mt-0.5 shrink-0 rotate-180 text-[#E9B949]"
                aria-hidden="true"
              />

              <div className="flex flex-1 flex-col justify-between gap-3">
                <p className="text-[10px] leading-[1.55] text-[#343A33] sm:text-[9px] lg:text-[10px]">
                  {testimonial.quote}
                </p>

                <p className="text-[9px] font-semibold text-[#174D35]">
                  {testimonial.author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
