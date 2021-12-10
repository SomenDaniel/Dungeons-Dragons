import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GameInfoPage.css";
import logo from "../logo.png";
import Logout from "../Logout";

function GameInfoPage() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [story, setStory] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    loadGameInfo();
  }, []);

  function loadGameInfo() {
    fetch(`https://adventurehub-dev.herokuapp.com/storyInfo/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStory(data);
        // setGame(data);
        // setStarterFiles(data.startBranch);
      });
  }
  console.log(story);
  return (
    <>
      <div className="infoContainer">
        <header className="gameHeader">
          <img className="gamepageLogo" src={logo} alt="logo" />
          <p className="welcomeMessage">{`Hey ${username}!`}</p>
          <div className="listNavigation">
            <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/user"
              >
                Profile
              </Link>
            </button>
            <Logout />
          </div>
        </header>
        <div className="infos">
          <h1>Game data:</h1>
          <div className="infCont">
            <ul className="gameDatas">
              <li>{`-Title: ${story.title}`}</li>
              <li>{`-XP: ${story.xp}`}</li>
              <li>{`-Category: ${story.category}`}</li>
            </ul>
          </div>
        </div>
        <div className="infoPlay">
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "30px",
            }}
            className="link"
            to={`/game/${story.uuid}/start`}
          >
            play
          </Link>
        </div>
      </div>
    </>
  );
}

export default GameInfoPage;
