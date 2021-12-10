import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import "./UserPage.css";
import Logout from "../Logout";

function UserPage() {
  const token = localStorage.getItem("key");
  const username = localStorage.getItem("username");
  let [player, setPlayer] = useState({});
  let [finished, setFinished] = useState([]);

  useEffect(() => {
    checkUser();
  }, []);

  function loadStorie(storie) {
    fetch(`https://adventurehub-dev.herokuapp.com/storyInfo/${storie}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return `${data.title}`;
      });
  }

  // userinfo
  function checkUser() {
    // ${username}
    fetch(`https://adventurehub-dev.herokuapp.com/userInfo/${username}`, {
      // headers: { "content-type": "application/json" },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlayer(data);
        setFinished(data.finishedStories);
        console.log(data);
      });
  }
  console.log(finished);

  return (
    <>
      <div className="userContainer">
        <header className="userHeader">
          <img className="userLogo" src={logo} alt="logo" />
          <div className="userNavigation">
            <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/gamelist"
              >
                Play
              </Link>
            </button>
            <Logout />
          </div>
        </header>
        <div className="userCont">
          <h1 className="infoIntro">{`${username}'s profile`}</h1>
          <div className="datasUser">
            <h3>{`Username: ${username}`}</h3>
            <h3>{`Email: ${player.email}`}</h3>
            <h3>{`Xp: ${player.xp}`}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
