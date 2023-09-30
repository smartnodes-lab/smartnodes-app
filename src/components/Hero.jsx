import { React, useRef } from "react";
import styles from "../style";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="home" className={styles.section}>
      <div className={`flex-1 w-full flex-col items-center pl-10 max-w-xl`}>

        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          <span className="text-gradient1">Collective </span>{" "}
        </h1>
        
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          <span className="text-gradient2">Intelligence</span>{" "}
        </h1>

        <p className={`${styles.paragraph} mt-10`} style={{ lineHeight: '1.75' }}>
          Chainspace is building innovative network that addresses pressing issues surrounding individual job security and 
          wage disparities by offering a platform for individuals to monetize their skills and expertise over the web.
        </p>
      </div>
      
      <div className={'flex-1 justify-end items-center mt-5 max-w-4xl'}>
        <div className={styles.animatedIcon}>
          <HeroAnimation />
        </div>
        <div className="absolute w-[40%] h-[55%] left-20 white__gradient top-0"/>
        <div className="absolute z-[1] w-[40%] h-[0%] top-0 pink__gradient" />
        {/* {/* <div className="absolute z--1 w-[80%] h-[45%] rounded-full white__gradient bottom-100" /> */}
        {/* <div className="absolute z-[1] w-[50%] h-[50%] left-20 bottom-20 blue__gradient"/> */}
      </div>
    </section>
  );
};

export default Hero;