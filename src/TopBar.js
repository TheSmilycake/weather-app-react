import React from "react";

export default function TopBar() {
  return (
    <div className="top-bar d-flex">
      <div className="weather-location">
        <span className="weather-city" id="weather-city">
          City
        </span>
        ,
        <span className="weather-country" id="weather-country">
          Country
        </span>
      </div>

      <form className="search-bar" id="search-bar">
        <div className="input-group">
          <input
            id="city-input"
            type="text"
            className="form-control"
            placeholder="Enter location..."
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-light change-button"
              type="submit"
            >
              <i className="fas fa-search-location"></i>
            </button>
          </div>
        </div>
      </form>
      <div className="button-container">
        <button
          className="round-button rounded-circle"
          id="current-location-button"
          title="Current location"
        >
          <img
            src="media/icons/darkmode/map-marker-darkmode.svg"
            alt="map-marker"
            className="map-marker-icon darkmode"
          />
        </button>
        <button
          className="round-button rounded-circle"
          id="degree-unit-button"
          value="metric"
          title="Change unit"
        >
          <span className="button-degree-sign">°F</span>
        </button>
        <button
          className="round-button rounded-circle"
          id="theme-mode-button"
          value="darkmode"
          title="Theme mode"
        >
          <img
            src="media/icons/darkmode/eye-darkmode.svg"
            alt="eye"
            className="eye-icon darkmode"
          />
        </button>
      </div>
    </div>
  );
}
