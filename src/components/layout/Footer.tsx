import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Training", href: "/training" },
  { label: "Products", href: "/products" },
  { label: "Farm Management", href: "/farm-management" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Poultry Feeds", href: "/products?category=feeds" },
  { label: "Feeders & Drinkers", href: "/products?category=equipment" },
  { label: "Vaccines & Medicines", href: "/products?category=medicines" },
  { label: "Housing Equipment", href: "/products?category=housing" },
  { label: "Farm Tools", href: "/products?category=tools" },
  { label: "Request a Quote", href: "/contact?subject=Product%20quote" },
];

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="w-full bg-[#063D2B] text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-5 pt-8 sm:px-8 sm:pb-6 sm:pt-10 lg:px-12">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1.1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label="Baraka Farm home"
              className="inline-flex rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E9B949]"
            >
              <img
                src={`${baseUrl}ben1-logo.png`}
                alt="Baraka Farm"
                width={160}
                height={80}
                className="h-[58px] w-auto max-w-[175px] rounded-xl border border-white/15 bg-white p-2 object-contain shadow-sm"
                onError={(event) => {
                  console.error(
                    `Baraka Farm logo not found: ${baseUrl}ben1-logo.png`
                  );
                  event.currentTarget.style.display = "none";
                }}
              />
            </Link>

            <p className="mt-4 max-w-[290px] text-[12px] leading-[1.8] text-white/80">
              Practical training, quality supplies and trusted support for a
              stronger poultry farming community.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://wa.me/256773102927"
                aria-label="Chat with Baraka Farm on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-200 hover:border-[#E9B949] hover:bg-[#E9B949] hover:text-[#063D2B]"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-[13px] font-extrabold tracking-wide text-[#E9B949]">
              Explore
            </h3>

            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="inline-block text-[12px] text-white/80 transition-colors duration-200 hover:translate-x-1 hover:text-[#E9B949]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-[13px] font-extrabold tracking-wide text-[#E9B949]">
              Our Products
            </h3>

            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="inline-block text-[12px] text-white/80 transition-colors duration-200 hover:translate-x-1 hover:text-[#E9B949]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-[13px] font-extrabold tracking-wide text-[#E9B949]">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <a
                href="tel:+256773102927"
                className="group flex items-start gap-3 text-[12px] text-white/80 transition-colors hover:text-[#E9B949]"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>+256 773 102 927</span>
              </a>

              <a
                href="https://wa.me/256773102927"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-[12px] text-white/80 transition-colors hover:text-[#E9B949]"
              >
                <MessageCircle size={16} className="mt-0.5 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:info@barakafarm.com"
                className="group flex items-start gap-3 text-[12px] text-white/80 transition-colors hover:text-[#E9B949]"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span className="break-all">info@barakafarm.com</span>
              </a>

              <a
                href="https://maps.google.com/?q=Kikuube+Uganda"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-[12px] text-white/80 transition-colors hover:text-[#E9B949]"
              >
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Our Location</span>
                <ArrowUpRight size={13} className="mt-0.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Mat Labs credit */}
        <div className="mt-8 border-t border-white/20 pt-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-[11px] text-white/65">
              © {new Date().getFullYear()} Baraka Farm. All rights reserved.
            </p>

            <a
              href="https://matlbs.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Powered by Mat Labs"
              className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-75"
            >
              <span className="text-[10px] text-white/70">Powered by</span>

              <img
                src={`${baseUrl}mat2.png`}
                alt="Mat Labs"
                width={100}
                height={28}
                className="h-7 w-auto max-w-[100px] object-contain"
                onError={() => {
                  console.error(
                    `Mat Labs logo not found: ${baseUrl}mat2.png`
                  );
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
