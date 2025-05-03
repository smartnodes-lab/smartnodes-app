import React from "react";
import styles, { layout } from "../../../style";
import { NavButton } from "../..";


const SmartnodesOverview = () => (
  <section path="/docs/install" className="px-5 mt-6 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center h-full">
    <div className="text-left px-5 xs:px-0 md:mt-16 mt-5 max-w-[1280px] justify-center items-center xs:mr-56">
      <div className="flex items-center mb-6 mt-5">
        <div className="bg-blue-600 h-8 w-2 mr-4 rounded-lg"></div>
        <h1 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Distributed Peer-to-Peer Networks in Python.</h1>
      </div>
      <h3 className="text-xl sm:text-3xl dark:text-zinc-100 font-bold">Coming Soon...</h3>
      <p className={`${styles.landingText2} px-10 text-lg pb-20 dark:text-gray-300 text-black mb-5 mt-5`}>
        <a className="dark:text-blue-300 text-blue-600 " href="/tensorlink/docs">Tensorlink documentation</a><br/>
        <a className="dark:text-blue-300 text-blue-600 " href="/">Home</a>
      </p>
    </div>
  </section>


);

export default SmartnodesOverview;
