import styles from "../style";
import React from "react";

import { Navbar, Testimonials, ParticleBackground, MainHero, TaskHero, Footer, ToPortal } from '../components';

const Home = () => {
  return (
    <div className={`dark:bg-dark bg-light max-w-screen min-h-screen flex-col ${styles.flexCenter}`}>
      <div className="flex w-full max-w-[1440px] px-10 justify-center">
          <Navbar />
      </div>

      <div className="mt-5 sm:mt-10 w-screen">
        <TaskHero />
        <MainHero />
        <Testimonials style={{ zIndex: 0 }}/>
        <ToPortal />
        <Footer />
      </div>

      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
        <ParticleBackground />
      </div>
    </div>
  )
}

export default Home;
