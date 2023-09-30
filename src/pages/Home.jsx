import styles from "../style";
import React from "react";
import { motion } from "framer-motion";

import { Navbar, Hero, Opportunity, Features, Example, Footer, ParticleBackground } from '../components';

const Home = () => {
    return (
        <div className="bg-primary w-full overflow-hidden px-10 ${styles.flexCenter}">
          <ParticleBackground id="particles-container" />
          <div className={'${styles.paddingX} ${styles.flexCenter}'}>
            <div className={'${styles.boxWidth}'}>
              <Navbar/>
            </div>
          </div>

          <div>
            <div className={'${styles.boxWidth} mb-10'}>
              <Hero/>
            </div>
          </div>

          <div className={'bg-primary px-10 ${styles.flexStart}'}>
            <div className={'${styles.boxWidth}'}>
              <Opportunity />
              <Features />
              {/* <Example /> */}
              {/* <Testimonials /> */}
              {/* <Clients /> */}
              {/* <CTA /> */}
              <Footer />

            </div>
          </div>
        </div>
    )
}

export default Home;