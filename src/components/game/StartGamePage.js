import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StartGamePage() {
  const { uuid } = useParams();
  const storyUuid = uuid;
  const [game, setGame] = useState({});
  const [options, setOptions] = useState([]);
  const [session, setSession] = useState([]);
  const [start, setStart] = useState(true);
  // let start = true;
  // átszervezés alatt

  useEffect(() => {
    startGame();
  }, []);

  function startGame() {
    fetch("https://adventurehub-dev.herokuapp.com/startGame", {
      method: "POST",
      body: JSON.stringify({ storyUuid: storyUuid }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGame(data);
        console.log(data);
      });
  }
  console.log(storyUuid);

  function starter() {
    setOptions(game.currentBranch.goesTo);
    setSession(game.sessionId);
    setStart(false);
    document.querySelector(".starterButton").style.display = "none";
  }

  console.log(game);
  console.log(session);
  console.log(options);

  let branchId = 1; // gotoid-t branchid ként nevezd el.

  return (
    <>
      <h1>{uuid}</h1>
      <div>
        {start && (
          <button className="starterButton" onClick={starter}>
            start game
          </button>
        )}
      </div>
      <div>
        <ul>
          {options.map((option) => (
            <li>
              {option.text}
              <button>
                <Link className="link" to={`/game/${session}/${option.goToId}`}>
                  continue
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StartGamePage;
