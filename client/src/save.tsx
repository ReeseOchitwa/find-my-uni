import React from "react";
import './save.css'
import SavedTable from "./SavedTable";

function Home() {
  return (
    <div className='save-container'>
        <section className="save-section">
            <h1 className="save-header">Saved Universities</h1>
            <div className="save-wrapper">
                <SavedTable/>
             </div>
        </section>
    </div>
  );
}

export default Home;