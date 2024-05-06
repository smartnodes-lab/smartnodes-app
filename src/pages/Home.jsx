import styles from "../style";
import React, { useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider";

import { Example, WelcomeTensorlink, WhyTensorlink, Stats, GettingStarted } from '../components';

const Home = () => {
  const { setActiveMenu } = useStateContext();

  // Use useEffect to call setActiveMenu only once after the component mounts
  useEffect(() => {
    setActiveMenu(true);
  }, []); // The empty array means this effect runs only once after the initial render

  return (
    <div className={`z-20 min-h-screen flex-col ${styles.flexCenter} min-w-full`}>
      <div className="z-10 mt-5 ml-20 sm:mt-10 flex-col min-w-full">
        <h2 className={`${styles.heading} text-middle xs:max-w-[350px] max-w-[250px] sm:max-w-[1280px]`}>
          Coming soon...<br />
        </h2>
        {/* <GettingStarted path="/getting-started"/> */}
      </div>
    </div>
  )
}

export default Home;
