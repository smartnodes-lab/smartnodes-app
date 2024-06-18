import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import AnimatedLottie from "./AnimatedLottie";
import { features } from "../assets";

const Testimonials = () =>  (
  <section id="tools" className={`${styles.flexCenter} flex-col`}>
    <div className={`w-full px-5 z-20`}>
      <div className="items-center rounded-xl dark:bg-gray-900 bg-gray-200 px-10 py-10">
        <div className="w-full flex flex-col sm:flex-row items-center ">
          <h2 className={`${styles.heading2} text-[36px] mt-10 ml-10`}>
            The <br className="sm:block hidden" /> Smartnodes <br className="sm:block hidden" /> Toolbox.
          </h2>
          <div className="sm:block hidden md:mr-10 sm:mr-7 mr-5">
            <AnimatedLottie animationData={features} loop={true}/>
          </div>
        </div>
        <p className={`${styles.landingText} max-w-[1300px] p-10`}>
          We are equipping developers with direct access to super networks of computing power and other devices, empowering users with the immense potential of distributed systems and unlocking new possibilities.
        </p>
      </div>
    </div>

    <div className="px-0 mx-5">
      <div className={`mt-5 md:mt-10 flex flex-col md:flex-row justify-center items-center feedback-container relative sm:py-7 py-3 z-[1] px-5 dark:bg-gray-900 bg-gray-200 rounded-3xl`}>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
