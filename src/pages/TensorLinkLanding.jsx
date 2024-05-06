import styles from "../style";
import React from "react";


import { ParticleBackground, Example, ToPortal, WhyTensorlink, Stats, WelcomeTensorlink } from '../components';

const TensorLinkLanding = () => {
  return (
    <div className={`z-20 min-h-screen flex-col ${styles.flexCenter} min-w-full`}>
      <div className="z-10 mt-5 sm:mt-10 flex-col min-w-full">
        <Example />
        <WhyTensorlink />
        <WelcomeTensorlink />
        <ToPortal />
      </div>

      <div  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
        <ParticleBackground />
      </div>
    </div>
  )
}

export default TensorLinkLanding;
