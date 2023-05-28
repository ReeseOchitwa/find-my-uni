import React from "react";
import './Home.css';
import BasicTable from "../components/BasicTable";

export default function Home() {
  return (
    <div className='hero-container'>
      <div className="top">
        <div className='pict'>
          <h1 >Uni Goose</h1>
          <p>You're in luck! Browse here<br></br>to find your dream University!</p>
        </div>
      </div>
      <div className="bottom">
        <hr className="black-bar"/>
        <section className="table-section">
            <div className="table-wrapper">
              <h1 className="table-header">Canadian University Comparison Chart</h1>
                <BasicTable />
             </div>
        </section>
        </div>
    </div>
  );
}


