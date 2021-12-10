import React from "react";
import { useState, useEffect } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function RegistrationPage() {
  let [username, setUsername] = useState([]);
  let [password, setPassword] = useState([]);
  let [email, setEmail] = useState([]);
  let [message, setMessage] = useState("");

  function usernameChange(event) {
    setUsername(event.target.value);
  }

  function passwordChange(event) {
    setPassword(event.target.value);
  }

  function emailChange(event) {
    setEmail(event.target.value);
  }

  function register(event) {
    event.preventDefault();
    fetch("https://adventurehub-dev.herokuapp.com/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("sikertelen");
        }
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMessage("siker");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }

  // verification page küldjön egy linket a homepagere utána.

  return (
    <>
      <div className="listContainer">
        <header className="listHeader">
          <img className="listLogo" src={logo} alt="logo" />
          <div className="listNavigation">
            {message === "success" ? (
              ""
            ) : (
              <button className="navButton">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  className="link"
                  to="/"
                >
                  back
                </Link>
              </button>
            )}
          </div>
        </header>
        <div className="welcome">
          <h1>Join our community.</h1>
        </div>
        <div className="formContainer">
          <form>
            <div className="username">
              <label htmlFor="fName">username:</label>
              <input type="text" name="fName" onChange={usernameChange} />
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                onChange={passwordChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" onChange={emailChange} />
            </div>
            <p className="failMessage">
              {message === "sikertelen" ? "Registration failed" : ""}
            </p>
            <div>
              {message === "siker" ? (
                ""
              ) : (
                <button
                  className="registButton"
                  style={{ color: "white" }}
                  type="submit"
                  onClick={register}
                >
                  Registration
                </button>
              )}
            </div>
            <div className="verification">
              {message === "siker" ? (
                <h3>We sent a werification email to your address.</h3>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
