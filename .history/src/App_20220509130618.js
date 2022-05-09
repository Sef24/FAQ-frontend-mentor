import React, { useState } from "react";
import desktop from "./images/illustration-woman-online-desktop.svg";
import mobile from "./images/illustration-woman-online-mobile.svg";

function App() {
  return (
    <div>
      <h1>FAQ</h1>
      <source media="(min-width:768px)" src={desktop} />
      <img src={mobile} alt="" />
    </div>
  );
}

export default App;
