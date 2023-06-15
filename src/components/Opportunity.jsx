import { apple, online1, google } from "../assets";
import styles, { layout } from "../style";

const UseCases = () => (
  <section id="product" className={layout.section}>
    <div className={'flex-1 w-full flex-col items-center pl-5 hidden md:block max-w-xl'}>
      <img src={online1} alt="opportunity" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={'flex-1 w-full flex-col md:pl-20 items-center align-center max-w-xl'}>
      <h2 className={styles.heading2}>
        A vibrant <br className="sm:block hidden" />
        marketplace <br className="sm:block hidden" />
        of opportunity.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
        Participate in the future marketplace for jobs. Offer your skills and 
        expertise to solve datasets, train AI collaboratively, or execute 
        distributed models for various applications. Synergy is creating new
        avenues for employment and collaboration within the platform.
      </p>
{/* 
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default UseCases;