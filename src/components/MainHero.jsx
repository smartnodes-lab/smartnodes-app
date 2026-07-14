import AnimatedLottie from "./animations/AnimatedLottie";
import heroAnimation from "../assets/cloud-network.json";
import { ParticleBackground } from "../components";
import React from "react";
import useReveal from "../hooks/useReveal";

const MainHero = () => {
  const [sectionRef, visible] = useReveal(0.15);

  return (
    <div style={{ zIndex: 100 }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <ParticleBackground />
      </div>

      <section
        ref={sectionRef}
        className={`relative max-w-7xl mx-auto py-20 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center border border-white/10 rounded-2xl p-8 bg-[#0D1117]/60 backdrop-blur-md shadow-[0_0_40px_-15px_rgba(0,0,0,0.6)] hover:border-[#4FD8C4]/40 transition-colors">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-10 md:ml-5">
            {/* Title */}
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#EDEFF4]">
              <span className="text-[#4FD8C4]">Shared Power</span>
              <br />
              <span>for </span>
              <span className="text-[#6FE8D6]">Big Problems</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#9AA2B4] text-md lg:text-xl leading-relaxed max-w-xl">
              Smartnodes connects devices around the world into collaborative, peer-to-peer compute and data collection networks.
              By uniting shared hardware, we power AI, scientific research, and large-scale computations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="/app"
                className="group inline-flex items-center justify-center px-4 py-2 text-[#0D1117] bg-[#4FD8C4] hover:bg-[#6FE8D6] rounded-lg font-semibold transition-all duration-200 hover:shadow-[0_0_30px_-8px_rgba(79,216,196,0.6)] hover:scale-105"
              >
                <svg className="w-4 h-4 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Dashboard
              </a>
              <a
                href="/docs"
                className="group inline-flex items-center justify-center px-4 py-2 text-[#4FD8C4] border border-[#4FD8C4]/40 hover:border-[#4FD8C4] hover:bg-[#4FD8C4]/10 rounded-lg font-semibold transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Documentation
              </a>
            </div>
          </div>

          {/* Right Column - Animation */}
          <div className="relative hidden md:flex h-[400px] items-center justify-center">
            <div className="w-full max-w-lg">
              <AnimatedLottie animationData={heroAnimation} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHero;