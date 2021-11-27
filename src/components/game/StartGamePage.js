import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StartGamePage() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [options, setOptions] = useState([]);
  // const [session, setSession] = useState({});
  let storyUuid = id;
  // let options = [];
  // let ops = <ul></ul>;

  function startGame() {
    fetch("http://adventurehub-dev.herokuapp.com/startGame", {
      method: "POST",
      body: JSON.stringify(storyUuid),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGame(...data);
      });
  }

  function setUp() {
    // options = game.currentBranch.goesTo;
    // ops = (
    //   <ul>
    //     {options.map((option) => (
    //       <li>
    //         {option.text}
    //         {option.goToId}
    //       </li>
    //     ))}
    //   </ul>
    // );
    // document.querySelector(".optionSelector").innerHTML = JSON.stringify(ops);
    setOptions(game.currentBranch.goesTo);
    console.log(options);
  }
  useEffect(() => {
    startGame();
  }, []);
  console.log(game);
  return (
    <>
      <h1>{id}</h1>
      <button onClick={setUp}>start</button>
      <div className="optionSelector">
        <ul>
          {options.map((option) => (
            <li>
              {option.text}
              {option.goToId}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StartGamePage;
