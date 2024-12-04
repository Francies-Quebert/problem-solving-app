"use client";
import React, { useState } from "react";
import { hasDuplicate } from "../../answers/array/answers";
import Button from "../Button";

const questionDetails = {
  question:
    "Q1. Contains Duplicate Solved Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.",
  examples: [
    {
      key: 1,
      inputs: [
        {
          variable: "nums",
          value: [1, 2, 3, 3],
        },
      ],
      output: true,
      type: "blue",
    },
    {
      key: 2,
      inputs: [
        {
          variable: "nums",
          value: [1, 2, 3, 4],
        },
      ],
      output: false,
      type: "teal",
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: ({firstParam}: any) => hasDuplicate(firstParam),
};

type TQuestionDetails = typeof questionDetails;

export const Questions = () => {
 
  return (
    <div className="bg-gray-100/20 m-4 p-4 rounded">
      <QuestionContainer {...questionDetails} />
      <RunSolution {...questionDetails} />
      <RevealCode callback={hasDuplicate as () => boolean} />
    </div>
  );
};

const QuestionContainer = ({ question, examples }: TQuestionDetails) => {
  return (
    <div className="bg-gray-100/20 p-4 rounded">
      <div className="bg-gray-500/70 p-2 rounded">
        {question}
        {examples.map(({ inputs, key, output }, index) => (
          <div key={key}>
            <div key={index}>Example 1: </div>
            {inputs.map(({ variable, value }) => (
              <div key={variable}>
                Input: {variable} = {JSON.stringify(value)}
              </div>
            ))}
            <div>Output: {output}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RunSolution = ({ examples, callback }: TQuestionDetails) => {
  const [answer, setAnswer] = useState<string | null>(null);
  const getAnswer = (answer: unknown) => {
    setAnswer(String(answer));
  };
  return (
    <div>
      <div className="bg-green-600 px-4 my-2 rounded">Run Code</div>
      <div className="space-x-3">
        {examples.map(({ key, inputs, type }) => {
          const callbackParameter = inputs.map(({ value }) => value);
          if (callbackParameter.length > 3)
            throw new Error("Solution Runs supports just 3 parameters");
          const [firstParam, secondParam, thirdParameter] = callbackParameter;

          return (
            <Button
              key={key}
              onClick={() =>
                getAnswer(callback({ firstParam, secondParam, thirdParameter }))
              }
              type={type as "blue" | "teal"}
            >
              Run example {key}
            </Button>
          );
        })}
      </div>
      <div className="bg-gray-600 px-4 my-2 rounded">
        <div className="text-green-600 font-bold">Solution</div>
        <div>{answer}</div>
      </div>
    </div>
  );
};

type RevealCodeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: () => any;
};

const RevealCode = ({ callback }: RevealCodeProps) => {
  const [revealCode, setRevealCode] = useState<boolean>(false);

  const onRevealCode = () => {
    setRevealCode((reveal) => !reveal);
  };
  return (
    <div className="bg-gray-600 p-4 my-2 rounded">
      <button className="bg-emerald-600 p-2 rounded-sm" onClick={onRevealCode}>
        {revealCode ? "Hide code" : "Reveal Code"}
      </button>
      {revealCode && (
        <div className="bg-black/25 p-4 my-2 rounded">
          <pre>
            function {callback.name}
            <code className="javascript">{callback.toString()}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
