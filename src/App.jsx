import styles from './style';
import { Home, Program } from "./pages";
import { Navbar } from "./components";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/app" element={<Program />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;