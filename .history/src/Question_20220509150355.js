import React from "react";

function Question({ question, answer }) {
  return (
    <div>
      <div className="div-question">
        <h2 className="">{question}</h2>
      </div>
      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default Question;
