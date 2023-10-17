import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () =>  (
  <section id="tools" className={`${styles.flexCenter} ${styles.content} flex-col relative `}>
    <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}>
      <h2 className={`${styles.heading2} mt-20`}>
        Tools for <br className="sm:block hidden" /> Navigating the <br className="sm:block hidden" /> Digital Landscape.
      </h2>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
