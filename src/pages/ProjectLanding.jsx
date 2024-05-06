import styles from "../style";
import React from "react";

import { Testimonials, ParticleBackground, MainHero, MainHero2, Opportunity, AnimatedLottie } from '../components';
import {space} from "../assets";

const ProjectLanding = () => {
  return (
    <div className={`min-h-screen flex-col ${styles.flexCenter} w-full`}>
      <div className="md:mt-1 mt-20 flex-col">
        <MainHero />
        <Opportunity />
        <Testimonials style={{ zIndex: 0 }} />
        <div className="max-w-[400px]">
        {/* <AnimatedLottie
          animationData={space}
          loop={true}
          className="max-w-[300px]"
        /> */}
        </div>
      </div>

      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <ParticleBackground />
      </div>
    </div>
  )
}

export default ProjectLanding;
