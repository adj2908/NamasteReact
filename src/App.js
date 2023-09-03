import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

const AppContainer = () => (
  <div className="app-container">
    <Header />
    <Body />
  </div>
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppContainer />);
