import { React } from "react";
import styles from "../style";
import AnimatedLottie from "./AnimatedLottie";
import heroAnimation from "../assets/cloud-network.json";

const TaskHero = () => {

  return (
    <section id="home" className={`${styles.section} mb-10 md:mb-20`}>
      <div className={`flex-1 w-full flex-col items-center px-5 md:px-20 max-w-xl z-0`}>

        <h1 className="flex-1 font-poppins font-semibold lg:text-[70px] xs:text-[54px] ss:text-[64px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          <span className="text-gray-800 dark:text-gray-200 mb-4">Unleashing </span>{" "}
        </h1>
        
        <h1 className="flex-1 font-poppins font-bold xs:text-[54px] ss:text-[64px] lg:text-[70px] text-[42px] text-blue-800 ss:leading-[100.8px] leading-[75px]">
          <span>Intelligence</span>{" "}
        </h1>

        <p className={`${styles.paragraph} mt-10`} style={{ lineHeight: '1.75' }}>
        We're on a mission to revolutionize automated and decentralized systems, 
        bridging technology and human intelligence to unlock innovative use-cases and enhance existing applications.
        </p>
      </div>
      
      <div className={'flex-1 justify-end items-center mt-5 max-w-3xl'}>
        <div className={`${styles.animatedIcon}`}>
          <AnimatedLottie animationData={heroAnimation}/>
        </div>
        <div className="absolute w-[40%] h-[45%] left-20 white__gradient top-80"/>
        {/* <div className="absolute z-[1] w-[40%] h-[0%] top-0 pink__gradient" /> */}
        {/* <div className="absolute z-[1] w-[50%] h-[50%] left-20 bottom-20 blue__gradient"/> */}
      </div>
    </section>
  );
};

export default TaskHero;