import React from "react";
import styles from "../style";

const Welcome = () => {
  return (
    <div className={`z-20 min-h-screen flex-col ${styles.flexCenter} min-w-full`}>
      <div className="z-10 mt-2 sm:mt-5 flex-col min-w-full">
        <h2 className={`${styles.heading} text-middle xs:max-w-[350px] max-w-[250px] sm:max-w-[1280px]`}>
          Coming soon...
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
