import React from "react";

export default function Footer() {
  return (
    <footer>
      <span className="app-by">
        App by Rebecca Wiedau
        <a
          href="https://github.com/RebeccaWiedau/WeatherApp/"
          rel="noreferrer"
          target="blank_"
        >
          <img
            src="media/icons/darkmode/github-brands-darkmode.svg"
            alt="Github"
            title="Github-Repository"
            className="github-icon"
          />
        </a>
      </span>
      <span className="icons-by">
        Icons by Font Awesome{" "}
        <a
          href="https://fontawesome.com/license"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="media/icons/darkmode/font-awesome-brands-darkmode.svg"
            title="Fontawesone"
            alt="Fontawesome"
            className="font-awesome-icon"
          />
        </a>
      </span>
    </footer>
  );
}
