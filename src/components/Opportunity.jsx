import { apple, online1, google } from "../assets";
import styles, { layout } from "../style";

const Opportunity = () => (
  <section id="product" className={layout.section}>
    <div className={'flex-1 w-full flex-col items-center pl-5 hidden md:block md:mb-10 max-w-xl'}>
      <img src={online1} alt="opportunity" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
    </div>

    <div className={'flex-1 w-full flex-col md:pl-20 items-center align-center mb-10 max-w-xl z-0'}>
      <h2 className={styles.heading2}>
        A distributed  
        employment <br className="sm:block hidden" />
        framework.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-10`} style={{ lineHeight: '1.75' }}>
        Monetize your ideas through peer-to-peer data portals and build your online identity. Chainspace provides a dynamic 
        platform for individuals to showcase their knowledge and problem-solving abilities for the benefit of others. Moreover, 
        online and automated systems can harness the power of human intelligence to improve workflows and the need for deticated 
        support teams.
      </p>
    </div>
{/*       
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
  </section>
);

export default Opportunity;