import { TensorlinkDocs, Smartnodes, SmartnodesDocs, SmartnodesLanding, SmartnodesApp, TensorLinkLanding } from "./pages";
import { Navbar, WalletSetup, Footer, Sidebar, Overview, ApiExample, SmartnodesOverview, GettingStarted, ModelExample, LocalhostGPT, Nodes, Mining, Community } from "./components";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  useEffect(() => {
    if (location.pathname === '/localhostGPT') {
      window.location.href = '/tensorlink/localhostGPT';
    }
  }, [location.pathname]);

  // Set activeMenu to true for desktop on initial load
  useEffect(() => {
    if (window.innerWidth >= 824) {
      setActiveMenu(true); // Show menu by default on large screens
    }
  }, [setActiveMenu]);

  return (
    <div className="relative flex min-h-screen bg-gray-300 dark:bg-zinc-900 overflow-x-hidden">
      <BrowserRouter>
        {activeMenu && (
          <div className="fixed inset-y-0 left-0 z-50 w-[265px] bg-zinc-200 dark:bg-zinc-700">
            <Sidebar />
          </div>      
        )}
        <div className={`flex flex-col min-h-screen w-full ${activeMenu ? "md:pl-[265px]" : ""}`}>
          <div className="sticky top-0 z-50 w-full">
            <Navbar />
          </div>
          <div className="flex-1 w-full">
            <Routes>
              <Route index element={<Smartnodes />} />
              
              <Route path="docs" element={<SmartnodesDocs />}>
                <Route index element={<SmartnodesOverview />} />
                <Route path="overview" element={<SmartnodesOverview />} />
              </Route>

              {/* TensorLink routes - properly nested */}
              <Route path="tensorlink" element={<TensorLinkLanding />} />
              
              {/* Docs routes */}
              <Route path="tensorlink/docs" element={<TensorlinkDocs />}>
                <Route index element={<Overview />} />
                <Route path="overview" element={<Overview />} />
                <Route path="install" element={<GettingStarted />} />
                <Route path="wallet" element={<WalletSetup />} />
                <Route path="model" element={<ModelExample />} />
                <Route path="api" element={<ApiExample />} />
                <Route path="nodes" element={<Nodes />} />
                <Route path="mining" element={<Mining />} />
                <Route path="community" element={<Community />} />
              </Route>

              <Route path="tensorlink/localhostGPT/*" element={<LocalhostGPT />} />
              <Route path="app" element={<SmartnodesApp />} />
              <Route path="*" element={<Smartnodes />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;