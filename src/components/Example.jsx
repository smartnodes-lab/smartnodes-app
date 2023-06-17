import styles, { layout } from "../style";
import Button from "./Button";

const Example = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Participate in <br className="sm:block hidden" /> 
        collective insight.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Instantiate models for distributed, on-demand to 
        be executed on a large-scale for dApps and other applications
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
    </div>
  </section>
);

export default Example;