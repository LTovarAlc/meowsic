import React, { useState } from "react";
import "./searcher.css";

const Searcher = () => {
  const [searchQuery, setSearchQuery] = useState("");  // Mantener solo el estado del input de búsqueda

  return (
    <div className="searcher-container">
      <input
        placeholder="Type a song, artist, album..."
        type="text"
        name="text"
        className="input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}  // Actualizar el estado al cambiar el input
      />
    </div>
  );
};

export default Searcher;
