import React from "react";
import Profile from "./alisa-bajramovic-profile.jpg";

function Headline() {
  return (
    <div className="row">
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        <h1 id="homeSection" style={{ letterSpacing: "0.7rem" }}>
          ALISA BAJRAMOVIC
        </h1>
        <h2>software engineer</h2>
        <img
          src={Profile}
          alt="Profile of Alisa"
          className="profilePhoto"
        ></img>
      </div>
    </div>
  );
}

export default Headline;
