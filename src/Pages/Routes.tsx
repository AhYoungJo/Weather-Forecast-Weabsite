import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sidebar from '../Components/Sidebar';



const RoutesComponent = () => {

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/Sidebar" element={<Sidebar/>} />
    </Routes>
  );
};

export default RoutesComponent;