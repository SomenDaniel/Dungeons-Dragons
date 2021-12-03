import React from "react";
import { useState, useEffect } from "react";

function RegistrationPage() {
  // ez a sorrend
  //

  // useEffect(() => {
  //   register();
  // }, []);

  // const email = "asddd@ddd.aa";
  // const username = "ccvcvcvcvcv";
  // const password = "nnnnnnnnn";
  // function register() {
  //   fetch("https://adventurehub-dev.herokuapp.com/register", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({
  //       email: email,
  //       username: username,
  //       password: password,
  //     }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  // verification page küldjön egy linket a homepagere utána.

  const username = "testElek";
  const password = "qwert123";
  function login() {
    fetch("https://adventurehub-dev.herokuapp.com/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <>
      <div>
        <div>
          <label htmlFor="fName">Name:</label>
          <input type="text" name="fName" />
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>
        <div>
          {/* <button onClick={register}>Registration</button> */}
          <button onClick={login}>Login</button>
          <button>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
