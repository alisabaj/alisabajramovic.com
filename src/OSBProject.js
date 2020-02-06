import React from "react";

function OSBProject() {
  return (
    <div className="nine columns">
      <h4>Open Secrets Browser </h4>
      <p>
        A Ruby on Rails/JavasScript React program that enables users to learn
        about the financial donors of federally-elected officials
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/alisabaj/open_secrets_browser_frontend"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            Github front end repository
          </a>
        </li>
        <li>
          <a
            href="https://github.com/alisabaj/open_secrets_browser_backend"
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
          src="https://www.youtube.com/embed/fO18QzctDq8"
          frameBorder="0"
          title="Open Secrets Browser Demo"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default OSBProject;
