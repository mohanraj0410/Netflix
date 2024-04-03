import React from "react";

const TrailerVideoTitle = (props) => {
  const { overview, title } = props;
  return (
    <div className="trailerVideoTitle">
      <div>
        <h1>{title}</h1>
        <p>{overview}</p>
        <button className="play-now-btn">Play Now</button>
        <button className="more-info-btn">More Info</button>
      </div>
    </div>
  );
};

export default TrailerVideoTitle;
