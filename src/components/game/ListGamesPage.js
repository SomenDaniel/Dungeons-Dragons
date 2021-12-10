import React, { useContext } from "react";
import "./ListGamesPage.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLogin } from "../user/LoginContext";
import logo from "../logo.png";
import Logout from "../Logout";
// , {mode: "no-cors",}

function GamePage() {
  // ez lesz az elmentett access token minden pagenél.
  let [free, setFree] = useState(false);
  let [approved, setApproved] = useState(false);
  let [desc, setDesc] = useState(false);
  let [title, setTitle] = useState("");
  let [creator, setCreator] = useState("");
  let [category, setCategory] = useState("");
  let [xpMin, setXpMin] = useState(0);
  let [xpMax, setXpMax] = useState(0);
  let [message, setMessage] = useState("");
  let [filtered, setFiltered] = useState([]);

  function freeChange(event) {
    if (event.target.value === "true") {
      setFree(true);
    } else if (event.target.value === "false") {
      setFree(false);
    }
  }
  function approvedChange(event) {
    if (event.target.value === "true") {
      setApproved(true);
    } else if (event.target.value === "false") {
      setApproved(false);
    }
  }

  function descendingChange(event) {
    if (event.target.value === "true") {
      setDesc(true);
    } else if (event.target.value === "false") {
      setDesc(false);
    }
  }

  function titleChange(event) {
    setTitle(event.target.value);
  }
  function creatorChange(event) {
    setCreator(event.target.value);
  }
  function categoryChange(event) {
    setCategory(event.target.value);
  }
  function xpminChange(event) {
    setXpMin(Number(event.target.value));
  }
  function xpmaxChange(event) {
    setXpMax(Number(event.target.value));
  }

  function resetFilter() {
    setMessage("");
    setFiltered([]);
  }
  // function submit() {
  //   console.log(
  //     free,
  //     approved,
  //     descending,
  //     title,
  //     creator,
  //     category,
  //     xpmin,
  //     xpmax
  //   );
  // }
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("key");
  let modal = document.getElementById("myModal");
  let options = ["true", "false"];

  // window.onload = () => {
  //   //write your code here
  //   for (let i = 0; i < options.length; i++) {
  //     let opt = document.createElement("option");
  //     opt.value = i === 0 ? true : false;
  //     opt.innerHTML = `${options[i]}`;

  //     free.appendChild(opt);
  //     approved.appendChild(opt);
  //   }
  // };

  // options.forEach(function (el, key) {
  //   free[key] = new Option(el, key);
  //   approved[key] = new Option(el, key);
  // });

  const [stories, setStories] = useState([]);
  useEffect(() => {
    listStories();
  }, []);

  function listStories() {
    fetch("https://adventurehub-dev.herokuapp.com/stories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStories([...data]);
      });
  }

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function filter() {
    fetch("https://adventurehub-dev.herokuapp.com/storyInfo/filter", {
      method: "POST",
      // headers: { "content-type": "application/json" },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        creator,
        category,
        free,
        approved,
        xpMin,
        xpMax,
        sort: "",
        desc,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("sikertelen");
        }
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        setMessage("success");
        setFiltered(data);
      })
      .catch((error) => {
        setMessage(error.message);
      });
    console.log(message);
    console.log(filtered);
  }

  console.log(stories);
  return (
    <>
      <div className="listContainer">
        <header className="listHeader">
          <img className="listLogo" src={logo} alt="logo" />
          <p className="welcomeMessage">{`Hey ${username}!`}</p>
          <div className="listNavigation">
            <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="link"
                to="/user"
              >
                Profile
              </Link>
            </button>
            <Logout />
          </div>
        </header>
        <div className="storyContainer">
          <div className="storyIntro">
            <h1>Stories:</h1>
            <button onClick={message === "" ? openModal : resetFilter}>
              {message === "" ? "Filter" : "Reset"}
            </button>
          </div>
          <div className="stories">
            <ul>
              {message === ""
                ? stories.map((game) => (
                    <li className="gameData">
                      <p>{` title: ${game.title}`}</p>
                      <p>{` creator: ${game.creator.username}`}</p>
                      <button>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "white",
                            fontSize: "10px",
                          }}
                          className="link"
                          to={`/game/${game.uuid}/start`}
                        >
                          play
                        </Link>
                      </button>
                      <button>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "white",
                            fontSize: "10px",
                            textAlign: "right",
                          }}
                          className="link"
                          to={`/game/${game.uuid}/info`}
                        >
                          info
                        </Link>
                      </button>
                    </li>
                  ))
                : filtered.map((game) => (
                    <li className="gameData">
                      <p>{` title: ${game.title}`}</p>
                      <p>{` creator: ${game.creator.username}`}</p>
                      <button>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "white",
                            fontSize: "10px",
                          }}
                          className="link"
                          to={`/game/${game.uuid}/start`}
                        >
                          play
                        </Link>
                      </button>
                      <button>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "white",
                            fontSize: "10px",
                            textAlign: "right",
                          }}
                          className="link"
                          to={`/game/${game.uuid}/info`}
                        >
                          info
                        </Link>
                      </button>
                    </li>
                  ))}
              {/* {stories.map((game) => (
                <li className="gameData">
                  <p>{` title: ${game.title}`}</p>
                  <p>{` creator: ${game.creator.username}`}</p>
                  <button>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "10px",
                      }}
                      className="link"
                      to={`/game/${game.uuid}/start`}
                    >
                      play
                    </Link>
                  </button>
                  <button>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "10px",
                        textAlign: "right",
                      }}
                      className="link"
                      to={`/game/${game.uuid}/info`}
                    >
                      info
                    </Link>
                  </button>
                </li>
              ))}
              {filtered.map((game) => (
                <li className="gameData">
                  <p>{` title: ${game.title}`}</p>
                  <p>{` creator: ${game.creator.username}`}</p>
                  <button>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "10px",
                      }}
                      className="link"
                      to={`/game/${game.uuid}/start`}
                    >
                      play
                    </Link>
                  </button>
                  <button>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "10px",
                        textAlign: "right",
                      }}
                      className="link"
                      to={`/game/${game.uuid}/info`}
                    >
                      info
                    </Link>
                  </button>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
      {/* Modal window---------------------------------------------------------------------------- */}
      <div id="myModal" class="modal">
        <h1>Advanced search</h1>
        <div className="formContainer">
          <div className="filterF1">
            <div className="Ccont">
              <label htmlFor="title">title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={titleChange}
              />
            </div>
            <div className="Ccont">
              <label htmlFor="creator">creator:</label>
              <input
                type="text"
                id="creator"
                value={creator}
                onChange={creatorChange}
              />
            </div>
            <div className="Ccont">
              <label htmlFor="category">category:</label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={categoryChange}
              />
            </div>
          </div>
          <div className="filterF2">
            <div className="Ccont">
              <label htmlFor="free">free:</label>
              <select id="free" value={free} onChange={freeChange}>
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
            <div className="Ccont">
              <label htmlFor="approved">approved:</label>
              <select id="approved" value={approved} onChange={approvedChange}>
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
            <div className="Ccont">
              <label htmlFor="xpmin">xpmin:</label>
              <input
                type="text"
                id="xpmin"
                value={xpMin}
                onChange={xpminChange}
              />
            </div>
          </div>
          <div className="filterF3">
            <div className="Ccont">
              <label htmlFor="xpmax">xpmax:</label>
              <input
                type="text"
                id="xpmax"
                value={xpMax}
                onChange={xpmaxChange}
              />
            </div>
            <div className="Ccont">
              <label htmlFor="desc">descending:</label>
              <select id="desc" value={desc} onChange={descendingChange}>
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modalButtons">
          <button id="fil" className="modalButton" onClick={filter}>
            Filter
          </button>
          <button id="clo" className="modalButton" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default GamePage;
