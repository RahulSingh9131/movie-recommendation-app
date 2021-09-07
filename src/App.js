import "./styles.css";
import React, { useState } from "react";

const movieList = {
  Action: [
    { name: "Extraction", rating: "8.9/10",description:"This movie is about a boy, who got rescued by Tyler Rake(main lead) from the hands of Drug peddlers in Dhaka.  " },
    { name: "John Wick", rating: "9.3/10",description:"This movie is about Keenu Reves, who is taking revenge from the people who broke into his home." },
    { name: "Edge of Tommorow", rating: "9/10",description:"This movie is about a guy who can enter the future,where he is fighting with the deadly aliens." }
  ],
  Thriller: [
    { name: "Shutter Island", rating: "8/10",description:"This movie features leo and mark Ruffalo, they both visit a asylum(located on an island) for investigation of a murderess, who have vanished from a locked room " },
    { name: "Andhadhun", rating: "8.5/10",description:"Akash, a piano player pretending to be visually-impaired, unwittingly becomes entangled in a number of problems as he witnesses the murder of a former film actor." },
    { name: "Joker", rating: "9.4/10",description:"This movie is about a guy who is a loner and who is bullied by the society, so to take revenge he slowly converts into madness as he transforms into the criminal mastermind known as the Joker." }
  ],
  Romance: [
    { name: "After", rating: "8.3/10",description:"Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life." },
    { name: "Barfi", rating: "9/10",description:"A typical bollywood love triangle between one guy and two girls. shruti(illeana) fell in love with barfi(ranbir) but later finds out that he is in love with other girl(priyanka)" },
    { name: "Dil Bechara", rating: "9.1/10",description:"Kizie and Manny are poles apart in personality and their battle against cancer is the only common thread binding them. Love slowly wraps them in its embrace, but little do they know what fate has in store for them." }
  ],
  Animation: [
    { name: "Wall-E", rating: "8/10",description:"This movie is about a robot who is apparently the last one left on earth, he then met another futuristic robot, whom he follows till he reaches the next planet " },
    { name: "Zootopia", rating: "8.1/10",description:"This movie is about a fox and rabbit solving typical crime cases together." },
    { name: "Ratatouille", rating: "8.3/10",description:"This movie is about a rat, who showcase his culinary skills to a food critic with the help of a boy by hiding inside his hat. " }
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
                <p style={{fontSize:"small"}}>{movie.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
