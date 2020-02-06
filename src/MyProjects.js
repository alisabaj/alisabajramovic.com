import React from "react";
import SAAProject from "./SAAProject";
import OSBProject from "./OSBProject";
import HTProject from "./HTProject";

function MyProjects() {
  return (
    <>
      <div className="row" style={{ marginTop: "10%" }}>
        <div className="three columns">
          <h3 id="myProjectsSection">my projects</h3>
        </div>
        <SAAProject></SAAProject>
      </div>
      <hr></hr>

      <div className="row" style={{ marginTop: "4%" }}>
        <div className="three columns">
          <h4> </h4>
        </div>

        <OSBProject></OSBProject>
      </div>
      <hr></hr>

      <div className="row" style={{ marginTop: "4%" }}>
        <div className="three columns">
          <h4> </h4>
        </div>
        <HTProject></HTProject>
      </div>
      <hr></hr>
    </>
  );
}

export default MyProjects;
