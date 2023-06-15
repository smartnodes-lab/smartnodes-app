const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-bold xs:text-[64px] text-[72px] text-white xs:leading-[76.8px] leading-[66.8px] w-full ",
  paragraph: "font-poppins font-normal text-white text-[22px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-8",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  section: "sm:py-16 py-6 blur-overlay flex md:flex-row flex-col items-center justify-center",
  animatedIcon: "flex h-full w-full hidden xs:block block",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY} items-center justify-center`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.Start} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col align-items-center`,
};

export default styles;
