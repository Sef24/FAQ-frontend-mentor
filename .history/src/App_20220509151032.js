import React, { useState } from "react";
import desktop from "./images/illustration-woman-online-desktop.svg";
import mobile from "./images/illustration-woman-online-mobile.svg";
import Question from "./Question";
import { faq } from "./faq";

function App() {
  const [singleQuestions, setSingleQuestions] = useState(faq);

  return (
    <div className="card">
      <article>
        <picture>
          <source media="(min-width:768px)" src={desktop} />
          <img src={mobile} alt="" />
        </picture>
      </article>

      <article>
        <h1>FAQ</h1>

        {singleQuestions.map((singleQuestion, index) => (
          <Question
            key={singleQuestions.index}
            question={singleQuestion.question}
            answer={singleQuestion.answer}
          />
        ))}
      </article>
    </div>
  );
}

export default App;
