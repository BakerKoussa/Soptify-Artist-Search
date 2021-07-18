import React from "react";
import "./StarRating.css";

function StarRating(props) {
  return (
    <div>
      <div className="stars-outer mt-4">
        <div className="stars-inner" style={{ width: props.rating }}></div>
      </div>
    </div>
  );
}

export default StarRating;
