import React from "react";

function UserPage() {
  const token = localStorage.getItem("key");

  // userinfo
  function checkUser() {
    fetch("https://adventurehub-dev.herokuapp.com/userInfo/testElek", {
      // headers: { "content-type": "application/json" },
      headers: {
        // "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return <></>;
}

export default UserPage;
