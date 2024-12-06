import { hasDuplicate, isAnagram } from "@/app/answers/array/answers";

export const allQuestionDetails = [
  {
    key:'q1',
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
    callback: ({ firstParam }: any) => hasDuplicate(firstParam),
  },
  {
    key:'q2',
    question:
      "Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.\n An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.",
    examples: [
      {
        key: 1,
        inputs: [
          {
            variable: "s",
            value: "racecar",
          },
          {
            variable: "t",
            value: "carrace",
          },
        ],
        output: true,
        type: "blue",
      },
      {
        key: 2,
        inputs: [
          {
            variable: "s",
            value: "jar",
          },
          {
            variable: "t",
            value: "jam",
          },
        ],
        output: false,
        type: "teal",
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: ({ firstParam, secondParam }: any) =>
      isAnagram(firstParam, secondParam),
  },
];
