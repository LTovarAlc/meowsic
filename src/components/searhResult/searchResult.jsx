import React from "react";
import "./searchResult.css";

const SearchResult = ({ results, setSelectedSong }) => {
  return (
    <div className="search-results">
      {results && results.length > 0 ? (
        results.map((result) => (
          <div
            key={result.id}
            className="search-result-item"
            onClick={() =>
              setSelectedSong({
                songName: result.name,
                artistName: result.artists[0].name,
                imageUrl: result.album.images[0]?.url,
              })
            }
          >
            <img src={result.album.images[0]?.url} alt={result.name} />
            <div>
              <p>{result.name}</p>
              <p>{result.artists[0].name}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResult;
