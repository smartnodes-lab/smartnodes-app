const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-bold text-[42px] xs:text-[54px] ss:text-[60px] lg:text-[72px] text-gray-700 dark:text-white w-full ",
  paragraph: "font-poppins font-normal dark:text-white text-gray-900 sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[30.8px]",

  content: "flex flex-col max-w-[1440px] px-5 sm:px-10 lg:px-20",
  contentBox: "flex items-center bg-primary border-radius-50",

  flexCenter: "flex items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-8",
  paddingY: "sm:py-16 py-5",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  section: "mt-10 px-5 blur-overlay flex md:flex-row flex-col items-center justify-center",
  section2: "sm:py-16 py-15 px-10 blur-overlay flex md:flex-row flex-col items-center justify-center bg-black-gradient rounded-2xl z-0 max-w-[1250px] mx-auto",
  animatedIcon: "flex h-full w-full hidden xs:block block",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY} items-center justify-center mb-10`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.Start} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col align-items-center`,
};

export default styles;
