import React from "react";

function Options(props) {
  let start = props.firstGame;
  function asd() {
    start = false;
  }
  return (
    <>
      <h1>{start === true ? "first" : "notFirst"}</h1>
      <button onClick={asd}>play</button>
    </>
  );
}

export default Options;
