import React, { useState } from "react";
import "./dashboard.css";
import meowsic from "../../imgs/meowsic.png";
import Searcher from "../searcher/searcher";
import Player from "../player/player";
import Feed from "../feed/feed";

const Dashboard = () => {
  const [selectedSong, setSelectedSong] = useState({
    songName: "SONG TITLE",
    artistName: "Artist",
    imageUrl: null
  });

  return (
    <div className="dashboard">
      <div className="logo__container">
        <img src={meowsic} alt="meowsicLogo" className="meowsicLogo" />
      </div>
      <div className="player__container">
        <Player song={selectedSong} />
      </div>
      <div className="searcher__container">
        <Searcher />
      </div>
      <div className="history__container">history</div>
      <div className="feed__container">
        <Feed setSelectedSong={setSelectedSong} />
      </div>
    </div>
  );
};

export default Dashboard
