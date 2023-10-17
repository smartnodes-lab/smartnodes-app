import styles from "../style";
import React from "react";

import { Navbar, TaskHero, Opportunity, Features, Footer, ParticleBackground } from '../components';

const TaskLanding = () => {
  return (
    <div className={`dark:bg-dark bg-light w-full overflow-hidden px-10 relative`}>
      <div className="relative z-10">
        <ParticleBackground id="particles-container" className="relative inset-0 z-0" />
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar className="z-50" />
          </div>
        </div>

        <div>
          <div className={'${styles.boxWidth} mb-10'}>
            <TaskHero />
          </div>
        </div>
        

        <div className={'bg-primary px-10 ${styles.flexStart}'}>
          <div className={'${styles.boxWidth}'}>
            <Opportunity />
            <Features />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskLanding;
