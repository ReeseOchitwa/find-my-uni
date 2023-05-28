import React, { useState, useEffect } from "react";
import "./EachUni.css";
import { useParams } from "react-router-dom";

interface Data {
  _id: number;
  universityName: string;
  geographicalData: {
    location: string;
  };
  populationData: {
    Students: number;
    Undergraduates: number;
    Postgraduates: number;
  };
}

export default function EachUni() {
  const [universityName, setUniversityName] = useState("");
  const { id } = useParams<{ id: string }>(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/uni-stats");
        const jsonData = await response.json();
        const university = jsonData.find((item: Data) => item._id.toString() === id);
        if (university) {
          setUniversityName(university.universityName);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);
  const myStyle = {
    backgroundImage: `url('/images/${universityName}.jpg')`,
  };
  
  return (
    <div className='picture' style={myStyle}>
      {universityName && <h1 className="each">{universityName}</h1>}
    </div>
  );
}