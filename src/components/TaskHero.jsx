import { React } from "react";
import styles from "../style";
import AnimatedLottie from "./AnimatedLottie";
import heroAnimation from "../assets/cloud-network.json";

const TaskHero = () => {

  return (
    <section id="home" className={`${styles.section} rounded-3xl xs:px-10 px-5`}>
      <div className="dark:bg-gray-900 bg-gray-200 rounded-3xl px-3 flex md:flex-row flex-col z-20">
        <div className={`flex-1 w-full flex-col items-center max-w-xl z-0 mx-3 sm:mx-5 md:mx-10 md:py-20 xs:py-10 py-5 mb-5`}>

          <h1 className="flex-1 font-poppins font-semibold lg:text-[70px] xs:text-[42px] ss:text-[54px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gray-800 dark:text-gray-200">Unleashing </span>{" "}
          </h1>
          
          <h1 className="flex-1 font-poppins font-bold lg:text-[70px] xs:text-[42px] ss:text-[54px] text-[32px] text-blue-800 ss:leading-[100.8px] leading-[75px]">
            <span>Intelligence</span>{" "}
          </h1>

          <div className={`mt-4`}>
            <p className={`${styles.paragraph}`} style={{ lineHeight: '1.75' }}>
              We're on a mission to revolutionize automated and decentralized systems, 
              bridging technology and human intelligence to unlock innovative use-cases and enhance existing applications.
            </p>
          </div>
        </div>
        
        <div className={'flex-1 justify-end items-center mt-5 max-w-3xl'}>
          <div className={`${styles.animatedIcon}`}>
            <AnimatedLottie animationData={heroAnimation}/>
          </div>
          <div className="absolute w-[40%] h-[45%] left-0 white__gradient dark:black__gradient top-80"/>
          {/* <div className="absolute z-[1] w-[40%] h-[0%] top-0 pink__gradient" /> */}
          {/* <div className="absolute z-[1] w-[50%] h-[50%] left-20 bottom-50 blue__gradient"/> */}
        </div>
      </div>
    </section>
  );
};

export default TaskHero;