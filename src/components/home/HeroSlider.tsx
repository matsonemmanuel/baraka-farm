
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import heroFarm from "../../assets/images/hero1.jpg";
import heroTraining from "../../assets/images/hero2.jpg";
import heroPoultry from "../../assets/images/hero3.jpg";

const slides = [
  {
    image: heroFarm,
    eyebrow: "BARAKA FARM · POULTRY & FARMER DEVELOPMENT",
    title: ["Grow Better.", "Farm Smarter.", "Build Your Future."],
    description:
      "Practical poultry skills, dependable farm supplies and knowledge that helps farmers thrive.",
    button: "EXPLORE OUR SERVICES",
    link: "/training",
    alt: "Farmer caring for a chicken inside a poultry house",
  },
  {
    image: heroTraining,
    eyebrow: "PRACTICAL SKILLS · STRONGER FARMERS",
    title: ["Learn Together.", "Grow Confidently.", "Succeed in Farming."],
    description:
      "Build practical skills through farmer training and guidance designed for real farm conditions.",
    button: "DISCOVER OUR TRAINING",
    link: "/training",
    alt: "Farmer training and sharing practical poultry knowledge",
  },
  {
    image: heroPoultry,
    eyebrow: "QUALITY SUPPLIES · HEALTHIER BIRDS",
    title: ["Raise Healthy Birds.", "Improve Your Farm.", "Grow Your Business."],
    description:
      "Find quality poultry supplies and practical guidance for every stage of your farming journey.",
    button: "BROWSE OUR PRODUCTS",
    link: "/products",
    alt: "Healthy poultry raised in a clean poultry house",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  function previousSlide() {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  }

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      aria-label="Baraka Farm highlights"
      className="relative isolate h-[460px] w-full overflow-hidden bg-[#063D2B] sm:h-[500px] lg:h-[calc(100svh-104px)] lg:min-h-[500px] lg:max-h-[720px]"
    >
      {/* Background images */}
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={index === activeSlide ? slide.alt : ""}
          aria-hidden={index !== activeSlide}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay matching the reference */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 -z-0 h-2/3 bg-gradient-to-t from-[#061b13]/85 via-[#061b13]/25 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-6 pb-16 pt-12 sm:px-10 sm:pb-[76px] lg:px-12 lg:pb-[92px]">
        <div className="max-w-[690px]">
          <p className="mb-3 text-[9px] font-extrabold tracking-[1.8px] text-[#E9B949] sm:text-[10px] sm:tracking-[2px]">
            {currentSlide.eyebrow}
          </p>

          <h1 className="font-serif text-[34px] font-bold leading-[0.99] tracking-[-0.7px] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.01]">
            {currentSlide.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-3 max-w-[460px] text-[12px] leading-[1.5] text-white/95 sm:text-sm">
            {currentSlide.description}
          </p>

          <a
            href={currentSlide.link}
            className="mt-4 inline-flex min-h-10 items-center gap-4 rounded-full bg-[#E9B949] px-6 py-3 text-[9px] font-extrabold tracking-wide text-[#063D2B] transition-all duration-200 hover:bg-white sm:min-h-11 sm:px-7"
          >
            {currentSlide.button}
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between sm:bottom-5 sm:left-10 sm:right-10 lg:left-12 lg:right-12">
        {/* Slide number and progress */}
        <div className="flex items-center gap-3">
          <span className="min-w-[14px] text-xs font-bold tabular-nums text-[#E9B949]">
            {String(activeSlide + 1).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-8 bg-[#E9B949]"
                    : "w-4 bg-white/25 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Previous and next arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={previousSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-[#063D2B] sm:h-11 sm:w-11"
          >
            <ArrowLeft size={17} />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9B949] text-[#063D2B] transition-colors hover:bg-white sm:h-11 sm:w-11"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
