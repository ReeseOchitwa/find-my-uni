import React from "react";
import './home.css';
import BasicTable from "./BasicTable";

function Home() {
  return (
    <div className='hero-container'>
        <img src='./images/Uni.jpg' />
        <h1 >APP NAME</h1>
        <p>app description</p>
        <hr className="black-bar"/>
        <section className="table-section">
            <h1 className="table-header">Canadian University Comparison Chart</h1>
            <div className="table-wrapper">
                <BasicTable/>
             </div>
        </section>
    </div>
  );
}

export default Home;