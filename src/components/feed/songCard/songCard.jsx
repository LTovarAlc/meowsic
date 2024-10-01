import "./songCard.css"
import LogoMeow from "../../../imgs/LOGOmeowsic.png"

const SongCard = () => {
    return(
        <div className="songCard">
            <img src={LogoMeow} className="song-thumbnail__songCard"/>
            <div className="song-details__songCard">
            <span className="song-name__songCard">Name</span>
            <span className="song-artist__songCard">Artist</span>
            </div>
        </div>
    )
}

export default SongCard