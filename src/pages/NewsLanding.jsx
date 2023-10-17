import styles from "../style";
import React from "react";
import { motion } from "framer-motion";

import { Navbar, Footer, ParticleBackground } from '../components';

const NewsLanding = () => {
    return (
        <div className="bg-black w-full overflow-hidden px-10 ${styles.flexCenter}">
          <ParticleBackground id="particles-container" />
          <div className={'${styles.paddingX} ${styles.flexCenter}'}>
            <div className={'${styles.boxWidth}'}>
              <Navbar/>
            </div>
          </div>

          <div className={'bg-primary px-10 ${styles.flexStart}'}>
            <div className={'${styles.boxWidth}'}>
              <Footer />
            </div>
          </div>
        </div>
    )
}

export default NewsLanding;