// import styles, { layout } from "../style";
// import { ml_flow } from "../assets";
// import { useState } from "react";

// const WelcomeTensorlink = () => {
//   const [active, setActive] = useState(false);

//   return (
//     <section className="bg-slate-50 dark:bg-gray-900 blur-overlay items-center flex flex-col">
//       <div className="flex flex-col mb-20 lg:flex-row items-center justify-center border-t dark:border-t-white border-t-black mt-5 max-w-[1280px] mx-auto">
//         <div className="flex flex-col items-center px-10 mt-20">
//           <h2 className={`${styles.heading} text-middle xs:max-w-[350px] max-w-[250px] sm:max-w-[1280px]`}>
//             Revolutionizing training with<br />Tensorlink.<br />
//           </h2>
//           <p className={`${styles.landingText} mt-5 mb-10 xs:max-w-[350px] max-w-[250px] sm:max-w-[1280px]`}>
//             Tensorlink transforms neural network training by:
//             <ul className="list-disc mt-8 ml-8">
//               <li className="mb-6">
//                 Connecting users' existing workflows to a network that effortlessly handles distributed training.
//               </li>
//               <li className="mb-6">
//                 Utilizing data and pipeline parallelism to efficiently host large models and impact of internet latency.
//               </li>
//               <li className="mb-6">
//                 Creating an on-chain ecosystem for: collateralized nodes, establishing reputation, payments, and incentivizedrewards.
//               </li>
//             </ul>
//           </p>
//         </div>
//         <img src={ml_flow} className="hidden sm:block min-w-[200px] md:max-w-[550px] mb-10 px-5 lg:px-0" alt="Flowchart showing Tensorlink process" />
//       </div>
//     </section>
//   );  
// };

// export default WelcomeTensorlink;


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
            Revolutionizing training with<br />Tensorlink.<br />
          </h2>
          <p className={`${styles.landingText} self-start ml-20 xs:ml-5 sm:ml-0 sm:ml-0 mt-5 mb-10 xs:max-w-[350px] max-w-[250px] sm:max-w-[1280px]`}>
            Tensorlink transforms neural network training by:
          </p>
          <ul className={`${styles.landingText} list-disc ml-20 mr-20 xs:mr-0 xs:ml-10 max-w-[550px]`}>
            <li key="1" className="mb-6">
              Connecting users' existing workflows to a network that effortlessly handles distributed training.
            </li>
            <li key="2" className="mb-6">
              Utilizing data and pipeline parallelism to efficiently host large models and impact of internet latency.
            </li>
            <li key="3" className="mb-6">
              Creating an on-chain ecosystem for: collateralized nodes, establishing reputation, payments, and incentivized rewards.
            </li>
          </ul>
        </div>
        <img src={ml_flow} className="hidden sm:block min-w-[200px] md:max-w-[550px] mb-10 px-5 lg:px-0" alt="Flowchart showing Tensorlink process" />
      </div>
    </section>
  );  
};

export default WelcomeTensorlink;
