import "./songCard.css";

const SongCard = ({ songName, artistName, imageUrl }) => {
  return (
    <div className="songCard">
      <img src={imageUrl} className="song-thumbnail__songCard" alt={songName} />
      <div className="song-details__songCard">
        <span className="song-name__songCard">{songName}</span>
        <span className="song-artist__songCard">{artistName}</span>
      </div>
    </div>
  );
};

export default SongCard;
