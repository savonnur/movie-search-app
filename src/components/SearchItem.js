import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import "./SearchItem.css";

const IMG_API = "https://image.tmdb.org/t/p/w300";
const IMG_API_2 = "https://image.tmdb.org/t/p/w500";

function SearchItem({
  title,
  poster_path,
  backdrop_path,
  release_date,
  vote_average,
  overview,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const poster = IMG_API + poster_path;
  const backDrop = IMG_API_2 + backdrop_path;

  return (
    <div>
      <div className="movie">
        <img src={poster} alt={title} />
        <div className="movie-title">
          <h3>{title}</h3>
        </div>
        <button onClick={() => setIsOpen(true)} className="info-btn">
          More Info
        </button>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        release={release_date}
        vote={vote_average}
        overview={overview}
        backdrop={backDrop}
        title={title}
      />
    </div>
  );
}

export default SearchItem;
