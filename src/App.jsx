import styles from './style';
import React from 'react';
import { motion } from 'framer-motion';

import ParticleBackground from './components/ParticleBackground';
import { Navbar, Hero, Opportunity, Stats, Features, CardDeal, Testimonials, Clients, CTA, Footer } from './components';

const App = () => {

  return (
    <div className="bg-primary w-full overflow-hidden px-10 ${styles.flexCenter}">
      <ParticleBackground id="particles-container"/>
      <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
          <Navbar/>
          {/* <h1>Hi</h1> */}
        </div>
      </div>
      
      <div>
        <div className={'${styles.boxWidth}'}>
          <Hero/>
        </div>
      </div>

      <div className={'bg-primary px-10 ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Features />
          <Opportunity />
          {/* <CardDeal /> */}
          {/* <Testimonials /> */}
          {/* <Clients /> */}
          {/* <CTA /> */}
          <Footer /> 
        </div>
      </div>
    </div>
  );
}

export default App;