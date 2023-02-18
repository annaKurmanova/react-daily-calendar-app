import React from "react";
import "./theme-switch.css";

const Mode = () => {
  return (
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
      </label>
      <em>Dark Mode </em>
    </div>
  );
};

export default Mode;
