import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  function logout() {
    localStorage.setItem("key", "");
    localStorage.setItem("username", "");
  }

  return (
    <>
      <button className="navButton">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          className="link"
          to="/"
          onClick={logout}
        >
          Logout
        </Link>
      </button>
    </>
  );
}

export default Logout;
