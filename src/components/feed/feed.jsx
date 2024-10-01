import React from "react";
import "./feed.css"
import SongCard from "./songCard/songCard";

const Feed = () => {

    const songCards = Array.from({length: 8});

    return(
        <section className="feed">
            <div className="trends">
                <h2>Tendencias</h2>
                <div className="trend-songs__container">
                    {songCards.map((_, index) =>(
                        <SongCard key={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feed