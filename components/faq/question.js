import React, { useState, useEffect } from "react";
import { QuestionCard } from "../basic";

const Question = (props) => {
  return <QuestionCard>{props.question}</QuestionCard>;
};

export default Question;
