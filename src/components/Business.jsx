import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo} style={{ paddingLeft: '50px' }}>
      <h2 className={styles.heading2}>
        Contribute your knowledge <br className="sm:block hidden" /> 
        and computing power.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;


// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { features } from '../constants';
// import styles, { layout } from '../style';
// import Button from './Button';

// const FeatureCard = ({ icon, title, content, index }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <motion.div
//       className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}
//       layout
//       onClick={toggleOpen}
//     >
//       <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
//         <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
//       </div>
//       <div className="flex-1 flex flex-col ml-3">
//         <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
//           {title}
//         </h4>
//         <AnimatePresence>
//           {isOpen && (
//             <motion.p
//               className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {content}
//             </motion.p>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// const Business = () => {
//   return (
//     <section id="features" className={layout.section}>
//       <div className={layout.sectionInfo} style={{ paddingLeft: '50px' }}>
//         <h2 className={styles.heading2}>
//           Contribute your knowledge <br className="sm:block hidden" />
//           and computing power.
//         </h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}></p>

//         <Button styles={`mt-10`} />
//       </div>

//       <div className={`${layout.sectionImg} flex-col`}>
//         {features.map((feature, index) => (
//           <FeatureCard key={feature.id} {...feature} index={index} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Business;