import React, { useState, useEffect } from "react";
import "./topArtists.css";
import ArtistCard from "../../artistCard/artistCard";
import { getSpotifyToken, getTopArtists } from "../../../spotifyService";

const TopArtists = () => {
  const [artists, setArtists] = useState([]);

  const fetchTopArtists = async () => {
    try {
      const token = await getSpotifyToken();
      const topArtists = await getTopArtists(token);
      setArtists(topArtists);
    } catch (error) {
      console.error("Error fetching top artists:", error);
    }
  };

  useEffect(() => {
    fetchTopArtists();
  }, []);

  return (
    <section className="topArtists">
      <h2>Artistas principales</h2>
      <div className="topArtists__container">
        {artists.map((artist, index) => (
          <ArtistCard
            key={index}
            artistName={artist.name}
            imageUrl={artist.images[0]?.url}
            monthlyListeners={artist.followers.total}
            // onRedirect={() => window.open(artist.external_urls.spotify, "_blank")} // Redirigir al perfil del artista en Spotify
          />
        ))}
      </div>
    </section>
  );
};

export default TopArtists;
