// Testimonials Component
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import AnimatedLottie from "./animations/AnimatedLottie";
import { features } from "../assets";
import React from "react";
import useReveal from "../hooks/useReveal";

const Testimonials = () => {
  const [sectionRef, visible] = useReveal(0.15);

  return (
    <section
      id="tools"
      ref={sectionRef}
      className={`
        relative pt-6 lg:pt-1 pb-20 mb-14 px-4 sm:px-6 lg:px-8 mb-44 md:mx-0 mx-2
        rounded-2xl
        border border-white/10
        bg-[#0D1117]
        backdrop-blur-xl
        shadow-[0_0_60px_-15px_rgba(79,216,196,0.12)]
        hover:border-[#4FD8C4]/40
        transition-all duration-700
        overflow-hidden
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-7xl mx-auto p-1 xs:p-6">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-5 pt-10">
          {/* Left - Title */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#EDEFF4] leading-tight mt-3">
              The{" "}
              <span className="text-[#4FD8C4]">Smartnodes</span>
              {" "}Ecosystem.
            </h2>
          </div>

          {/* Right - Animation */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md">
              <AnimatedLottie animationData={features} loop={true} />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-16 space-y-4 max-w-4xl">
          <p className="text-[#9AA2B4] text-sm sm:text-md md:text-lg leading-relaxed">
            Smartnodes connects specialized networks into one ecosystem, each optimized for different computational and data challenges. This modular design
            allows new networks to emerge organically, with block rewards distributed based on community utility and value.
          </p>
          <p className="text-[#9AA2B4] text-sm sm:text-md md:text-lg leading-relaxed">
            Validators stake SNO tokens to secure network activity and coordinate resources. Workers contribute resources, while users tap into this
            power through their own nodes or directly via APIs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
