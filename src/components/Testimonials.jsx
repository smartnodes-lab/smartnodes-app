import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import AnimatedLottie from "./AnimatedLottie";
import { features } from "../assets";

const Testimonials = () =>  (
  <section id="tools" className={`${styles.flexCenter} flex-col mt-20`}>
    <div className={`w-full flex flex-col sm:flex-row items-center rounded-xl mt-20 ${styles.content}`}>
      <h2 className={`${styles.heading2} text-[36px] mt-20 ml-10`}>
        The <br className="sm:block hidden" /> Chainspace <br className="sm:block hidden" />Toolbox.
      </h2>
      <div className="sm:block hidden md:mr-10 sm:mr-7 mr-5">
        <AnimatedLottie animationData={features} loop={true}/>
      </div>
    </div>


    <div className={`mt-5 sm:mt-10 flex md:flex-row flex-col justify-center items-center md:items-start feedback-container relative z-[1] xs:px-8 dark:bg-gray-900 bg-gray-200 rounded-3xl sm:py-7 py-3`}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
