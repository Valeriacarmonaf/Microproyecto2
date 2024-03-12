import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import VideoGamesPage from "./Pages/VideogamesPage";
import Profile from "./Pages/Profile";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/HomePage",
    element: <HomePage />
  },
  {
    path: "/videogames",
    element: <VideoGamesPage/>
  },
  {
    path: "/profile",
    element: <Profile/>
  }
])