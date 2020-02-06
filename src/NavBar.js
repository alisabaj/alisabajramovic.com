import React from "react";

function NavBar() {
  return (
    <div className="row">
      <div className="twelve columns" style={{ textAlign: "center" }}>
        <div>
          <h6
            style={{
              display: "inline-block",
              paddingRight: "3%",
              paddingTop: "3%",
              fontWeight: "600"
            }}
          >
            <a href="#homeSection">HOME </a>
          </h6>
          <h6
            style={{
              display: "inline-block",
              paddingRight: "3%",
              fontWeight: "600"
            }}
          >
            <a href="#aboutMeSection">ABOUT ME</a>
          </h6>
          <h6
            style={{
              display: "inline-block",
              paddingRight: "3%",
              fontWeight: "600"
            }}
          >
            <a href="#myProjectsSection">MY PROJECTS </a>
          </h6>
          <h6
            style={{
              display: "inline-block",
              paddingRight: "3%",
              fontWeight: "600"
            }}
          >
            <a
              href="https://learn.co/alisabajramovic/resume"
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              MY RESUME
            </a>
          </h6>
          <h6 style={{ display: "inline-block", fontWeight: "600" }}>
            <a href="#contactMeSection">CONTACT ME</a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
