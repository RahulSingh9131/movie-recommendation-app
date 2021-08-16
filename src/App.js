import "./styles.css";
import React, { useState } from "react";

const movieList = {
  Action: [
    { name: "Extraction", rating: "8.9/10" },
    { name: "John Wick", rating: "9.3/10" },
    { name: "Edge of Tommorow", rating: "9/10" }
  ],
  Thriller: [
    { name: "Shutter Island", rating: "8/10" },
    { name: "Andhadhun", rating: "8.5/10" },
    { name: "Joker", rating: "9.4/10" }
  ],
  Romance: [
    { name: "After", rating: "8.3/10" },
    { name: "Barfi", rating: "9/10" },
    { name: "Dil Bechara", rating: "9.1/10" }
  ],
  Animation: [
    { name: "Wall-E", rating: "8/10" },
    { name: "Zootopia", rating: "8.5/10" },
    { name: "Ratatouille", rating: "8.3/10" }
  ]
};

var list = Object.keys(movieList);

export default function App() {
  var [genre, setGenre] = useState("Action");
  function buttonClickHandeler(item) {
    setGenre(item);
  }

  return (
    <div className="App">
      <h1> 🎥 GoodMovies</h1>
      <span>checkout some best movies.Here are some of the genre's </span>
      <div>
        {list.map(function (item) {
          return (
            <button key={item} onClick={() => buttonClickHandeler(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div style={{ textAlign: "left" }}>
        <ul style={{ maxWidth: "70%" }}>
          {movieList[genre].map(function (movie) {
            return (
              <li key={movie.name}>
                <div style={{ fontSize: "larger" }}>{movie.name}</div>
                <div style={{ fontSize: "small" }}>{movie.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
