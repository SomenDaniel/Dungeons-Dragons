import React from "react";
import "./VictoryOrFail.css";
import { Link } from "react-router-dom";

function Victory() {
  return (
    <div>
      <h1 className="winText">You Win!</h1>
      <button className="exit">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          className="link"
          to="/gamelist"
        >
          Exit
        </Link>
      </button>
    </div>
  );
}

export default Victory;
