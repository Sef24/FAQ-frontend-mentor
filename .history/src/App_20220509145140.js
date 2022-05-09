import React, { useState } from "react";
import desktop from "./images/illustration-woman-online-desktop.svg";
import mobile from "./images/illustration-woman-online-mobile.svg";
import Question from "./Question";
import { faq } from "./faq";

function App() {
  const [singleQuestions, setSingleQuestions] = useState(faq);

  return (
    <div className="card">
      <div>
        <source media="(min-width:768px)" src={desktop} />
        <img className="h-60 " src={mobile} alt="" />
      </div>

      <div className="pl-60 text-left ">
        <h1 className="font-bold text-lg">FAQ</h1>

        {singleQuestions.map((singleQuestion, index) => (
          <Question
            key={singleQuestions.index}
            question={singleQuestion.question}
            answer={singleQuestion.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
