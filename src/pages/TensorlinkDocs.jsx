import React, { useEffect } from "react";
import { Routes, Outlet, Route } from "react-router-dom";
import { Overview, WalletSetup, ApiExample, Community, Mining, GettingStarted, ModelExample, Nodes } from "../components";
import { useStateContext } from "../contexts/contextProvider";

const TensorlinkDocs = () => {
  const { setActiveMenu } = useStateContext();

  useEffect(() => {
    setActiveMenu(true);
  }, []); 

  const Disclaimer1 = () => (
    <div className="bg-red-100 mt-7 p-4 border-l-4 border-red-500 sm:text-sm text-xs">
      <p className="text-black font-medium">
        ⚠️ Tensorlink is currently under active development, you will likely encounter bugs. <strong>Not recommended for production environments</strong>. 
      </p>
    </div>
  );
  const Disclaimer2 = () => (
    <div className="bg-yellow-100 mt-1 p-4 border-l-4 border-yellow-500 sm:text-sm text-xs">
      <p className="text-yellow-800 dark:text-black font-medium">
        Model availability on the public network is currently limited. If you have a capable machine, please consider <a href="/mining" className="text-blue-600 dark:text-blue-400 underline">running a node</a> to support the project.
        For questions, feedback, or to get involved, join the discussion on <a href="https://discord.gg/aCW2kTNzJ2" className="text-blue-600 dark:text-blue-400 underline">Discord</a>.
      </p>
    </div>
  );

  return (
    <div>
      <Disclaimer1 />
      <Disclaimer2 />

      <Routes>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="install" element={<GettingStarted />} />
        <Route path="model" element={<ModelExample />} />
        <Route path="api" element={<ApiExample />} />
        <Route path="nodes" element={<Nodes />} />
        <Route path="mining" element={<Mining />} />
        <Route path="community" element={<Community />} />
        <Route path="wallet" element={<WalletSetup />} />
      </Routes>
      {/* <Outlet /> */}
    </div>
  );
};

export default TensorlinkDocs;
