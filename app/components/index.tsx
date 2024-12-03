"use client";
import React, { ReactNode, useState } from "react";
import { hasDuplicate } from "../answers/array/answers";

import 'highlight.js/styles/default.css';

export const Questions = () => {
  const [answer,setAnswer]=useState<unknown>(null)
  
  const getAnswer=(answer:unknown)=>{
    setAnswer(String(answer))
  }
  
  return (
    <div className="bg-gray-100/20 m-4 p-4 rounded">
      <div className="bg-gray-500/70 p-2 rounded">
        Q1. Contains Duplicate Solved Given an integer array nums, return true
        if any value appears more than once in the array, otherwise return
        false.
        
        <div>Example 1: Input: nums = [1, 2, 3, 3] Output: true</div>
        <div> Example 2: Input: nums = [1, 2, 3, 4] Output: false</div>
      </div>
      <div>
        <div className="bg-green-600 px-4 my-2 rounded">Solution</div>
        <div className="space-x-3">
          <button
            className="bg-blue-400 p-4 rounded-sm"
            onClick={() => getAnswer(hasDuplicate([1, 2, 3, 4, 4]))}
          >
            Get answer example 1
          </button>
          <button
            className="bg-teal-700 p-4 rounded-sm"
            onClick={() => getAnswer(hasDuplicate([1, 2, 3, 4]))}
          >
            Get answer example 2
          </button>
        </div>
        <div className="bg-gray-600 px-4 my-2 rounded">
          <div className="text-green-600 font-bold">Answer</div>
          <div>{answer as ReactNode}</div>
        </div>
      </div>
      <div className="bg-gray-600 p-4 my-2 rounded">
        <div>reveal code</div>
        <div className="bg-black/25 p-4 my-2 rounded">
        <pre> function {hasDuplicate.name} <code className="javascript">{hasDuplicate.toString()}</code></pre>
        </div>
      </div>
    </div>
  );
};
