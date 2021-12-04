import React from "react";
import "./ListGamesPage.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// , {mode: "no-cors",}

function GamePage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    listStories();
  }, []);

  function listStories() {
    fetch("https://adventurehub-dev.herokuapp.com/stories")
      .then((response) => {
        return response.json();
      })
      .then((data) => setStories([...data]));
  }

  function xd() {
    fetch("https://adventurehub-dev.herokuapp.com/stories")
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  }

  console.log(stories);
  return (
    <>
      <div className="container">
        <header>
          <button>Logout</button>
        </header>
        <div>
          <h1>Stories:</h1>
        </div>
        <div className="stories">
          <ul>
            {stories.map((game) => (
              <li>
                {game.title}
                <button>
                  <Link className="link" to={`/game/${game.uuid}/start`}>
                    play
                  </Link>
                </button>
                <button>
                  <Link className="link" to={`/game/${game.uuid}/info`}>
                    info
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={xd}>asd</button>
      </div>
    </>
  );
}

export default GamePage;
