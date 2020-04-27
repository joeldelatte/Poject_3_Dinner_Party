import React from "react";
import "./Jumbotron.css";

const styles = {
  spaceItOut: {
    marginBottom: 100
  }
}

export default function Jumbotron() {
    
    return (
        <>
          <div className="row jumbotron jumbotron-fluid" style={styles.spaceItOut}>
            <div className="container-fluid">
                <div className="display-4 text-center">Dinner Party</div>
                <p className="lead text-center">Aavid home chefs plan dinners and share share their tables with their community.</p>
            </div>
          </div>
        </>
    )
}