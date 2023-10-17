import styles from "../style";
import { React } from "react";
import { data } from "../assets";
import { overview } from "../constants";
import AnimatedLottie from "./AnimatedLottie";

const MainHero = () => {
    return(
        <section className={styles.section}>
            <div className={`bg-white dark:bg-gray-700 shadow-xl items-center rounded-xl ${styles.content}`}>
                <div className={`${styles.contentBox} flex-row mt-2 mb-2`}>
                    <div className="z-0 w-[58%] h-[25%] absolute rounded-full dark:white__gradient black__gradient left-20" />
                    <div className="min-w-[300px] mr-10 hidden md:block">
                        <AnimatedLottie animationData={data} loop={true} />
                    </div>
                    <div className="z-20 max-w-xl justify-center items-center">
                        <div className="sm:mr-10 py-10 justify-items-center">
                            <h2 className="text-[36px] md:text-[42px] font-bold text-gray-800 dark:text-gray-200 mb-4" >Empowering Individuals and Computational Systems</h2>
                            <p className={`${styles.paragraph} py-2`}>{overview.info}</p>
                            <a
                                href="#tools"
                                className="mt-5 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm md:text-base font-semibold transition duration-300 ease-in-out"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainHero;