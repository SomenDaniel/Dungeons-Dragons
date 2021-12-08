import React, { useState, useEffect } from "react";
import { useLogin, useLoginUpdate } from "./LoginContext";
import logo from "../logo.png";

function LoginPage() {
  let [access, setAccess] = useState([]);
  let [username, setUsername] = useState([]);
  let [password, setPassword] = useState([]);
  let [err, setErr] = useState(true);

  const login = useLogin();
  const setLogin = useLoginUpdate();
  // function test() {
  //   // const username = "testElek";
  //   // const password = "qwert123";

  //   const loginData = new URLSearchParams();
  //   loginData.append("username", username);
  //   loginData.append("password", password);

  //   fetch("https://adventurehub-dev.herokuapp.com/login", {
  //     method: "POST",
  //     // headers: { "content-type": "application/json" },
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: loginData.toString(),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // elmentjük az access tokent.
  //       setLogin(data.access_token);
  //       localStorage.setItem("key", data.access_token);
  //       console.log(data);
  //     });
  // }

  function usernameChange(event) {
    setUsername(event.target.value);
  }

  function passwordChange(event) {
    setPassword(event.target.value);
  }

  // function submitLogin(event) {
  //   event.preventDefault();
  //   console.log(username, password);
  //   // generate login form.
  //   const loginData = new URLSearchParams();
  //   loginData.append("username", username);
  //   loginData.append("password", password);
  //   setErr(true);
  //   // login
  //   try {
  //     fetch("https://adventurehub-dev.herokuapp.com/login", {
  //       method: "POST",
  //       // headers: { "content-type": "application/json" },
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body: loginData.toString(),
  //     })
  //       .then((response) => {
  //         console.log(response.status);
  //         if (response.ok === 200) {
  //           setErr(false);
  //           return response.json();
  //         } else {
  //           console.log("itt");
  //           console.error("smthg went wrong.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //         // setErr(true);
  //         console.log(err);
  //       })
  //       .then((data) => {
  //         // elmentjük az access tokent és a felh nevét.
  //         if (err === false) {
  //           setAccess(data);
  //         }
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   if (err === false) {
  //     setLogin(access.access_token);
  //     localStorage.setItem("key", access.access_token);
  //     localStorage.setItem("username", username);
  //     console.log("siker");
  //   }
  // }
  function ideiglenes(event) {
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
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        // elmentjük az access tokent és a felh nevét.
        setLogin(data.access_token);
        localStorage.setItem("key", data.access_token);
        localStorage.setItem("username", username);
      });
  }
  return (
    <>
      <div className="loginContainer">
        <header>
          <img className="listLogo" src={logo} alt="logo" />
        </header>
        <div>
          <h1>Welcome back!</h1>
        </div>
        <div>
          <form>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              onChange={usernameChange}
              value={username}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              onChange={passwordChange}
              value={password}
            />
            <button type="submit" onClick={ideiglenes}></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
