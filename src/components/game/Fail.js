import React from "react";
import { Link } from "react-router-dom";
import "./VictoryOrFail.css";

function Fail() {
  const storyUuid = localStorage.getItem("storyUuid");
  return (
    <div>
      <h1 className="failText">Game Over!</h1>
      <div className="failButtons"></div>
      <button className="failExit">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          className="link"
          to="/gamelist"
        >
          Exit
        </Link>
      </button>
      <button className="tryAgain">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          className="link"
          to={`/game/${storyUuid}/start`}
        >
          Try Again!
        </Link>
      </button>
    </div>
  );
}

export default Fail;
