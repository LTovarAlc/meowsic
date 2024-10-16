import "./header.css"
import React from "react";
import meowsic from "../../imgs/mewsic.png";
import Searcher from "../../components/searcher/searcher";

const Header = () => {
  return (
    <header className="header">
      <div className="logo__container">
        <img src={meowsic} alt="meowsicLogo" className="meowsicLogo" />
      </div>
      <div className="searcher__container">
        <Searcher />
      </div>
    </header>
  );
};

export default Header;
