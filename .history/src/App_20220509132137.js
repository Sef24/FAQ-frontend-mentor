import React, { useState } from "react";
import desktop from "./images/illustration-woman-online-desktop.svg";
import mobile from "./images/illustration-woman-online-mobile.svg";
import { Question } from "./Question";
import { faq } from "./faq";

function App() {
  const [quests] = useState("faq");

  return (
    <>
      <div className="bg-black">
        <source media="(min-width:768px)" src={desktop} />
        <img src={mobile} alt="" />
      </div>

      <div>
        <h1>FAQ</h1>

        {quests.map((quest) => (
          <Question key={quest.id} />
        ))}
      </div>
    </>
  );
}

export default App;
