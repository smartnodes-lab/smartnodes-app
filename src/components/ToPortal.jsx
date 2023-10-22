import styles from "../style";
import Button from "./Button";

const ToPortal = () => (
  <section className={`${styles.flexCenter} flex-col relative mt-20 sm:flex-row sm:mb-10 mb-6 px-10`}>
    <div className={`w-full flex flex-col sm:flex-row mt-10 sm:mb-10 mb-6 relative z-[1] bg-gray-400 px-10 mx-20 rounded-3xl`}>
      <h2 className={styles.heading2}>Get Started.</h2>
      <div className="flex items-center mt-4 sm:mt-0">
        <Button text="Product 1" link="/product1" />
        <Button text="Product 2" link="/product2" />
      </div>
    </div>
  </section>
);

export default ToPortal;
