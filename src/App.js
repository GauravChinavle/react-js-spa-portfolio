import React from "react";
import Navbar from "./components/Navbar";
import HamNavbar from "./components/HamNavbar";
import "./App.css"
import "./mediaQueries.css"
import "./scrollingScript"
// We will create these two pages in a moment
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import LiveDemo from "./pages/LiveDemo";
import GithubProjects from "./pages/GithubProjects";
import Contact from "./pages/Contact";
// portfolio config file
import Portfolio from "./portfolio.json";
import { useMediaQuery } from 'react-responsive';

export default function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  return (
    <>
      {isSmallScreen ? <HamNavbar default={Portfolio} />:<Navbar default={Portfolio} />}
      <Profile default={Portfolio} />
      <Experience default={Portfolio} />
      <LiveDemo default={Portfolio} />
      <GithubProjects default={Portfolio} />
      <Contact default={Portfolio} />
    </>
  )
}