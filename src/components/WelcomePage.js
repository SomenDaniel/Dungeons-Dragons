import React from "react";
import { Link } from "react-router-dom";
import RegistrationPage from "./user/RegistrationPage";
import "./WelcomePage.css";
import logo from "./logo.png";

function WelcomePage() {
  return (
    <>
      <div className="container">
        <header className="header">
          <img className="welcomepageLogo" src={logo} alt="logo" />
          <div className="navigation">
            <button className="navButton">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/registration"
              >
                Registration
              </Link>
            </button>
            <button className="navButton">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/login"
              >
                Login
              </Link>
            </button>
            <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/gamelist"
              >
                game
              </Link>
            </button>
            {/* <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/user"
              >
                User
              </Link>
            </button>
            <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/mainpage"
              >
                mainpage
              </Link>
            </button>
            <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/gamelist"
              >
                game
              </Link>
            </button>
            <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/create"
              >
                create
              </Link>
            </button> */}
          </div>
        </header>
        <div className="contentArea">
          <div className="contentAreaContainer">
            <h1>A text based adventure game hub.</h1>

            <div className="logRegContainer">
              <h3 className="loginText">Don't hesitate, play!</h3>
              <button className="loginButton">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Log in
                </Link>
              </button>
            </div>
            <div className="logRegContainer">
              <h3 className="regText">Don't have an account?</h3>
              <button className="regButton">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  className="link"
                  to="/registration"
                >
                  Sign up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
