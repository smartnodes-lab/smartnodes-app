import { Home, Login, ProjectLanding, TensorLinkLanding } from "./pages";
import { Navbar, Footer, Sidebar } from "./components";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/contextProvider";
import { connect } from "./assets";

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
    <BrowserRouter>
      {/* {!activeMenu && (
        <button 
          className="absolute top-0 left-0 z-20 p-2"
          onClick={() => setActiveMenu(true)} // Toggles the sidebar on
        >
          <img src={connect} alt="Toggle Sidebar" className="w-10 h-10" />
        </button>
      )} */}

      {activeMenu && (
        <div className="fixed inset-y-0 left-0 z-20 w-72 bg-slate-50 dark:bg-gray-900 dark:bg-black-700 transition-transform">
          <Sidebar />
        </div>
      )}
      <div className={`flex-1 flex flex-col min-h-screen transition-margin ${activeMenu ? "ss:ml-72" : ""}`}>
        <div className={`flex-1 flex flex-col dark:bg-dark bg-light min-h-screen 
          overflow-x-hidden overflow-y-hidden`}> {/* ${activeMenu ? "md:ml-72" : ""} */}
          <div className="static bg-main-bg dark:bg-main-dark-bg navbar w-full pb-5">
            <Navbar style={{ zIndex: 10 }}/>
          </div>
          <div className="flex-1">
            <Routes>
              <Route index element={<TensorLinkLanding />} />
              <Route path="/tensorlink" element={<TensorLinkLanding />} />
              <Route path="/smartnodes" element={<ProjectLanding />} />
              <Route path="/docs" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
{/* <Login onIdSubmit={setId} /> */}
export default App;
