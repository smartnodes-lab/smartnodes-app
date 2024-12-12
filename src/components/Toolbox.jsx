import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import AnimatedLottie from "./animations/AnimatedLottie";
import { features } from "../assets";

const Testimonials = () => (
  <section id="tools" className={`${styles.flexCenter} flex-col px-5 mt-20 pt-20`}>
    {/* First section */}
    <div className={`w-full px-10 z-20`}>
      <div className="items-center rounded-2xl dark:bg-gray-900 bg-gray-300 px-10 py-5">
        <div className="w-full flex flex-col sm:flex-row items-center">
          <h2 className={`${styles.heading} font-extrabold text-[36px] mt-4 sm:mt-5 ml-10`}>
            The <br className="sm:block hidden" /> Smartnodes <br className="sm:block hidden" /> Toolbox.
          </h2>
          <div className="sm:block hidden md:mr-20 sm:mr-7 mr-5 mt-2">
            <AnimatedLottie animationData={features} loop={true} />
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed max-w-[1300px] sm:pb-10 sm:px-10 p-4">
          Smartnodes equips developers with cutting-edge tools designed to simplify and accelerate data acquisition and computation, 
          with a strong focus on Python—a leading programming language in data science. The core mission is to broaden the accessibility 
          of computational resources across a wide range of scientific and research domains, ranging from neural network training to computational physics. 
          These powerful functionalities are encapsulated in dedicated networks and made available through programming libraries and APIs.
        </p>
        {/*We welcome ideas for resource-sharing applications that can benefit from the security and incentives provided by smart contracts.
        Visit our <a href="https://github.com/smartnodes-lab" className="text-blue-500 underline hover:text-blue-700">GitHub</a> to contribute or explore more.*/}
      </div>
    </div>

    {/* Feedback section */}
    <div className="w-full px-10 z-20 pt-10">
      <div className={`flex flex-col md:flex-row justify-center items-center feedback-container relative sm:py-7 py-3 z-[1] dark:bg-gray-900 dark:bg-opacity-50 rounded-2xl`}>
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
