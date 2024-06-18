import { Home, Smartnodes, SmartnodesLanding, SmartnodesApp, TensorLinkLanding } from "./pages";
import { Navbar, Footer, WalletSetup, Sidebar, Overview, GettingStarted, ModelExample } from "./components";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useStateContext } from "./contexts/contextProvider";

const App = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const [id, setId] = useState(() => {
    const savedUsername = localStorage.getItem("username");
    return savedUsername || "";
  });

  useEffect(() => {
    localStorage.setItem("username", id);
  }, [id]);

  return (
    <BrowserRouter >
      {activeMenu && (
        <div className="fixed inset-y-0 left-0 z-20 w-72 bg-slate-50 dark:bg-gray-900 dark:bg-black-700 transition-transform">
          <Sidebar />
        </div>
      )}
      <div className={`flex-1 flex flex-col min-h-screen transition-margin ${activeMenu ? "ss:ml-72" : ""}`}>
        <div className={`flex-1 flex flex-col dark:bg-dark bg-gray-200 min-h-screen overflow-x-scroll overflow-y-hidden`}>
          <div className="static w-full pb-5">
            <Navbar style={{ zIndex: 10 }}/>
          </div>
          <div className="flex-1">
            <Routes >
              <Route index element={<Smartnodes />} />
              <Route path="tensorlink" element={<TensorLinkLanding />} />
              <Route path="*" element={<Smartnodes className="z-50" />}>
                <Route path="app" element={<SmartnodesApp />} />
              </Route>
              <Route path="docs/*" element={<Home />}>
                <Route path="" element={<Overview />} />
                <Route path="install" element={<GettingStarted />} />
                <Route path="setup" element={<WalletSetup />} />
                <Route path="model-example" element={<ModelExample />} />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;