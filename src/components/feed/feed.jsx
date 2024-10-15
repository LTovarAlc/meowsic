import "./feed.css";
import TopArtists from "./topArtists/topArtists";
import Trends from "./trends/trends";

const Feed = ({ setSelectedSong }) => {
  return (
    <section className="feed">
      <Trends setSelectedSong={setSelectedSong} />
      <TopArtists/>
    </section>
  );
};

export default Feed;
