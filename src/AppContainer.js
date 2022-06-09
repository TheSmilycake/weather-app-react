import React from "react";
import TopBar from "./TopBar";
import MainRow from "./MainRow";

export default function AppContainer() {
  return (
    <div className="app-container">
      <TopBar />
      <hr />
      <MainRow />
    </div>
  );
}
