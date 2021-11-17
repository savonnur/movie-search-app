import React from "react";
import "./Modal.css";

function Modal({ open, onClose, release, vote, overview, backdrop, title }) {
  if (!open) return null;

  return (
    <>
      <div className="overlay-style" />
      <div className="modal-style">
        <img
          className="modal-backdrop-poster"
          src={backdrop}
          alt="backdrop_poster"
        />
        <h1 className="modal-title">{title}</h1>
        <hr />
        <h3 className="modal-release-date">Release Date: {release}</h3>
        <hr />
        <h3 className="modal-rating">Rating: {vote}</h3>
        <hr />
        <p className="modal-overview">{overview}</p>
        <button className="close-modal-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
}

export default Modal;
