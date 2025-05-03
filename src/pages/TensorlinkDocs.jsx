import React, { useEffect } from "react";
import { Routes, Outlet, Route } from "react-router-dom";
import { Overview, WalletSetup, ApiExample, Community, Mining, GettingStarted, ModelExample, Nodes } from "../components";
import { useStateContext } from "../contexts/contextProvider";

const TensorlinkDocs = () => {
  const { setActiveMenu } = useStateContext();

  useEffect(() => {
    setActiveMenu(true);
  }, []); 

  const Disclaimer = () => (
    <div className="bg-yellow-100 mt-7 p-4 rounded-lg border-l-4 border-yellow-500">
      <p className="text-yellow-800 dark:text-black font-medium">
        ⚠️ <strong>Tensorlink is under development,</strong> and is not recommended for production environments.
      </p>
    </div>
  );

  return (
    <div>
      <Disclaimer />
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
