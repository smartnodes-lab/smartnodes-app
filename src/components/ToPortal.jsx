import styles from "../style";
import { portals } from "../constants";
import AnimatedLottie from "./AnimatedLottie";
import { pingpong } from "three/src/math/MathUtils.js";

const ToPortal = () => (
  <section className={`flex pt-0 pb-20 flex-col items-center justify-center border-t dark:border-t-white border-t-black`}>
    <div className="w-full text-center pt-20 lg:pb-10 px-20 dark-grad-vertical">
      <h2 className={styles.heading2}>Get Started with Tensorlink.</h2>
    </div>
    <div className="flex flex-wrap justify-center mt-10 max-w-[1200px]">
      {portals.map((product, index) => (
        <div key={index} className={`flex items-center justify-center py-4 px-4 border-slate-400 `}>
          <CustomComponent {...product} wide={index === 1} />
        </div>
      ))}
    </div>
  </section>
);

const CustomComponent = ({ title, link, img, wide }) => (
  <a href={link} className="no-underline">
    <div className={`feedback-card rounded-2xl py-1 flex flex-col justify-between xs:min-h-[265px] xs:max-h-[265px] md:min-w-[425px] lg:min-w-[350px] xs:min-w-[320px] min-w-[240px]`}>
      <div className="flex flex-col items-center justify-center h-full">
        <h4 className="font-poppins font-semibold lg:text-2xl text-xl mt-5 text-white mb-1 text-center">
          {title}
        </h4>
        <div className={`align-middle justify-center content-center max-w-[140px] min-w-[170px] max-h-[190px] min-h-[190px]
                          ${wide ? "overflow-hidden min-w-[240px] xs:min-w-[300px]" : " md:max-w-[150px] md:min-w-[180px] md:max-h-[200px] md:min-h-[200px]"}`}>
          <AnimatedLottie animationData={img} loop={true}/>
        </div>
      </div>
    </div>
  </a>
);

export default ToPortal;
