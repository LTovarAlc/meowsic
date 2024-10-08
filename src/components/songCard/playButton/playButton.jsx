import React from "react";
import "./playButton.css"
import PlayButtonImg from "../../../imgs/tocar.png"

const PlayButton = ({songName}) => {

    const handleClick = () => {
        console.log(songName)
    }

    return(
        <button className="playButton" onClick={handleClick}>
            <img src={PlayButtonImg} alt="Play" className="playButton-img" />
        </button>
    )
}

export default PlayButton