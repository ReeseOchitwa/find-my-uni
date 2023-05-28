import Home from './pages/Home';
import ButtonAppBar from './components/ButtonAppBar';
import Save from './pages/Save'
import EachUni from './pages/EachUni'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import { useEffect, useState } from 'react';


export default function App() {
  interface Data {
    _id : number;
    universityName: string;
    geographicalData: {
      location: string;
    }
    populationData: {
      Students: number,
      Undergraduates: number,
      Postgraduates: number;
    }
  }
  const [data, setData] = useState<Data[]>([]);
  
  const getData = async () => {
   try {
    const response = await fetch ("http://localhost:8000/uni-stats");
    const jsonData = await response.json();
    setData(jsonData);
   } catch (error) {
    console.error(error);
   }
  }
  
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <Router>
        <ButtonAppBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save"  element={<Save />} />
          <Route path="/:id"  element={<EachUni />} />
          </Routes>
      </Router>
    </>
  )
  }
