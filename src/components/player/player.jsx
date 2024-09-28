import "./player.css"
import PlayIMG from "../../imgs/tocar.png"
import NextIMG from "../../imgs/siguiente-pista.png"

const Player = () => {
    return(
        <div className="Player">
            <div className="song__details">
                <div className="song-thumbnail__container"></div>
                <span className="song-name">SONG TITLE</span>
                <span className="song-artist-name">Artist</span>
            </div>
            <div className="song__status">
                <div className="status__buttons">
                    <button className="player-lateral__buttons"><img src={NextIMG} className="back-song-button__icon"/></button>
                    <button className="player__buttons"><img src={PlayIMG} className="play-button__icon"/></button>
                    <button className="player-lateral__buttons"><img src={NextIMG} className="next-song-button__icon"/></button>
                </div>
                <div className="status__bar">

                </div>
            </div>
            <div className="ecualizer">

            </div>
        </div>
    )
}

export default Player
