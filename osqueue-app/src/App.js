import React from "react";
//import System from "./Components/System";
import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="planets sun">
        <div class="one ring"></div>

        <div class="two">
          <div class="ring"></div>
          <div class="seven"></div>
        </div>

        <div class="three">
          <div class="ring"></div>
          <div class="four"></div>
        </div>

        <div class="three slow">
          <div class="ring"></div>
          <div class="five"></div>
        </div>

        <div class="three fast">
          <div class="ring"></div>
          <div class="six"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
