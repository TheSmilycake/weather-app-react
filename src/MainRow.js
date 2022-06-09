import React from "react";

export default function MainRow() {
  return (
    <div className="main row">
      <div className="left-main-col col-12 col-lg-4">
        <div className="today row">
          <div className="col-6 col-lg-12">
            <div className="today__weather-icon" id="today__weather-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <div className="today__current-temp d-inline-block">
              <span
                className="current__value temperature"
                id="current-temp__value"
                data-temp-value="20"
              >
                20
              </span>
              <span className="degree-sign">°C</span>
            </div>
          </div>
          <div className="col-6 col-lg-12">
            <div className="today__max-min-temp">
              <span className="today__max-temp">
                <img
                  alt="max temparature"
                  src="media/icons/darkmode/temperature-high-darkmode.svg"
                  className="today-temp-icon"
                />
                <span
                  className="today__max-temp-value temperature"
                  id="today__max-temp-value"
                  data-temp-value="21"
                >
                  21
                </span>
                <span className="degree-sign">°C</span>
              </span>
              <span className="today__min-temp">
                <img
                  alt="min temparature"
                  src="media/icons/darkmode/temperature-low-darkmode.svg"
                  className="today-temp-icon"
                />
                <span
                  className="today__min-temp-value temperature"
                  id="today__min-temp-value"
                  data-temp-value="18"
                >
                  18
                </span>
                <span className="degree-sign">°C</span>
              </span>
            </div>
            <div className="current-humidity d-inline-block">
              <img
                alt="current humidity"
                src="media/icons/darkmode/tint-darkmode.svg"
                className="humidity-icon"
              />
              <span className="current__value" id="current-humidity__value">
                80
              </span>
              <span className="percent-sign">%</span>
            </div>
            <div className="current-wind-speed d-inline-block">
              <img
                alt="current wind"
                src="media/icons/darkmode/wind-darkmode.svg"
                className="wind-speed-icon"
              />
              <span className="current__value" id="current-wind-speed__value">
                9{" "}
              </span>
              <span className="speed-sign">m/s</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-main-col col-12 col-lg-8">
        <div className="weather-location__date-wrapper d-flex"></div>
        <div className="forecast" id="forecast"></div>
      </div>
    </div>
  );
}
