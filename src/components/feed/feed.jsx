import "./feed.css";
import Trends from "./trends/trends";

const Feed = ({ setSelectedSong }) => {
  return (
    <section className="feed">
      <Trends setSelectedSong={setSelectedSong} />
    </section>
  );
};

export default Feed;
