import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GameInfoPage() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [story, setStory] = useState([]);

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
      <header>
        <button>Logout</button>
      </header>
      <div>
        <h1>{story.title}</h1>
        <h1>{story.xp}</h1>
        <h1>{story.category}</h1>
      </div>
      <div></div>
      <div>{/* <p>adatok</p> */}</div>
      <div>{/* <p>{starterFiles.text}</p> */}</div>
      <button>
        <Link className="link" to={`/game/${story.uuid}/start`}>
          play
        </Link>
      </button>
    </>
  );
}

export default GameInfoPage;
