import React, { useState } from "react";
import desktop from "./images/illustration-woman-online-desktop.svg";
import mobile from "./images/illustration-woman-online-mobile.svg";
import Question from "./Question";
import  faq  from "./faq";

function App() {

  const 
  return (
    <>
      <div className="bg-black">
        <source media="(min-width:768px)" src={desktop} />
        <img src={mobile} alt="" />
      </div>

      <div>
        <h1>FAQ</h1>

        <Question />
      </div>
    </>
  );
}

export default App;
