import { useState } from "react";
import "./styles.css";

let musicDB = {
  Rock: [
    { name: "Start Me Up", rating: "5/5" },
    { name: "Proud Mary", rating: "4.5/5" }
  ],
  "Hip Hop": [
    { name: "Cars With the Boom", rating: "5/5" },
    { name: "Empire State of Mind", rating: "4.5/5" }
  ],
  EDM: [
    { name: "Warp 1.9", rating: "5/5" },
    { name: "Gecko", rating: "4.5/5" }
  ]
};

export default function App() {
  let [selectedMusicGenre, setMusicGenre] = useState("Rock");

  function selectGenreHandler(genre) {
    setMusicGenre(genre);
  }

  return (
    <div className="App">
      <h1>Good-Music</h1>
      <p>
        Checkout my favorite music collection. Please select from the different
        collection
      </p>

      <div>
        {Object.keys(musicDB).map((genre) => (
          <button key={genre} onClick={() => selectGenreHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <ul>
        {musicDB[selectedMusicGenre].map((music) => (
          <li key={music.name}>
            <div>{music.name}</div>
            <div>{music.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
