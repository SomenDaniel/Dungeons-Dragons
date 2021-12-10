import React, { useState, useEffect } from "react";
import { useLogin, useLoginUpdate } from "./LoginContext";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  let [username, setUsername] = useState([]);
  let [password, setPassword] = useState([]);
  let [modal, setModal] = useState([]);
  const setLogin = useLoginUpdate();

  function usernameChange(event) {
    setUsername(event.target.value);
  }

  function passwordChange(event) {
    setPassword(event.target.value);
  }

  let [message, setMessage] = useState("");

  function login(event) {
    event.preventDefault();
    console.log(username, password);
    // generate login form.
    const loginData = new URLSearchParams();
    loginData.append("username", username);
    loginData.append("password", password);
    fetch("https://adventurehub-dev.herokuapp.com/login", {
      method: "POST",
      // headers: { "content-type": "application/json" },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: loginData.toString(),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("sikertelen");
        }
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        // elmentjük az access tokent és a felh nevét.
        setLogin(data.access_token);
        localStorage.setItem("key", data.access_token);
        localStorage.setItem("username", username);
        setMessage("success");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }

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
          <h1>
            {message === "success"
              ? `Welcome back! ${username}`
              : "Welcome back!"}
          </h1>
        </div>
        <div className="formContainer">
          <form>
            <div className="username">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                onChange={usernameChange}
                value={username}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={passwordChange}
                value={password}
              />
            </div>
            <p className="failMessage">
              {message === "sikertelen" ? "Login failed" : ""}
            </p>
            <div>
              {message === "success" ? (
                ""
              ) : (
                <button
                  className="logButton"
                  style={{ color: "white" }}
                  type="submit"
                  onClick={login}
                >
                  Log in
                </button>
              )}
            </div>
          </form>
          <div className="regOption">
            <div>
              {message === "success" ? (
                <button className="playButton">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "30px",
                    }}
                    className="link"
                    to="/gamelist"
                  >
                    play
                  </Link>
                </button>
              ) : (
                <button className="regButton">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    className="link"
                    to="/registration"
                  >
                    Dont have an account?
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
