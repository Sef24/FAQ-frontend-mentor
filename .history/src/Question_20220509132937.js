import React from "react";

function Question({ question, answer }) {
  return (
    <div>
      <div>
        <h2>{question}</h2>
      </div>
      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default Question;
