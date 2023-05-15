import React from "react";
import './Save.css'
import SavedTable from "../components/SavedTable";

export default function Save() {
  return (
    <div className='save-container'>
        <section className="save-section">
            <div className="save-wrapper">
              <h1 className="save-header">Saved Universities</h1>
              <SavedTable/>
             </div>
        </section>
    </div>
  );
}
