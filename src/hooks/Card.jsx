import React from "react";
import StarRating from "./StarRating/StarRating.jsx";

function Card(props) {
  return (
    <div style={{ height: "70vh" }}>
      <div className="card" style={{ width: "15rem" }} onClick={props.onClick}>
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          style={{ height: "30vh" }}
        />
        <div
          className="card-body"
          style={{ textAlign: "left", height: "15vh" }}
        >
          <h5 className="card-title" style={{ color: "black" }}>
            {props.name}
          </h5>
          <h6 className="card-text" style={{ color: "grey" }}>
            <small>{props.numberOfFollowers} followers </small>
          </h6>
        </div>
        <div style={{ alignSelf: "start", marginLeft: "2.5vh" }}>
          <StarRating rating={props.rating + "%"} />
        </div>
      </div>
    </div>
  );
}

export default Card;
