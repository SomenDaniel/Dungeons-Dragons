import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GameInfoPage() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [starterFiles, setStarterFiles] = useState({});

  function loadGameInfo() {
    fetch(`http://adventurehub-dev.herokuapp.com/storyInfo/id/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
        // setGame(data);
        // setStarterFiles(data.startBranch);
      });
  }

  // console.log(loadGameInfo());
  // useEffect(() => {
  //   setGame(loadGameInfo());
  //   setSe;
  // }, []);
  return (
    <>
      <header>
        <button>Logout</button>
      </header>
      <div>
        <h1>{game.title}</h1>
      </div>
      <div>
        <p>adatok</p>
      </div>
      <div>
        <p>{starterFiles.text}</p>
      </div>
      <button>
        <Link className="link" to={`/game/:id/:play`}>
          play the game
        </Link>
      </button>
    </>
  );
}

export default GameInfoPage;
