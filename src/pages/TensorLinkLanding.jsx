import styles from "../style";
import React, { useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider";

import { Example, ToPortal, WhyTensorlink, Stats, WelcomeTensorlink } from '../components';

const TensorLinkLanding = () => {
  const { setActiveMenu } = useStateContext();

  return (
    <div className={`z-20 min-h-screen flex-col ${styles.flexCenter} min-w-full`}>
      <div className="z-10 mt-5 sm:mt-10 flex-col min-w-full">
        <Example />
        <WhyTensorlink />
        <WelcomeTensorlink />
        <ToPortal />
      </div>
    </div>
  )
}

export default TensorLinkLanding;
