import React, { useState, useEffect } from "react";
import { overview } from "../constants";
import useReveal from "../hooks/useReveal";

const MainHero2 = () => {
  const words = ["Resource Sharing", "Global Collaboration", "Idle Hardware", "Edge Computing", "IoT Devices"];
  const animationDuration = 900;
  const [currentWord, setCurrentWord] = useState(" ");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [sectionRef, visible] = useReveal(0.15);

  useEffect(() => {
    let currentIndex = 0;

    const typeDeleteText = () => {
      setIsDeleting(true);

      const current = words[currentIndex];
      const nextIndex = (currentIndex + 1) % words.length;
      const next = words[nextIndex];

      let i = current.length;

      const deleteInterval = setInterval(() => {
        if (i > 0) {
          if (i === 1) {
            setCurrentWord(" ");
            i--;
          } else {
            setCurrentWord(current.substring(0, i - 1));
            i--;
          }
        } else {
          clearInterval(deleteInterval);
          setIsDeleting(false);
          setTimeout(() => {
            setIsTyping(true);
            let j = 0;
            const typeInterval = setInterval(() => {
              if (j < next.length) {
                setCurrentWord(next.substring(0, j + 1));
                j++;
              } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                  setIsTyping(false);
                  setTimeout(() => {
                    currentIndex = nextIndex;
                    typeDeleteText();
                  }, animationDuration);
                }, animationDuration * 3.5);
              }
            }, animationDuration / next.length);
          }, animationDuration / 1.5);
        }
      }, animationDuration / current.length);
    };

    typeDeleteText();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="grid gap-8 lg:gap-16 items-center">
        {/* Left Column - Spacer */}
        <div className="hidden lg:block" />

        {/* Right Column - Content */}
        <div className="space-y-4">

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEFF4] leading-tight">
            Unlocking Value From
          </h2>

          {/* Typing Animation */}
          <div className="text-3xl sm:text-4xl font-bold min-h-[1.2em]">
            <span className="text-[#4FD8C4]">{currentWord}</span>
            <span className="animate-pulse text-[#4FD8C4] ml-1">|</span>
          </div>

          {/* Description */}
          <p className="text-[#9AA2B4] text-md lg:text-lg leading-relaxed max-w-2xl">
            {overview.info}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="/app"
              className="inline-flex items-center px-6 py-3.5 text-[#0D1117] bg-[#4FD8C4] hover:bg-[#6FE8D6] rounded-lg font-semibold transition-all duration-200 hover:shadow-[0_0_30px_-8px_rgba(79,216,196,0.6)] hover:scale-105"
            >
              Network Dashboard
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero2;