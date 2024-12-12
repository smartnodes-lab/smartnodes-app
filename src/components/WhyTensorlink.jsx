import styles from "../style";
import { useState } from "react";
import Spline from "@splinetool/react-spline";

const WhyTensorlink = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="relative z-20 items-center flex flex-col border-t border-b dark:border-white border-black bg-gradient-to-bl from-gray-200 to-transparent dark:from-gray-900 w-full overflow-hidden">
      <div className="flex flex-row max-w-[1280px] items-center justify-center pt-5 relative z-20">
        <div className="flex-row mt-20 px-10 xs:mx-0 mx-5 mb-20 max-w-[1280px] relative">
          <h2 className={`${styles.heading2} font-extrabold ss:text-left text-center md:min-w-[820px] lg:min-w-[1250px]`}>
            Why<br />Tensorlink?<br />
          </h2>
          <p className={`${styles.landingText} mt-5 max-w-[270px] pl-5 ml-0 ss:pl-0 md:ml-0 xs:max-w-[400px] ss:max-w-[650px]`}>
            Tensorlink harnesses idle computers to efficiently process neural networks in PyTorch,
            providing an economical and user-friendly alternative to hosting services.
          </p>
          <div className="lg:pl-3 lg:ml-3">
            <h3 className={`${styles.subheading} mt-10 sm:mt-20 text-left ml-4 md:min-w-[820px] lg:min-w-[1250px]`}>
              Simplicity
            </h3>
            <p className={`${styles.landingText} mt-5 max-w-[270px] pl-5 ml-0 ss:pl-0 md:ml-0 xs:max-w-[400px] ss:max-w-[650px]`}>
              Unlike existing distributed computing solutions, which require extensive workflow customization and setup, 
              Tensorlink offers a simple, plug-and-play solution integrated with PyTorch, enabling straightforward
              acceleration of neural network training. 
            </p>
          </div>
          <div className="lg:pl-6 lg:ml-6">
            <h3 className={`${styles.subheading} mt-10 sm:mt-20 text-left ml-4 md:min-w-[820px] lg:min-w-[1250px]`}>
              Cost
            </h3>
            <p className={`${styles.landingText} mt-5 max-w-[270px] pl-5 ml-0 ss:pl-0 md:ml-0 xs:max-w-[400px] ss:max-w-[650px]`}>
              Through on-chain reward mechanisms, workers are incentivized to complete jobs, reducing costs and making cutting-edge models more accessible to researchers, startups, and individual developers.
            </p>
          </div>
          <div className="lg:pl-9 lg:ml-9 relative">
            <h3 className={`${styles.subheading} mt-10 sm:mt-20 text-left ml-4 md:min-w-[820px] lg:min-w-[1250px]`}>
              Power
            </h3>
            <p className={`${styles.landingText} mt-5 max-w-[270px] pl-5 ml-0 ss:pl-0 md:ml-0 xs:max-w-[400px] ss:max-w-[650px]`}>
              We aim to deliver and aggregate computational resources that rival even the most powerful supercomputers. With Tensorlink, you can tap into a vast network of computing power at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTensorlink;
