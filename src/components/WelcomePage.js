import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RegistrationPage from "./user/RegistrationPage";
import "./WelcomePage.css";
import logo from "./logo.png";

function WelcomePage() {
  const token = localStorage.getItem("key");
  useEffect(() => {
    testUpload();
  }, []);
  function testUpload() {
    fetch(`https://adventurehub-dev.herokuapp.com/testupload`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log("siker");
      });
  }

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
            {/* <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/gamelist"
              >
                game
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
