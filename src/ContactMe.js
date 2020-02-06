import React from "react";

function ContactMe() {
  return (
    <>
      <div
        className="row"
        style={{ marginTop: "7%" }}
      >
        <div
          className="twelve columns"
          style={{ textAlign: "center", marginTop: "3%", fontWeight: "600" }}
        >
          <p>alisabaj@gmail.com</p>
        </div>
      </div>
      <div className="row" style={{ marginBottom: "15%" }}>
        <div
          className="twelve columns"
          id="contactMeSection"
          style={{ textAlign: "center" }}
        >
          <a
            href="http://www.linkedin.com/in/alisa-bajramovic"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="http://www.github.com/alisabaj"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="http://www.twitter.com/alisa_baj"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="http://www.dev.to/alisabaj"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            <i className="fab fa-dev"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
