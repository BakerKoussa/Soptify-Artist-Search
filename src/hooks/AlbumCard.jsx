import React from "react";

function AlbumCard(props) {
  return (
    <div style={{ height: "70vh" }}>
      <div className="card" style={{ width: "15rem" }} onClick={props.onClick}>
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          style={{ height: "25vh" }}
        />
        <div
          className="card-body"
          style={{ textAlign: "left", height: "20vh" }}
        >
          <h5 className="card-title" style={{ color: "black" }}>
            {props.name}
          </h5>
          <h6 className="card-text" style={{ color: "grey" }}>
            <small>{props.artistName}</small>
          </h6>
        </div>
        <div style={{ marginLeft: "2.5vh" }}>
          <h6 className="text-start fs-6" style={{ color: "grey" }}>
            <small>{props.releaseDate} </small>
          </h6>
          <h6 className="text-start fs-6" style={{ color: "grey" }}>
            <small>{props.numberOfTracks} tracks</small>
          </h6>
        </div>
        <div className="card-footer">
          <a href={props.visitSpotify}>
            <small className="text-muted fs-6">Previw on Spotify</small>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
