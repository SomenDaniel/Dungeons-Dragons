import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PlayingPage() {
  const { sessionId } = useParams();
  const { goToId } = useParams();
  // const storyUuid = uuid;
  const [game, setGame] = useState([]);
  const [type, setType] = useState([]);
  const [text, setText] = useState([]);
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
  // current branch typeok: 'DEAD_END','DIVERGE', 'WINNER'
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
        setType(data.currentBranch.type);
        setText(data.currentBranch.text);
        console.log(data);
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
        <h1>{text}</h1>
        <ul>
          {type === "DIVERGE"
            ? game.map((option) => (
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
              ))
            : ""}
          {/* {game.map((option) => (
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
          ))} */}
        </ul>
        <h1>{type === "DEAD_END" ? "Game Over!" : ""}</h1>
        <h1>{type === "WINNER" ? "You Win!" : ""}</h1>
      </div>
    </>
  );
}

export default PlayingPage;
