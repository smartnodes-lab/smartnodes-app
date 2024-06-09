import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";

const Example = () => (
  <section className={`bg-gradient-to-t from-slate-50 to-transparent dark:from-gray-950 dark:to-transparent mt-10 items-center flex flex-col`}>
    <div className="flex-row px-10 mb-20 max-w-[1280px]">
      <h2 className={`${styles.heading2} ss:text-left text-center md:min-w-[820px] lg:min-w-[1250px]`}>
        Distributed<br />Neural Network<br />Scaling. 
      </h2>
      <p className={`${styles.landingText} mt-5 max-w-[270px] pl-10 ml-0 ss:pl-0 md:ml-0 xs:max-w-[250px] ss:max-w-[600px]`}>
        Tensorlink empowers you with cutting-edge tools for rapid and scalable model deployment directly from PyTorch.
      </p>
    </div>

    <div className="border-t border-gray-400 bg-slate-50 dark:bg-gray-900 flex justify-center min-w-full">
      <div className="mt-10 mb-10 z-10 flex max-w-[1280px] sm:flex-row flex-col sm:items-start justify-center items-center w-full">
        {features.map((feature, index) => (
          <div key={index} className={`p-4 ${layout.feature} px-10 xs:px-5 ${index === 1 ? "sm:border-gray-400 sm:border-l sm:border-r" : ""}`}>
            <p className="sm:text-[14px] md:text-[16px] lg:text-[18px] text-black font-bold dark:text-white">{feature.title}</p>
            <hr className="hr-centered my-2 border-t border-gray-400"/>
            <p className="text-[13px] sm:text-[15px] lg:text-[15px] text-black dark:text-white">{feature.content}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Example;
