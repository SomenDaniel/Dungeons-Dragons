import "./App.css";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./components/user/RegistrationPage";
import LoginPage from "./components/user/LoginPage";
import UserPage from "./components/user/UserPage";
import MainPage from "./components/MainPage";
import ListGamesPage from "./components/game/ListGamesPage";
import CreatorPage from "./components/CreatorPage";
import PlayingPage from "./components/game/PlayingPage";
import GameInfoPage from "./components/game/GameInfoPage";
import StartGamePage from "./components/game/StartGamePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/game/:id/start" element={<StartGamePage />}></Route>
          <Route path="/game/:id/info" element={<GameInfoPage />}></Route>
          <Route path="/game/:id" element={<PlayingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="/create" element={<CreatorPage />}></Route>
          <Route path="/gamelist" element={<ListGamesPage />}></Route>
          <Route path="/mainpage" element={<MainPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/" element={<WelcomePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
