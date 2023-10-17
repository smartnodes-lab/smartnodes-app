import styles from "../style";
import React from "react";

import { Navbar, Testimonials, ParticleBackground, MainHero, TaskHero, Footer } from '../components';

const Home = () => {
  return (
    <div className={`dark:bg-dark bg-light max-w-screen min-h-screen flex-col ${styles.flexCenter}`}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="flex w-full max-w-[1440px] px-10">
            <Navbar />
        </div>

        <div className="mt-5 sm:mt-10 z-0">
          <TaskHero />
          <MainHero />
          <Testimonials/>
          <Footer />
        </div>
      </div>

      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <ParticleBackground />
      </div>
    </div>
  )
}

export default Home;
