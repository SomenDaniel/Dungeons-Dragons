import logo from "./logo.svg";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";
import MainPage from "./components/MainPage";
import ListGamesPage from "./components/ListGamesPage";
import CreatorPage from "./components/CreatorPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/game/:id" element={<LoginPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="/create" element={<CreatorPage />}></Route>
          <Route path="/game" element={<ListGamesPage />}></Route>
          <Route path="/mainpage" element={<MainPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/" element={<WelcomePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
