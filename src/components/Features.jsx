import { features } from "../constants";
import styles from "../style";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FeatureCard = ({
  icon,
  title,
  expanded_content,
  content,
  index,
  isExpanded,
  toggleExpansion
}) => {
  const classNames = ["feature-card-1", "feature-card-2", "feature-card-3"];

  const handleClick = () => {
    toggleExpansion(index);
  };

  return (
    <motion.div 
      className={`card-container`}
      onClick={handleClick}
    >
      <motion.div
        className={`card ${isExpanded ? "expanded" : ""} ${
          index !== features.length - 1 ? "mb-6" : "mb-0"
        } ${classNames[index]}`}
        initial={{ transform: "rotateY(0deg)" }}
        animate={{
          transform: isExpanded ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: { duration: 1 },
          transformStyle: "preserve-3d",
        }}
      >
        <div className="card-front">
          {/* Content for the front of the card */}
          <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
            <img
              src={icon}
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[22px] leading-[23.4px] mb-2">
              {title}
            </h4>
            <p>{content}</p>
          </div>
        </div>
        <ul className={`card-back ${classNames[index]}`}>
          {/* Content for the back of the card */}
          {expanded_content.map((feature, featureIndex) => (
            <li key={featureIndex}>
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleCardExpansion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section id="features" className={`${styles.section2}`}>
      <div className="flex-1 w-full flex-col ml-10 position:relative mb-10 mt-10 items-center max-w-xl">
        <h2 className={styles.heading2}>
          Simplify <br className="sm:block hidden" />
          tasks.
        </h2>
      </div>

      <div className="flex-1 z-100 w-full flex-col items-center max-w-xl">
        <AnimatePresence className="flex-item" initial={false}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FeatureCard
                {...feature}
                index={index}
                isExpanded={index === expandedIndex}
                toggleExpansion={toggleCardExpansion}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Features;