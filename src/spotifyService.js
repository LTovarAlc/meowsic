// spotifyService.js
export const getSpotifyToken = async () => {
  const client_id = "fb0cc79b977248a580554177c7f894df"; // Client ID
  const client_secret = "128276d87c184b3d9ce616b1b8fa71fe"; // Client Secret

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(client_id + ":" + client_secret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

// get song on trending
export const getTrendingTracks = async (token) => {
  const response = await fetch(
    "https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp/tracks",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  console.log("Response from Spotify:", data); // Verifica el contenido de la respuesta

  if (data.items) {
    return data.items.slice(0, 10); // Retorna las primeras 10 canciones solo si items existe
  } else {
    console.error("No items found in the response:", data);
    return [];
  }
};

// searchSpotify function 
export const searchSpotify = async (query, token) => {
  const encodedQuery = encodeURIComponent(query); // code query to avoid problems with space or specials characters
  const response = await fetch(`https://api.spotify.com/v1/search?q=${encodedQuery}&type=track,artist,album&limit=10`, {
    headers : {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();
  console.log('Search response from spotify: ', data);

  if (data.tracks || data.artists || data.albums){
    return data;
  }else{
    console.error('No search results found', data);
    return null;
  }

}

// get top artist
export const getTopArtists = async (token) => {
  // URL top global artist
  const response = await fetch(
    "https://api.spotify.com/v1/artists?ids=3TVXtAsR1Inumwj472S9r4,6eUKZXaKkcviH0Ku9w2n3V,66CXWjxzNUsdJxJ2JdwvnR,1uNFoZAHBGtllmzznpCI3s,1Xyo4u8uXC1ZmMpatF05PJ", // IDs de artistas populares como Drake, Ed Sheeran, Ariana Grande, Justin Bieber, The Weeknd
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  console.log("Response from Spotify:", data); 

  if (data.artists) {
    return data.artists.slice(0, 5); // return top 5 artist
  } else {
    console.error("No artists found in the response:", data);
    return [];
  }
};