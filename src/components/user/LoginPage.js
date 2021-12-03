import React from "react";

function testUpload() {
  fetch("https://adventurehub-dev.herokuapp.com/testupload")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

function LoginPage() {
  return (
    <>
      {/* <button onClick={login}>asd</button> */}
      <button onClick={testUpload}>asd</button>
    </>
  );
}

export default LoginPage;
