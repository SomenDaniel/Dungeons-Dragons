import React from "react";
import "./GamePage.css";
import { Link } from "react-router-dom";

function GamePage() {
  return (
    <>
      <div className="gameContainer">
        <div className="navbar">
          <button className="navButton A">Logout</button>
          <button>
            <Link to="/">Back</Link>
          </button>
        </div>

        <div className="gameBar">
          <h1>Game</h1>
          <div className="buttonContainer">
            <button className="option A">A</button>
            <button className="option B">B</button>
            <button className="option C">C</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GamePage;
