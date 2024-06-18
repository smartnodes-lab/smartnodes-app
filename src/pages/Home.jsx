import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Overview, WelcomeDocs, WalletSetup, GettingStarted, ModelExample} from "../components";
import { useStateContext } from "../contexts/contextProvider";

const Home = () => {
  const { setActiveMenu } = useStateContext();

  useEffect(() => {
    setActiveMenu(true);
  }, []); 

  const Disclaimer = () => (
    <div style={{ background: "lightgray", padding: "10px", marginBottom: "20px" }}>
      Note: Documentation is not complete or ready for distribution/use.
    </div>
  );

  return (
    <div>
      <Disclaimer />
      <Routes>
        <Route index element={<WelcomeDocs />} />
        <Route path="overview" element={<Overview />} />
        <Route path="install" element={<GettingStarted />} />
        <Route path="wallet" element={<WalletSetup />} />
        <Route path="model-example" element={<ModelExample />} />
      </Routes>
    </div>
  );
};

export default Home;


// const Home = () => {
//   const { setActiveMenu } = useStateContext();

//   // Use useEffect to call setActiveMenu only once after the component mounts
//   useEffect(() => {
//     setActiveMenu(true);
//   }, []); 

//   return (
//     <div className={`z-20 min-h-screen flex-col ${styles.flexCenter} min-w-full`}>
//       <div className="z-10 mt-2 sm:mt-5 flex-col min-w-full">
//         <h2 className={`${styles.heading} text-middle xs:max-w-[350px] max-w-[250px] sm:max-w-[1280px]`}>
//           Coming soon...<br />
//         </h2>
//         {/* <GettingStarted /> */}
//       </div>
//     </div>
//   )
// }

// export default Home;
