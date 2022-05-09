import React, { useState } from "react";
import desktop from "./images/illustration-woman-online-desktop.svg";
import mobile from "./images/illustration-woman-online-mobile.svg";
import Question from "./Question";
import { faq } from "./faq";

function App() {
  const [singleQuestions, setSingleQuestions] = useState(faq);

  return (
    <div className="container">
      <div>
        <picture>
          <source media="(min-width:768px)" src={desktop} />
          <img className="h-32" src={mobile} alt="" />
        </picture>
      </div>

      <div>
        <h1 className="font-bold text-xl">FAQ</h1>

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
