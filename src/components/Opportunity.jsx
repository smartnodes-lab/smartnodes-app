import styles, { layout } from "../style";
import Spline from "@splinetool/react-spline";

const Opportunity = () => (
  <section 
    id="product" 
    className={`${layout.section} mt-0 px-20 sm:px-5 relative overflow-hidden`} // Ensure no horizontal scroll
  >
    <div className="flex justify-between space-x-4 z-40 pt-20 sm:px-0 px-10">
      {/* Text content section */}
      <div className={'flex-1 w-full flex-col md:pl-20 items-center mb-10 max-w-xl'}>
        <h2 className={`${styles.heading} font-extrabold`}>
          Rewarding
          <br className="sm:block hidden" /> Users.
        </h2>
        <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed max-w-xl mt-5" style={{ lineHeight: '1.75' }}>
          Users can leverage their computational resources or dedicated devices to complete tasks and earn SNO, the native payment
          and rewards token. Join us in creating a vibrant ecosystem of technological advancement and resource sharing. 
        </p>
      </div>
    </div>
    <div className={'flex-1 w-full flex-col items-center pl-5 hidden md:block md:mb-10 max-w-xl'}>
    </div>

    {/* Spline animation */}
    <Spline 
      className="absolute z-0 left-[50vw] md:left-[25vw] lg:left-[20vw]"
      scene="https://prod.spline.design/sZvfpvAoCKi8FOTv/scene.splinecode"
    />
    
  </section>
);

export default Opportunity;
