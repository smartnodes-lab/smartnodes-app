import { Home, Login, TaskLanding } from "./pages";
import { Navbar, Footer, Sidebar } from "./components";
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

  return (
    <BrowserRouter>
      <div className="dark:bg-dark bg-dimWhite flex min-h-screen">
        {activeMenu ? (
          <div className="fixed sidebar dark:bg-black-700 bg-slate-200 w-72">
            <Sidebar />
          </div>
        ) : (
          <div className="fixed sidebar dark:bg-black-700 bg-slate-200 w-0" />
        )}
        <div className={`flex-1 flex flex-col dark:bg-dark bg-light min-h-screen ${activeMenu ? "md:ml-72" : ""}`}>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar style={{ zIndex: 10000 }}/>
          </div>
          <div className="flex-1 overflow-x-hidden overflow-y-auto p-4">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/tasknet" element={<TaskLanding />} />
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
