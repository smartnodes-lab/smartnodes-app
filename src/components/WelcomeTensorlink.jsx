import React, { useState } from "react";
import styles from "../style";
import { ml_flow } from "../assets";

const WelcomeTensorlink = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="bg-slate-50 dark:bg-gray-900 blur-overlay items-center flex flex-col">
      <div className="flex flex-col mb-20 lg:flex-row items-center justify-center pt-5 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center mt-20 px-20">
          <h2 className={`${styles.heading} text-middle xs:max-w-[350px] max-w-[250px] sm:max-w-[1280px]`}>
            Revolutionizing training with Tensorlink.
          </h2>
          <p className={`${styles.landingText} self-start ml-3 xs:ml-5 sm:ml-0 mt-5 mb-10 xs:max-w-[350px] max-w-[250px] sm:max-w-[1280px]`}>
            Tensorlink transforms neural network training by:
          </p>
          <ul className={`${styles.landingText} list-disc ml-7 mr-7 xs:mr-0 xs:ml-10 max-w-[650px] mb-5`}>
            <li key="1" className="mb-7">
              Providing a universal framework for accelerating neural network training, connecting users' existing workflows to a networks of GPUs.
            </li>
            <li key="2" className="mb-7">
              Utilizing data and pipeline parallelism to efficiently host large models over the internet, enabling large-scale model training on consumer devices.
            </li>
            <li key="3" className="mb-7">
              Delivering large-scale computation at a fraction of the cost by incentivizing consumers to monetize their idle GPUs.
            </li>
          </ul>
        </div>
        <img
          src={ml_flow}
          className="sm:min-w-[200px] lg:min-w-[500px] md:max-w-[550px] mb-10 px-5 lg:px-10"
          alt="Flowchart showing Tensorlink process"
          style={{
            backgroundColor: "#333", // Medium grey background color
            border: "2px solid #ccc",   // Nice border
            borderRadius: "8px",         // Rounded corners
            padding: "35px"              // Padding inside the border
          }}
        />
      </div>
    </section>
  );  
};

export default WelcomeTensorlink;
