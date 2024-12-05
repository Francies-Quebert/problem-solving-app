import { hasDuplicate } from "@/app/answers/array/answers";

export const questionDetails = {
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
  
