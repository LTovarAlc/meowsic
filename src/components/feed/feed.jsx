import React, { useState, useEffect } from "react";
import "./feed.css"
import SongCard from "./songCard/songCard";
import { getSpotifyToken, getTrendingTracks } from "../../spotifyService";

const Feed = () => {
    const [songs, setSongs] = useState ([]);

    const fetchTrendingSongs = async () => {
        try {
          const token = await getSpotifyToken();
          console.log('Access token:', token);  // Verifica si estás obteniendo el token
          const tracks = await getTrendingTracks(token);
          setSongs(tracks);
        } catch (error) {
          console.error('Error fetching songs:', error);
        }
      };
      

    useEffect(() => {
        fetchTrendingSongs();
    }, []);

    const songCards = Array.from({length: 8});

    return (
        <section className="feed">
          <div className="trends">
            <h2>Tendencias</h2>
            <div className="trend-songs__container">
              {songs.map((song, index) => (
                <SongCard 
                  key={index}
                  songName={song.track.name}
                  artistName={song.track.artists[0].name}
                  imageUrl={song.track.album.images[0].url}
                />
              ))}
            </div>
          </div>
        </section>
      );
}

export default Feed