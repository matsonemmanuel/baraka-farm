
import {Phone, MessageCircle,} from "lucide-react";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-[60] min-h-8 bg-[#063D2B] text-white">
      <div className="mx-auto flex min-h-8 max-w-[1440px] flex-wrap items-center justify-between gap-x-3 gap-y-1 px-3 py-1 sm:px-6 lg:px-10">
        {/* Brand tagline: visible on mobile too */}
        <p className="text-[7px] font-extrabold tracking-[0.7px] text-[#E9B949] sm:text-[9px] sm:tracking-[1.5px]">
          POULTRY FARMING
          <span className="mx-1">·</span>
          TRAINING
          <span className="mx-1">·</span>
          QUALITY SUPPLIES
        </p>

        {/* Contact and social links */}
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+256700123456"
            className="flex items-center gap-1 text-[8px] transition-colors hover:text-[#E9B949] sm:text-[9px]"
          >
            <Phone size={10} />
            <span>+256 773 102 927</span>
          </a>

          <a
            href="https://wa.me/256773102927"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center gap-1 text-[8px] transition-colors hover:text-[#E9B949] sm:text-[9px]"
          >
            <MessageCircle size={12} />
            <span className="hidden min-[400px]:inline">Chat on WhatsApp</span>
          </a>

          {/* Social icons: visible from mobile upwards */}
          <div className="flex items-center gap-2 sm:gap-3">
            

            <a
              href="https://youtube.com/"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
              className="flex h-4 w-4 items-center justify-center text-white transition-colors hover:text-[#E9B949]"
            >
              <span className="text-[9px]">▶</span>
            </a>

            
          </div>
        </div>
      </div>
    </div>
  );
}
