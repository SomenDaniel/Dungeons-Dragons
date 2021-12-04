import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StartGamePage() {
  const { uuid } = useParams();
  const storyUuid = uuid;
  const [game, setGame] = useState([]);
  const [session, setSession] = useState([]);

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
        setGame(data.currentBranch.goesTo);
        setSession(data.sessionId);
        console.log(data);
      });
  }
  console.log(storyUuid);

  console.log(game);
  console.log(session);

  let branchId = 8; // gotoid-t branchid ként nevezd el.

  function check() {
    fetch(
      `https://adventurehub-dev.herokuapp.com/game/d53d1572-2371-4675-90be-3f0cfc632079`,
      {
        // a második ugyan olyan lekérésnél hibát fog dobni.
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ branchId }),
      }
    )
      .then((response) => {
        return response.json(1);
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <>
      <h1>{uuid}</h1>
      <div>
        <ul>
          {game.map((option) => (
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
        {/* <button onClick={check}> check</button> */}
      </div>
    </>
  );
}

export default StartGamePage;
