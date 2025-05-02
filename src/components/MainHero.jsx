import { React } from "react";
import styles from "../style";
import AnimatedLottie from "./animations/AnimatedLottie";
import heroAnimation from "../assets/cloud-network.json";
import { python_logo } from "../assets";
import { Link } from "react-router-dom";

const MainHero = () => {

  return (
    <section id="home" className={`${styles.section} rounded-md xs:px-7 px-20`}>
      <div className="dark:bg-zinc-900 bg-zinc-200 rounded-xl px-5 flex sm:mx-10 md:flex-row flex-col z-20 border border-gray-300 dark:border-black">
      
        {/* Left Column - Title & Description */}
        <div className="flex-1 w-full flex-col items-center max-w-xl sm:min-w-[350px] z-0 mx-3 sm:mx-5 md:mx-10 md:py-10 py-6 mb-5">
        
          {/* Title */}
          <h1 className="flex-1 font-poppins font-extrabold lg:text-[56px] xs:text-[36px] ss:text-[46px] text-[32px] text-gray-900 dark:text-gray-100 ss:leading-[80.8px] leading-[55px] mt-3">
            <span className="inline text-blue-500">Distributed </span>
            <span className="inline text-blue-500">Infrastructure </span>
            <span className="inline"> for </span>
            <span className="inline text-yellow-400">Python </span>
            <img 
              src={python_logo} 
              className="inline-block ml-1 h-9 lg:h-9 align-baseline" 
            />
            {/* <span className="inline text-red-400">Data Processing </span>
            <span className="inline"> in </span>
            <span className="inline text-blue-400">Python</span>
            <span className="inline">.</span> */}
          </h1>

          {/* Subtitle */}
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed max-w-lg">
            Smartnodes is a platform designed to power and incentivize peer-to-peer resource sharing in Python: 
            a leading programming language for data science and machine learning. By leveraging existing and dedicated hardware 
            across the globe, it establishes a diverse web of tools and compute infrastructure that enable scalable data processing 
            and scientific computation via APIs and packages.
            </p>
          </div>
        </div>

        {/* Right Column - Animation */}
        <div className={'flex-1 items-center mt-1 max-w-3xl'}>
          <div className={`${styles.animatedIcon} align-middle`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatedLottie animationData={heroAnimation}/>
          </div>
          {/* <div style={{ zIndex: -1 }} className="absolute w-[40%] h-[45%] left-0 opacity-50 white__gradient dark:black__gradient top-80"/> */}
        </div>
      </div>
    </section>
  );
};

export default MainHero;
