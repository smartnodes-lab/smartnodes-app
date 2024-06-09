import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import AnimatedLottie from "./AnimatedLottie";
import { features } from "../assets";

const Testimonials = () =>  (
  <section id="tools" className={`${styles.flexCenter} flex-col`}>
    <div className={`w-full flex flex-col sm:flex-row items-center rounded-xl ${styles.content}`}>
      <h2 className={`${styles.heading2} text-[36px] mt-10 ml-10`}>
        The <br className="sm:block hidden" /> Tensorlink <br className="sm:block hidden" />Toolbox.
      </h2>
      <div className="sm:block hidden md:mr-10 sm:mr-7 mr-5">
        <AnimatedLottie animationData={features} loop={true}/>
      </div>
    </div>

    <div className="px-0">
      <div className={`mt-5 md:mt-10 flex flex-col md:flex-row justify-center items-center feedback-container relative z-[1] px-5 dark:bg-gray-900 bg-gray-200 rounded-3xl sm:py-7 py-3`}>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
      </section>
);

export default Testimonials;
