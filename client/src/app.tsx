import Home from './home';
import ButtonAppBar from './navBar';
import Save from './save'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';



export default function App() {
  return (
    <>
      <Router>
        <ButtonAppBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save"  element={<Save />} />
          </Routes>
      </Router>
    </>
  )
  }

//        
