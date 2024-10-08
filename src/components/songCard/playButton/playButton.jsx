import React from "react";
import "./playButton.css"
import PlayButtonImg from "../../../imgs/tocar.png"

const PlayButton = () => {
    return(
        <button className="playButton">
            <img src={PlayButtonImg} alt="Play" className="playButton-img" />
        </button>
    )
}

export default PlayButton