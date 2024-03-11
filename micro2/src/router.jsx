import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage";
import Register from "./Pages/RegisterPage";
import VideoGames from "./Pages/VideogamesPage";
import Profile from "./Pages/Profile";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/videogames",
    element: <VideoGames/>
  },
  {
    path: "/profile",
    element: <Profile/>
  }
])