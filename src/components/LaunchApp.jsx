import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';

const LaunchApp = () => {
  return (
    <section className="relative z-20 w-full overflow-hidden py-10 pt-20 bg-slate-300 dark:bg-zinc-900">
      {/* Enhanced background with gradient and pattern - matching WhyTensorlink */}
      <div className="max-w-[250px] xs:max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 relative z-20">
        <div className="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
          <div className="px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                Get Started with{" "}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-red-400">
                  Smartnodes
                </span>
              </h2>
              
              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Access powerful computational resources and accelerate your data science projects
              </p>
              
              <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link 
                  to="app" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl text-base sm:text-lg flex items-center justify-center"
                >
                  Launch Dashboard
                </Link>
                
                <Link 
                  to="docs" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-600 text-base sm:text-lg flex items-center justify-center"
                >
                  Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchApp;