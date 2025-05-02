import { Home, Smartnodes, SmartnodesLanding, SmartnodesApp, TensorLinkLanding } from "./pages";
import { Navbar, WalletSetup, Footer, Sidebar, Overview, GettingStarted, ModelExample, LocalhostGPT, Nodes } from "./components";
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
              <Route path="tensorlink/*" element={<TensorLinkLanding />} />
              <Route path="localhostGPT/*" element={<LocalhostGPT />} />
              <Route path="*" element={<Smartnodes className="" />}>
                <Route path="app" element={<SmartnodesApp />} />
              </Route>
              <Route path="docs/*" element={<Home />}>
                <Route path="" element={<Overview />} />
                <Route path="install" element={<GettingStarted />} />
                <Route path="setup" element={<WalletSetup />} />
                <Route path="model-example" element={<ModelExample />} />
                <Route path="nodes" element={<Nodes />} />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
