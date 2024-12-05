"use client";
import React from "react";
import { hasDuplicate } from "../../answers/array/answers";
import { questionDetails } from "./data";
import { QuestionContainer } from "./QuestionContainer";
import { RunSolution } from "./RunSolution";
import { RevealCode } from "./RevealCode";

export const Questions = () => {
  return (
    <div className="bg-gray-100/20 m-4 p-4 rounded">
      <QuestionContainer {...questionDetails} />
      <RunSolution {...questionDetails} />
      <RevealCode callback={hasDuplicate as () => boolean} />
    </div>
  );
};
