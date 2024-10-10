import { React } from "react";
import styles from "../style";
import AnimatedLottie from "./AnimatedLottie";
import heroAnimation from "../assets/cloud-network.json";
import { Link } from "react-router-dom";

const MainHero = () => {

  return (
    <section id="home" className={`${styles.section} rounded-xl xs:px-7 px-20`}>
      <div className="dark:bg-gray-900 bg-gray-300 rounded-2xl px-5 flex sm:mx-10 md:flex-row flex-col z-20">
      
        {/* Left Column - Title & Description */}
        <div className="flex-1 w-full flex-col items-center max-w-xl sm:min-w-[350px] z-0 mx-3 sm:mx-5 md:mx-10 md:py-10 py-6 mb-5">
        
          {/* Title */}
          <h1 className="flex-1 font-poppins font-extrabold lg:text-[56px] xs:text-[36px] ss:text-[46px] text-[32px] text-gray-900 dark:text-gray-100 ss:leading-[80.8px] leading-[55px] mt-3">
            <span className="block">Distributed</span>
            <span className="block">Networks for</span>
            <span className="text-blue-800 dark:text-blue-400 block">Science & Compute.</span>
          </h1>

          {/* Subtitle */}
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed max-w-lg">
              Smartnodes is a hybrid smart contract platform designed to power and incentivize peer-to-peer resource sharing. 
              By leveraging specialized off-chain networks, Smartnodes establishes a diverse web of distributed resources that drive innovation across a variety of fields.
            </p>
          </div>
        </div>

        {/* Right Column - Animation */}
        <div className={'flex-1 items-center mt-1 max-w-3xl'}>
          <div className={`${styles.animatedIcon} align-middle`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatedLottie animationData={heroAnimation}/>
          </div>
          <div style={{ zIndex: -1 }} className="absolute w-[40%] h-[45%] left-0 opacity-50 white__gradient dark:black__gradient top-80"/>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
