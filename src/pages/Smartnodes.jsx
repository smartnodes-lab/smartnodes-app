import React from "react";
import { Routes, Route } from "react-router-dom";
import { SmartnodesApp, SmartnodesLanding } from ".";

const Smartnodes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<SmartnodesLanding />} />
        <Route path="app" element={<SmartnodesApp />} />
      </Routes>
    </div>
  );
};

export default Smartnodes;
