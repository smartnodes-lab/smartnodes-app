import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";

const FeatureCard = ({ icon, title, content, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  function getStyle(ind) {
    if (ind === 0) {
      return "feature-card-1";
    } else if (ind === 1) {
      return "feature-card-2";
    } else {
      return "feature-card-3";
    }
  };

  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} ${getStyle(index)}`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[20px] leading-[23.4px] mb-1">
          {title}
        </h4>

        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Features = () =>  (
  <section id="features" className={styles.section}>
    <div className='flex-1 w-full flex-col items-center max-w-xl'>
      <h2 className={styles.heading2}>
        Where AI and <br className="sm:block hidden" /> 
        human minds
      </h2>

      <h2 className={styles.heading2}>
          converge.
      </h2>
    </div>

    <div className='flex-1 w-full flex-col items-center pl-5 max-w-xl'>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Features;