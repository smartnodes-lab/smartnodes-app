import styles from "../style";
import React from "react";

import { Navbar, Testimonials, ParticleBackground, MainHero, TaskHero, Footer } from '../components';

const NewsLanding = () => {
  return (
    <div className={`dark:bg-dark bg-light min-h-screen flex-col ${styles.flexCenter} w-full`}>
      <div className="mt-5 sm:mt-10 flex-col">
        <TaskHero />
        <MainHero />
        <Testimonials style={{ zIndex: 0 }} />
      </div>

      <div  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <ParticleBackground />
      </div>
    </div>
  )
}

export default NewsLanding;
