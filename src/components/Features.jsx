import { features } from "../constants";
import styles from "../style";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FeatureCard = ({ icon, title, expanded_content, content, index }) => {
  const [expanded, setExpanded] = useState(false);
  const classNames = ["feature-card-1", "feature-card-2", "feature-card-3"];

  return (
    <motion.div
      layout
      transition={{
        layout: {
          duration: 1,
          type: "spring",
        },
      }}
      className={`flex flex-row p-6 opacity-1 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} ${classNames[index]}`}
      onClick={() => setExpanded(!expanded)}
      style={{ 
        cursor: "pointer",
        borderRadius: ".5rem",
        boxShadow: "0 0 16px rgba(0,0,0,0.5)", 
      }}
    >
      <motion.div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        initial={{ scale: 1 }}
        animate={{ scale: expanded ? 0.8 : 1 }}
        transition={{ duration: 0.3 }}
        layout="position"
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </motion.div>
      <motion.div 
        className="flex-1 flex flex-col ml-3"
      >
        <motion.h4 
          className="font-poppins font-semibold text-white text-[20px] leading-[23.4px] mb-2"
          layout="position"
        >
          {title}
        </motion.h4>
        <motion.p    
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout="position"
          className="font-poppins font-semibold text-gray-950 text-[16px] leading-[23.4px] mb-1"
        >
          {content}
        </motion.p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {expanded_content.map((feature) => (
                <motion.p
                  key={feature}
                  className="font-poppins mt-3 font-semibold text-white text-[16px] leading-[20px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
};

const Features = () =>  (
  <section id="features" className={styles.section}>
    <div className='flex-1 w-full flex-col position:relative items-center max-w-xl'>
      <h2 className={styles.heading2}>
        Where AI and <br className="sm:block hidden" /> 
        human minds
      </h2>

      <h2 className={styles.heading2}>
          converge.
      </h2>
    </div>

    <div className='flex-1 z-100 w-full flex-col items-center pl-5 max-w-xl'>
      <AnimatePresence initial={false}>
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <FeatureCard {...feature} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  </section>
);

export default Features;