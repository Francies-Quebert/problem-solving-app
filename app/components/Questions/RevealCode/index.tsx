'use client'
import { useState } from "react";
import { RevealCodeProps } from "../types";

export const RevealCode = ({ callback }: RevealCodeProps) => {
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
              
              <code className="javascript">const {callback.name}=
                {callback.toString()}</code>
            </pre>
          </div>
        )}
      </div>
    );
  };