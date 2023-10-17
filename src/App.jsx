import styles from './style';
import { Home, Dashboard, TaskLanding, Login, NewsLanding } from "./pages";
import { Navbar } from "./components";

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    const [id, setId] = useState(() => {
        const savedUsername = localStorage.getItem("username");
        return savedUsername || "";
    });

    useEffect(() => {
        localStorage.setItem("username", id);
    }, [id]);

    return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tasknet" element={<TaskLanding />} />
            <Route path="/newsnet" element={<NewsLanding />} />
            <Route path="/dashboard" element={
                <>
                    {id}
                    {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
                </>
            } />
          </Routes>
        </BrowserRouter>
    );
}

export default App;