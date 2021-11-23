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
    fetch("http://adventurehub-dev.herokuapp.com/stories")
      .then((response) => {
        return response.json();
      })
      .then((data) => setStories([...data]));
  }

  function xd() {
    fetch("http://adventurehub-dev.herokuapp.com/story/id/30")
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>header</h1>
        </header>
        <div className="stories">
          <ul>
            {stories.map((data) => (
              <li>
                {data.title}
                <button>join game(link egy másik oldalra)</button>
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
