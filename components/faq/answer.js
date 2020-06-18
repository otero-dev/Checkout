import React, { useState, useEffect } from "react";
import { Box, AnswerCard } from "../basic";

const Answer = (props) => {
  return <AnswerCard>{props.answer}</AnswerCard>;
};

export default Answer;
