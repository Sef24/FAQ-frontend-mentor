import React from "react";
import { FaChevronDown, FaChevronCircleUp } from "react-icons/fa";

function Question({ question, answer }) {
  return (
    <div>
      <div className="div-question">
        <h2 className="clicked">{question}</h2>
        <FaChevronUp />
      </div>
      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default Question;
