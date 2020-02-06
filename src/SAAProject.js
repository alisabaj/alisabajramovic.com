import React from "react";

function SAAProject() {
  return (
    <div className="nine columns">
      <h4>Southern Abortion Access </h4>
      <p>
        A Ruby on Rails/JavaScript React program to help people seeking
        abortions learn about their state laws, find local clinics, and keep
        track of funding sources
      </p>
      <ul>
        <li>
          <a
            href="https://alisabaj.github.io/abortion_access_frontend/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            Hosted on Github pages
          </a>
        </li>
        <li>
          <a
            href="https://github.com/alisabaj/abortion_access_frontend"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            Github front end repository
          </a>
        </li>
        <li>
          <a
            href="https://github.com/alisabaj/abortion_access_backend"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            Github back end repository
          </a>
        </li>
      </ul>
      <div className="responsiveVideo">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VL-IezVhdCA"
          frameBorder="0"
          title="Southern Abortion Access App Demo"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default SAAProject;
