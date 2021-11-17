import React from "react";
import { useState } from "react";
import SearchItem from "./SearchItem";
import "./Search.css";

function Search() {
  const [userInput, setUserInput] = useState("");
  const [movies, setMovies] = useState([]);

  function inputChangeHandler(event) {
    setUserInput(event.target.value);
  }

  const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=b20bf1072eda5653d6ad763d61715526&language=en-US&query=";

  function searchClickHandler() {
    if (userInput === "") {
      alert("Error: Enter a movie");
    } else
      fetch(`${API_URL}${userInput}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.results.length === 0) {
            alert("No Results Found...");
          }
          console.log(data);
          setMovies(data.results);
        });
  }

  return (
    <div>
      <div className="search_container">
        <input
          className="search_bar"
          type="text"
          placeholder="Search for a movie..."
          required
          onChange={inputChangeHandler}
          value={userInput}
        />
        <button className="search-btn" onClick={searchClickHandler}>
          Search
        </button>
      </div>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <SearchItem key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default Search;
