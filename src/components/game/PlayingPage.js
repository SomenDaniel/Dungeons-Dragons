import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PlayingPage() {
  const { sessionId } = useParams();
  const { goToId } = useParams();
  // const storyUuid = uuid;
  const [game, setGame] = useState([]);
  const [options, setOptions] = useState([]);
  const [start, setStart] = useState(true);
  // let start = true;
  // // átszervezés alatt

  useEffect(() => {
    setUp();
  }, []);

  // function starter() {
  //   setOptions(game.currentBranch.goesTo);
  //   setStart(false);
  //   document.querySelector(".starterButton").style.display = "none";
  // }
  // console.log(game);
  // console.log(options);

  let branchId = Number(goToId); // gotoid-t branchid ként nevezd el.

  function setUp() {
    fetch(`https://adventurehub-dev.herokuapp.com/game/${sessionId}`, {
      // a második ugyan olyan lekérésnél hibát fog dobni.
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ branchId }),
    })
      .then((response) => {
        return response.json(1);
      })
      .then((data) => {
        setGame(data.currentBranch.goesTo);
      });
  }

  const refreshPage = () => {
    window.location.reload();
  };
  console.log(game);
  // gotoid request body , sessionid url
  return (
    <>
      <h1>{sessionId}</h1>
      <h1>{goToId}</h1>
      <div>
        <ul>
          {game.map((option) => (
            <li>
              {option.text}
              <button onClick={refreshPage}>
                <Link
                  className="link"
                  to={`/game/${sessionId}/${option.goToId}`}
                >
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

export default PlayingPage;
