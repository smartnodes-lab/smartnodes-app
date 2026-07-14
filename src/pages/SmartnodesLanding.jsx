import styles from "../style";
import React, { useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider";
import { Testimonials, LaunchApp, MainHero, MainHero2, Opportunity, ParticleBackground, Framework } from '../components';

const SmartnodesLanding = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  useEffect(() => {
    setActiveMenu(false);
  }, []);

  return (
    <div className={`min-h-screen flex-col ${styles.flexCenter} w-full`}>
      <div 
        className="md:mt-1 mt-5 flex-col md:mx-5 lg:mx-14 transition-transform duration-300 px-1"
        style={{ zIndex: 1000000000000 }}
      >
        <MainHero />
        <Framework />
        <MainHero2 />
        <Opportunity />
        <Testimonials style={{ zIndex: 0 }} />
        {/* <LaunchApp /> */}
      </div>
    </div>
  )
}

export default SmartnodesLanding;