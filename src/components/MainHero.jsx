import { React } from "react";
import styles from "../style";
import AnimatedLottie from "./AnimatedLottie";
import heroAnimation from "../assets/cloud-network.json";
import { Link } from "react-router-dom";

const MainHero = () => {

  return (
    <section id="home" className={`${styles.section} rounded-3xl xs:px-7 px-20`}>
      <div className="dark:bg-gray-900 bg-gray-100 rounded-3xl px-3 flex sm:mx-10 md:flex-row flex-col z-20">
        <div className={`flex-1 w-full flex-col items-cente max-w-xl z-0 mx-3 sm:mx-5 md:mx-10 md:py-20 xs:py-10 py-5 mb-5`}>
          <h1 className="flex-1 font-poppins font-semibold lg:text-[70px] xs:text-[42px] ss:text-[54px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gray-800 dark:text-gray-200">Fueling </span>{" "}
          </h1>
          
          <h1 className="flex-1 font-poppins font-bold lg:text-[70px] xs:text-[42px] ss:text-[54px] text-[32px] text-blue-800 ss:leading-[100.8px] leading-[75px]">
            <span>Innovation.</span>{" "}
          </h1>

          <div className={`mt-4`}>
            <p className={`${styles.paragraph}`} style={{ lineHeight: '1.75' }}>
              Smartnodes is a hybrid smart contract that powers and incentivizes decentralized physical infrastructure. Through interactions with specialized off-chain networks, 
              Smartnodes fuels the sharing of resources across a wide range of fields including machine learning (<Link to="/tensorlink" className="underline font-bold text-blue-600">Tensorlink</Link>) and astrophysics (TBA).
            </p>
          </div>
        </div>
        
        <div className={'flex-1 items-center mt-5 max-w-3xl'}>
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