import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Home from "./Home";
import Lannister from "./Lannister"



function Urls(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/gotapp/welcome' element={<Home/>} />
        </Routes>
        <Routes>
        <Route path='/gotapp/Lannister' element={<Lannister/>} />
        </Routes>
        <Routes>
        <Route path='/Stark' element={<Home/>} />
        </Routes>
        <Routes>
        <Route path='/Targaryen' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Urls;
