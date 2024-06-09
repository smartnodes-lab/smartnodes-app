import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';

const LaunchApp = () => {
  return (
    <section className={`${styles.section} rounded-3xl xs:px-10 px-5`}>
      <div className="dark:bg-gray-900 bg-gray-200 rounded-3xl px-3 flex sm:mx-10 md:flex-row flex-col z-20">
        <div className="flex-1 w-full flex-col items-center max-w-xl z-0 mx-3 sm:mx-5 md:mx-10 md:py-10 xs:py-10 py-5 mb-5">
          <h1 className={`flex-1 ${styles.subheading}`}>
            Get Started with Smartnodes
          </h1>
          {/* <div className={`mt-4`}>
            <p className={`${styles.paragraph}`} style={{ lineHeight: '1.75' }}>
              Click the button below to explore Smartnodes.
            </p>
          </div> */}
          <div className="mt-8">
            <Link to="app" className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded">
              Launch dApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchApp;
