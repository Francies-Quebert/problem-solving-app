"use client";
import React from "react";
import { allQuestionDetails } from "./data";
import { QuestionContainer } from "./QuestionContainer";
import { RunSolution } from "./RunSolution";
import { RevealCode } from "./RevealCode";

export const Questions = () => {
  return allQuestionDetails.map(({question,key,callback,examples}) => (
    <div className="bg-gray-100/20 m-4 p-4 rounded" key={key}>
      <QuestionContainer question={question} examples={examples} />
      <RunSolution examples={examples} callback={callback} />
      <RevealCode callback={callback} />
    </div>
  ));
};
