import React, { useContext } from "react";
import "./ListGamesPage.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLogin } from "../user/LoginContext";
import logo from "../logo.png";
// , {mode: "no-cors",}

function GamePage() {
  // ez lesz az elmentett access token minden pagenél.
  const token = localStorage.getItem("key");
  console.log(token);
  const [stories, setStories] = useState([]);
  useEffect(() => {
    listStories();
  }, []);

  function listStories() {
    fetch("https://adventurehub-dev.herokuapp.com/stories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStories([...data]);
      });
  }

  console.log(stories);
  return (
    <>
      <div className="listContainer">
        <header className="listHeader">
          <img className="listLogo" src={logo} alt="logo" />
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
            {/* <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/gamelist"
              >
                game
              </Link>
            </button> */}

            {/* <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/mainpage"
              >
                mainpage
              </Link>
            </button> */}
          </div>
        </header>
        <div className="storyContainer">
          <div className="storyIntro">
            <h1>Stories:</h1>
            <button>filter</button>
          </div>
          <div className="stories">
            <ul>
              {stories.map((game) => (
                <li className="gameData">
                  <p>{` title: ${game.title}`}</p>
                  <p>{` creator: ${game.creator.username}`}</p>
                  <button>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "10px",
                      }}
                      className="link"
                      to={`/game/${game.uuid}/start`}
                    >
                      play
                    </Link>
                  </button>
                  <button>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "10px",
                        textAlign: "right",
                      }}
                      className="link"
                      to={`/game/${game.uuid}/info`}
                    >
                      info
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

export default GamePage;
