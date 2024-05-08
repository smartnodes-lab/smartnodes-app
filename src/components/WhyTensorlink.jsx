import styles from "../style";
import { useState } from "react";
import Spline from "@splinetool/react-spline";

const WhyTensorlink = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="relative bg-light dark:bg-dark z-20 blur-overlay items-center flex flex-col border-t border-b dark:border-white border-black ">
      <Spline className="absolute rotate-45 ss:-rotate-0 opacity-100 dark:opacity-90 ml-0 right-40 sm:ml-20 xs:left-0 sm:left-40 inset-0" 
        scene="https://prod.spline.design/GPugyFJ4ulwOW80h/scene.splinecode"
      />
      <div className="ss:ml-5 flex flex-row max-w-[1280px] items-center justify-center pt-5 relative">
        <div className="flex-row mt-20 px-10 z-20 mb-20 max-w-[1280px] relative">
          <h2 className={`${styles.heading2} ss:text-left text-center md:min-w-[820px] lg:min-w-[1250px]`}>
            Why<br />Tensorlink?<br />
          </h2>
          <p className={`${styles.landingText} mt-5 max-w-[270px] pl-5 ml-0 ss:pl-0 md:ml-0 xs:max-w-[400px] ss:max-w-[650px]`}>
            Tensorlink harnesses idle computers to efficiently process neural networks, primarily large language models (LLMs),
            providing an economical and user-friendly alternative to hosting services for machine learning.
          </p>
          <div className="lg:pl-3 lg:ml-3">
            <h3 className={`${styles.subheading} mt-10 sm:mt-20 text-left ml-4 md:min-w-[820px] lg:min-w-[1250px]`}>
              Simplicity
            </h3>
            <p className={`${styles.landingText2} mt-5 max-w-[270px] pl-5 ml-0 ss:pl-0 md:ml-0 xs:max-w-[400px] ss:max-w-[650px]`}>
              Unlike existing distributed computing solutions, which require extensive workflow customization and setup, 
              Tensorlink offers a simple, plug-and-play solution integrated with PyTorch, enabling straightforward
              distribution of neural networks. 
            </p>
          </div>
          <div className="lg:pl-6 lg:ml-6">
            <h3 className={`${styles.subheading} mt-10 sm:mt-20 text-left ml-4 md:min-w-[820px] lg:min-w-[1250px]`}>
              Cost
            </h3>
            <p className={`${styles.landingText2} mt-5 max-w-[270px] pl-5 ml-0 ss:pl-0 md:ml-0 xs:max-w-[400px] ss:max-w-[650px]`}>
              Through on-chain reward mechanisms, workers are incentivized to complete jobs, reducing costs and making cutting-edge machine learning more accessible to researchers and individuals.
            </p>
          </div>
          
          <div className="lg:pl-9 lg:ml-9 relative">
            <h3 className={`${styles.subheading} mt-10 sm:mt-20 text-left ml-4 md:min-w-[820px] lg:min-w-[1250px]`}>
              Power
            </h3>
            <p className={`${styles.landingText2} mt-5 max-w-[270px] pl-5 ml-0 ss:pl-0 md:ml-0 xs:max-w-[400px] ss:max-w-[650px]`}>
              Aim to deliver and aggregate computational resources that outshine even the most powerful supercomputers.
            </p>
          </div>
          
          {/* Position the Spline absolutely within the section */}
        </div>
      </div>
    </section>
  );
};

export default WhyTensorlink;
