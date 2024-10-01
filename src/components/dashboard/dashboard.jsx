import React from "react";
import "./dashboard.css";
import meowsic from "../../imgs/meowsic.png"
import Searcher from "../searcher/searcher";
import Player from "../player/player";
import Feed from "../feed/feed";

const Dashboard = () => {
  return (
    <div class="dashboard">
      <div class="logo__container">
        <img src={meowsic} alt="meowsicLogo" className="meowsicLogo"/>
      </div>
      <div class="player__container"><Player/></div>
      <div class="searcher__container"><Searcher/></div>
      <div class="history__container">history</div>
      <div class="feed__container"><Feed/></div>
    </div>
  );
};

export default Dashboard;
