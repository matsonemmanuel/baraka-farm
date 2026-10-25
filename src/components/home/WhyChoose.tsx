
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import farmImage from "../../assets/images/bird.jpg";

export default function WhyChoose() {
  return (
    <section className="relative isolate min-h-[220px] w-full overflow-hidden bg-[#171A14] sm:min-h-[250px] lg:min-h-[270px]">
      {/* Background photograph */}
      <img
        src={farmImage}
        alt="Healthy chickens raised in a poultry farm"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Dark overlays preserve contrast and the reference design */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171A14] via-[#171A14]/90 to-[#171A14]/15" />
      <div className="absolute inset-0 -z-10 bg-black/10" />

      {/* Banner content */}
      <div className="mx-auto flex min-h-[220px] max-w-[1200px] items-center px-5 py-7 sm:min-h-[250px] sm:px-8 sm:py-9 lg:min-h-[270px] lg:px-12">
        <div className="max-w-[650px]">
          {/* Eyebrow */}
          <div className="mb-2 flex items-center gap-2">
            <span className="h-[2px] w-4 bg-[#E9B949]" />

            <span className="text-[8px] font-extrabold tracking-[2px] text-[#E9B949]">
              WHY CHOOSE BARAKA FARM
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[600px] font-serif text-[29px] font-bold leading-[1.04] tracking-[-0.4px] text-white sm:text-4xl lg:text-[42px]">
            A Stronger Flock Starts
            <br />
            with the Right Knowledge.
          </h2>

          {/* Supporting text */}
          <p className="mt-2 max-w-[460px] text-[11px] leading-relaxed text-white/90 sm:text-sm">
            Better skills. Healthier birds. Brighter futures.
          </p>

          {/* CTA */}
          <Link
            to="/contact?subject=Poultry%20farming%20enquiry"
            className="mt-4 inline-flex min-h-10 items-center justify-center gap-3 rounded-full bg-[#E9B949] px-6 py-3 text-[9px] font-extrabold tracking-wide text-[#063D2B] transition-all duration-200 hover:bg-white"
          >
            LET'S TALK POULTRY
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
