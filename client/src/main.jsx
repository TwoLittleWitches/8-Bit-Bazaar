import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import "./index.css";
import "./font/RetroGaming.ttf";

// HYDRATES THE APP COMPONENT USING REACT
// Uses client-side JavaScript to add application state and interactivity to server-rendered HTML

hydrate(<App />, document.getElementById("root"));
