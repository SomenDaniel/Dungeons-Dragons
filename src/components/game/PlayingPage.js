import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GamePage.css";
import logo from "../logo.png";
import Victory from "./Victory";
import Fail from "./Fail";
import Logout from "../Logout";

function PlayingPage() {
  const { sessionId } = useParams();
  const { goToId } = useParams();

  const [game, setGame] = useState([]);
  const [title, setTitle] = useState([]);
  const [type, setType] = useState([]);
  const [text, setText] = useState([]);
  const storyUuid = localStorage.getItem("storyUuid");
  const token = localStorage.getItem("key");
  const username = localStorage.getItem("username");

  useEffect(() => {
    setUp();
    getData();
  }, []);

  function getData() {
    fetch(`https://adventurehub-dev.herokuapp.com/storyInfo/${storyUuid}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTitle(data.title);
      });
  }

  let branchId = Number(goToId); // gotoid-t branchid ként nevezd el.
  // current branch typeok: 'DEAD_END','DIVERGE', 'WINNER'
  function setUp() {
    fetch(`https://adventurehub-dev.herokuapp.com/game/${sessionId}`, {
      // a második ugyan olyan lekérésnél hibát fog dobni.
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ branchId }),
    })
      .then((response) => {
        return response.json(1);
      })
      .then((data) => {
        setGame(data.currentBranch.goesTo);
        setType(data.currentBranch.type);
        setText(data.currentBranch.text);
        console.log(data);
      });
  }

  const refreshPage = () => {
    window.location.reload();
  };
  console.log(game);
  // gotoid request body , sessionid url
  return (
    <>
      <div className="gameContainer">
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
        <div className="gameZone">
          <h1 className="gameTitle">{title}</h1>
          <div className="gameText">
            <h1>{text}</h1>
          </div>
          <div className="optionContainer">
            <ul>
              {type === "DIVERGE"
                ? game.map((option) => (
                    <li className="gameOption">
                      <button onClick={refreshPage} style={{ color: "white" }}>
                        <Link
                          style={{ color: "green" }}
                          className="link"
                          to={`/game/${sessionId}/${option.goToId}`}
                        >
                          {`- ${option.text}`}
                        </Link>
                      </button>
                    </li>
                  ))
                : ""}
            </ul>
          </div>

          <div className="failContainer">
            {type === "DEAD_END" ? <Fail /> : ""}
          </div>
          <div className="winContainer">
            {type === "WINNER" ? <Victory /> : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayingPage;
