import React from "react";

export default function Header() {
  return (
    <header className="d-flex">
      <h1>WeatherApp</h1> <small>optimizing in progress</small>
      <div className="today-date d-inline-block" id="today-date">
        <div className="today__current-time">14:30</div>
        <div className="today__weekday d-inline-block">DAY</div>
        <div className="today__day d-inline-block">21.10.21</div>
      </div>
    </header>
  );
}
