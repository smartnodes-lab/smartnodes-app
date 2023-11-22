import styles from "../style";
import Button from "./Button";

const ToPortal = () => (
  <section className={`${styles.section} flex-col relative mt-20 sm:flex-row sm:mb-10 mb-6 self-center px-10 max-w-[1440px]`}>
    <div className={`w-full sm:flex-row mt-10 sm:mb-10 mb-6 z-[1] bg-gray-400 px-10 rounded-3xl`}>
      <h2 className={styles.heading2}>Get Started.</h2>
      <div className="flex mt-4 sm:mt-0 space-x-4"> {/* Added 'space-x-4' for button spacing */}
        <Button text="Product 1" link="/product1" />
        <Button text="Product 2" link="/product2" />
      </div>
    </div>
  </section>
);

export default ToPortal;
