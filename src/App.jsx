import axios from 'axios';
import { useEffect, useState } from 'react';
// import './App.css'; // This line was causing the error as App.css was not found or needed.

function App() {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleClick = async () => {
  if (!artist || !song) {
    alert("Please enter both artist and song!");
    return;
  }

  const apiUrl = `https://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${encodeURIComponent(
    artist
  )}&song=${encodeURIComponent(song)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch lyrics");

    const xmlText = await response.text();

    // Parse XML to extract lyrics
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const lyricsNode = xmlDoc.getElementsByTagName("Lyric")[0];
    const lyrics = lyricsNode ? lyricsNode.textContent : "Lyrics not found.";

    console.log(lyrics);
    alert(lyrics);
  } catch (error) {
    console.error(error.message);
    alert("Lyrics not found or an error occurred!");
  }
};



  return (
    // Main container: full height, dark gradient background, centered content, padding
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-6 font-inter">

      {/* Title: large, bold, white text, centered, with a subtle shadow */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-10 text-center drop-shadow-lg">
        Lyrics Finder
      </h1>

      {/* Input Section: responsive layout (column on small, row on medium+), gap between inputs */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl justify-center">
        {/* Artist Input Field */}
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Enter Artist Name"
          className="flex-1 px-6 py-4 bg-gray-800 text-gray-100 rounded-xl border border-gray-700 placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                     transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        />

        {/* Song Input Field */}
        <input
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="Enter Song Title"
          className="flex-1 px-6 py-4 bg-gray-800 text-gray-100 rounded-xl border border-gray-700 placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                     transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        />
      </div>

      {/* Search Button: vibrant indigo, larger text, rounded, strong shadow, interactive hover effects */}
      <button
        className="mt-8 px-12 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold rounded-xl shadow-xl 
                   transition-all duration-300 ease-in-out hover:scale-105 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        onClick={handleClick}
      >
        Search Lyrics
      </button>
    </div>
  );
}

export default App;
