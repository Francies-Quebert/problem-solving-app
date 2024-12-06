'use client'
import { useState } from "react";
import Button from "../../Button";
import { TQuestionDetails } from "../types";

export const RunSolution = ({ examples, callback }: Pick<TQuestionDetails,'callback'|'examples'>) => {
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