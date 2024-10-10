import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import AnimatedLottie from "./AnimatedLottie";
import { features } from "../assets";

const Testimonials = () => (
  <section id="tools" className={`${styles.flexCenter} flex-col px-5`}>
    {/* First section */}
    <div className={`w-full px-10 z-20`}>
      <div className="items-center rounded-2xl dark:bg-gray-900 bg-gray-300 px-10 py-5">
        <div className="w-full flex flex-col sm:flex-row items-center">
          <h2 className={`${styles.heading} font-extrabold text-[36px] mt-4 sm:mt-7 ml-10`}>
            The <br className="sm:block hidden" /> Smartnodes <br className="sm:block hidden" /> Toolbox.
          </h2>
          <div className="sm:block hidden md:mr-20 sm:mr-7 mr-5">
            <AnimatedLottie animationData={features} loop={true} />
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed max-w-[1300px] sm:pb-10 sm:px-10 p-4">
          We are equipping developers with advanced tools designed to streamline data acquisition and computation, with a strong focus on Python, a leading programming language for data science. 
          Smartnodes is committed to expanding resources for various applications, including neural network training, computational physics, and beyond.
        </p>
      </div>
    </div>

    {/* Feedback section */}
    <div className="w-full px-10 z-20 pt-10">
      <div className={`flex flex-col md:flex-row justify-center items-center feedback-container relative sm:py-7 py-3 z-[1] dark:bg-gray-900 rounded-2xl`}>
        <div className="flex flex-wrap justify-center max-w-[1300px] w-full">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
