
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import feedsImage from "../../assets/images/service2.jpg";
import feedersImage from "../../assets/images/product1.jpg";
import drinkersImage from "../../assets/images/product2.jpg";
import equipmentImage from "../../assets/images/product3.jpg";

const products = [
  {
    title: "Poultry Feeds",
    description: "Nutritious feeds for strong growth.",
    image: feedsImage,
    alt: "Poultry feed bags",
    href: "/products?category=feeds",
  },
  {
    title: "Feeders",
    description: "Durable feeders for all stages.",
    image: feedersImage,
    alt: "Red poultry feeder",
    href: "/products?category=feeders",
  },
  {
    title: "Drinkers",
    description: "Clean water for healthier birds.",
    image: drinkersImage,
    alt: "White poultry drinker",
    href: "/products?category=drinkers",
  },
  {
    title: "Poultry Equipment",
    description: "Essential tools for your farm.",
    image: equipmentImage,
    alt: "Poultry farming equipment",
    href: "/products?category=equipment",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#F7F5EC] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-9"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <div className="mb-5 text-center sm:mb-6">
          <div className="mb-1.5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-4 bg-[#E9B949]" />
            <span className="text-[8px] font-extrabold tracking-[2px] text-[#174D35]">
              OUR PRODUCTS
            </span>
          </div>

          <h2 className="font-serif text-[23px] font-bold leading-tight text-[#063D2B] sm:text-3xl lg:text-[32px]">
            The Essentials for Your Poultry House
          </h2>

          <p className="mt-1.5 text-[10px] text-[#62675F] sm:text-xs">
            Reliable feeds, equipment and supplies for healthy and productive birds.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
          {products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Link to={product.href} className="block">
                {/* Product image */}
                <div className="h-[125px] overflow-hidden sm:h-[115px] lg:h-[145px]">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product information */}
                <div className="flex min-h-[77px] items-center justify-between gap-2 px-2.5 py-3 sm:px-2.5 lg:px-3">
                  <div className="min-w-0">
                    <h3 className="font-serif text-[12px] font-bold leading-tight text-[#202923] sm:text-[12px] lg:text-[14px]">
                      {product.title}
                    </h3>

                    <p className="mt-1.5 text-[9px] leading-snug text-[#62675F] sm:text-[9px] lg:text-[10px]">
                      {product.description}
                    </p>
                  </div>

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] transition-colors group-hover:bg-[#063D2B] group-hover:text-white">
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Availability button */}
        <div className="mt-5 flex justify-center">
          <Link
            to="/contact?subject=Product%20availability"
            className="inline-flex min-h-10 items-center justify-center gap-3 rounded-full bg-[#063D2B] px-6 py-3 text-[9px] font-extrabold tracking-wide text-white transition-colors hover:bg-[#174D35] sm:min-w-[300px]"
          >
            ASK ABOUT AVAILABILITY
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
