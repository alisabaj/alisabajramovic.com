import React from "react";

function HTProject() {
  return (
    <div className="nine columns">
      <h4>The Habit Tracker</h4>
      <p>
        A Ruby on Rails program that enables users to keep track of their goals
        and establish habits that lead to those goals
      </p>
      <ul>
        <li>
          <a
            href="http://the-habit-tracker.herokuapp.com/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            Hosted on Heroku
          </a>
        </li>
        <li>
          <a
            href="https://github.com/alisabaj/Habit_Tracker"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            Github repository
          </a>
        </li>
      </ul>
      <div className="responsiveVideo">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vb3SxtPfKCM"
          frameBorder="0"
          title="The Habit Tracker Demo"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default HTProject;
