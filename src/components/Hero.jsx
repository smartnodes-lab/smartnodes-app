import styles from "../style";
import GetStarted from "./GetStarted";
import { useRef } from "react";
import TextAnimation from "./TextAnimation";

const Hero = () => {
  return (
    <section id="home" className={`blur-overlay flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 w-full flex-col items-center xl:px-0 sm:px-16 px-6`} style={{ paddingLeft: '100px' }}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}
      
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          <span>Distributed, </span>{" "}
        </h1>

        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          <span className="text-gradient1">On-Demand, </span>{" "}
        </h1>
        
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          <span className="text-gradient2">Intelligence</span>{" "}
        </h1>

        <p className={`${styles.paragraph} max-w-[600px] mt-5`} style={{ lineHeight: '1.75' }}>
          Task is a groundbreaking technology that harnesses the collective intelligence of users to tackle
          a wide range of tasks. With a similar structure to an oracle network - it is composed of a user-based 
          polling system instead of aggregated API calls by computers. Furthermore, Task offers collaborative and 
          competitive environments for users to complete machine learning and other computational tasks.
        </p>
      </div>

      <div className={'flex-1 flex'}>
        <div className="absolute z-[0] w-[40%] h-[0%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[50%] rounded-full white__gradient bottom-100" />
        <div className="absolute z-[0] w-[50%] h-[50%] left-20 bottom-20 blue__gradient"/>
      </div>
    </section>
  );
};

export default Hero;
