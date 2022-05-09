import React, { useState } from "react";
import desktop from "./images/illustration-woman-online-desktop.svg";
function App() {
  return (
    <div className="flex items-center justify-center py-52">
      <h1 className="text-lg font-bold">FAQ</h1>
      <img src={desktop} className="w-auto sm:w-96 " />
    </div>
  );
}

export default App;
