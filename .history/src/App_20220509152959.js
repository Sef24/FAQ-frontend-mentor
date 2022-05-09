import React, { useState } from "react";
import desktop from "./images/illustration-woman-online-desktop.svg";
import mobile from "./images/illustration-woman-online-mobile.svg";
import Question from "./Question";
import { faq } from "./faq";

function App() {
  const [singleQuestions, setSingleQuestions] = useState(faq);

  return (
    <div className="container">
      <article>
        <picture>
          <img src={mobile} alt="" height={350} />
        </picture>
      </article>

      <div>
        <h1>FAQ</h1>

        {singleQuestions.map((singleQuestion, id) => (
          <Question
            key={singleQuestions.id}
            question={singleQuestion.question}
            answer={singleQuestion.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
