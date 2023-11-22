import styles from "../style";
import React, { useState, useEffect } from "react";
import { data } from "../assets";
import { overview } from "../constants";
import AnimatedLottie from "./AnimatedLottie";

const MainHero = () => {
  const words = ["Engagement", "Collective Insight", "Your Knowledge"];
  const animationDuration = 900; // Adjust the duration for typing and pause
  const [currentWord, setCurrentWord] = useState(" ");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // Add state for deleting

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
                  }, animationDuration); // Pause between words
                }, animationDuration * 3.5); // Longer pause after typing word
              }
            }, animationDuration / next.length);
          }, animationDuration / 1.5); // Short pause after deleting word
        }
      }, animationDuration / current.length);
    };

    typeDeleteText();
  }, []);

  return (
    <section className={styles.section}>
      <div className={`items-center rounded-xl mt-20 ${styles.content}`}>
        <div className={`${styles.contentBox} flex-row mt-2 mb-2`}>
          <div className="z-0 w-[58%] h-[25%] absolute rounded-full black__gradient left-20" />
          <div className="min-w-[325px] mr-10 hidden sm:block">
            <AnimatedLottie animationData={data} loop={true} />
          </div>
          <div className="z-20 max-w-xl justify-center items-center">
            <div className="py-10 justify-items-center bg-light dark:bg-gray-700 shadow-xl px-10 rounded-3xl">
              <h2 className="text-[38px] md:text-[44px] font-bold text-gray-800 dark:text-white">Unlocking  
              <br className=""/> Value From </h2>
              <div className="text-[42px] md:text-[46px] font-bold text-orange-500 mb-2">
                    <span className={`typing ${isTyping ? "animate-typing" : ""}`}>
                        {currentWord}
                    <span className="animate-pulse font-light leading-tight">|</span>
                </span>
              </div>
              <p className={`${styles.paragraph} py-2`}>{overview.info}</p>
              <a
                href="#tools"
                className="mt-5 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm md:text-base font-semibold transition duration-300 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
