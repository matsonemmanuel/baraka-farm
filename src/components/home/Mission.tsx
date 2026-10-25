
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import missionImage from "../../assets/images/mission.jpg";

export default function Mission() {
  return (
    <section className="w-full bg-[#063D2B] px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-8">
      <div className="mx-auto grid max-w-[1200px] items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Left: Large mission photograph */}
        <div className="h-[230px] overflow-hidden rounded-lg sm:h-[300px] lg:h-[270px]">
          <img
            src={missionImage}
            alt="Baraka Farm sharing practical poultry knowledge with farmers"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Right: Mission content */}
        <div className="flex flex-col justify-center text-white">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-[2px] w-4 bg-[#E9B949]" />
            <span className="text-[9px] font-extrabold tracking-[2px] text-[#E9B949]">
              OUR MISSION
            </span>
          </div>

          <h2 className="max-w-[560px] font-serif text-[29px] font-bold leading-[1.02] tracking-[-0.4px] sm:text-4xl lg:text-[38px]">
            Knowledge That
            <br />
            Grows Beyond the Farm
          </h2>

          <p className="mt-3 max-w-[520px] text-[12px] leading-[1.55] text-white/90 sm:text-sm">
            Baraka Farm shares practical poultry keeping skills that help
            farmers make informed decisions, care for their birds and
            strengthen their livelihoods.
          </p>

          <div className="mt-5">
            <Link
              to="/about"
              className="inline-flex min-h-10 items-center justify-center gap-3 rounded-full border border-white/70 px-5 py-3 text-[9px] font-extrabold tracking-wide text-white transition-colors duration-200 hover:border-[#E9B949] hover:bg-[#E9B949] hover:text-[#063D2B]"
            >
              MEET BARAKA FARM
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
