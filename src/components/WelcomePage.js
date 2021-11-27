import React from "react";
import { Link } from "react-router-dom";
import RegistrationPage from "./user/RegistrationPage";
import "./WelcomePage.css";

function WelcomePage() {
  return (
    <>
      <div className="container">
        <header>
          <button>
            <Link className="link" to="/registration">
              Registration
            </Link>
          </button>
          <button>
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
          <button>
            <Link className="link" to="/user">
              User
            </Link>
          </button>
          <button>
            <Link className="link" to="/mainpage">
              mainpage
            </Link>
          </button>
          <button>
            <Link className="link" to="/gamelist">
              game
            </Link>
          </button>
          <button>
            <Link className="link" to="/create">
              create
            </Link>
          </button>
        </header>
        <div>content</div>
      </div>
    </>
  );
}

export default WelcomePage;
