import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "./StartGamePage.css";

function StartGamePage() {
  const { uuid } = useParams();
  const storyUuid = uuid;
  const [game, setGame] = useState([]);
  const [session, setSession] = useState([]);
  const [title, setTitle] = useState([]);
  const [text, setText] = useState([]);
  const token = localStorage.getItem("key");

  useEffect(() => {
    startGame();
    getData();
  }, []);
  function getData() {
    fetch(`https://adventurehub-dev.herokuapp.com/storyInfo/${storyUuid}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTitle(data.title);
      });
  }
  function startGame() {
    fetch("https://adventurehub-dev.herokuapp.com/startGame", {
      method: "POST",
      headers: {
        // "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ storyUuid: storyUuid }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGame(data.currentBranch.goesTo);
        setSession(data.sessionId);
        setText(data.currentBranch.text);
        console.log(data);
      });
  }
  console.log(storyUuid);

  console.log(game);
  console.log(session);

  let branchId = 8; // gotoid-t branchid ként nevezd el.

  return (
    <>
      <div className="gameContainer">
        <header className="gameHeader">
          <img className="gamepageLogo" src={logo} alt="logo" />
          <p className="welcomeMessage">{`Hey username!`}</p>
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
            <button className="navButton">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/login"
              >
                logout
              </Link>
            </button>
          </div>
        </header>

        <div className="gameZone">
          <h1 className="gameTitle">{title}</h1>
          <div className="gameText">
            <h1>{text}</h1>
          </div>
          <div className="optionContainer">
            <ul>
              {game.map((option) => (
                <li className="gameOption">
                  {/* {option.text} */}
                  <button style={{ color: "white" }}>
                    <Link
                      style={{ color: "white" }}
                      className="link"
                      to={`/game/${session}/${option.goToId}`}
                    >
                      {option.text}
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartGamePage;
