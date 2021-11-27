import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PlayingPage() {
  const { id } = useParams();
  const { play } = useParams();
  const [game, setGame] = useState({});
  // átszervezés alatt
  useEffect(() => {
    loadGame();
  }, []);

  function loadGame() {
    fetch(
      `http://adventurehub-dev.herokuapp.com/story/id/${id}/branch/id/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGame(data);
        console.log(data);
      });
  }
  return (
    <>
      <h1>{id}</h1>
      <h1>{play}</h1>
    </>
  );
}

export default PlayingPage;
