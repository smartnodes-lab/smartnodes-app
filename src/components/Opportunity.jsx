import styles, { layout } from "../style";
import Spline from "@splinetool/react-spline";

const Opportunity = () => (
  <section id="product" className={`${layout.section} mt-0 px-5 relative`}>

  {/* <div className={'flex-1 w-full flex-col items-center pl-5 hidden md:block md:mb-10 max-w-xl'}>
    <img src={online1} alt="opportunity" className="w-[100%] h-[100%] relative z-[5]" />
  </div> */}
    <div className='flex justify-between space-x-4 z-40 pt-20'>
      {/* Text content section */}
      <div className={'flex-1 w-full flex-col md:pl-20 items-center mb-10 max-w-xl'}>
        <h2 className={styles.heading2}>
          Rewarding
          <br className="sm:block hidden" /> Users.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-10`} style={{ lineHeight: '1.75' }}>
          Deploy our specialized infrastructure, operate nodes on your computer, or tackle challenges directly from your smartphone 
          to earn SNO. Join us in crafting the future of decentralized infrastructure and collaborative innovation.
        </p>
      </div>
    </div>
    <div className={'flex-1 w-full flex-col items-center pl-5 hidden md:block md:mb-10 max-w-xl'}>
    </div>
    <Spline className="absolute ml-20 left-10 z-0" scene="https://prod.spline.design/sZvfpvAoCKi8FOTv/scene.splinecode"/>

    {/*       
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
  </section>
);

export default Opportunity;
