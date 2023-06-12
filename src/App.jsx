import styles from './style';
import React from 'react';

import ParticleBackground from './components/ParticleBackground';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <ParticleBackground id="particles-container"/>
      <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
          <Navbar/>
          {/* <h1>Hi</h1> */}
        </div>
      </div>
      
      <div className={'${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Hero/>
        </div>
      </div>

      <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Business />
          {/* <Billing /> */}
          <CardDeal />
          {/* <Testimonials /> */}
          {/* <Clients /> */}
          <CTA />
          <Footer /> 
        </div>
      </div>
    </div>
  );
}

export default App;