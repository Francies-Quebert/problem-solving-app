import { TQuestionDetails } from "../types";


export const QuestionContainer = ({ question, examples }: TQuestionDetails) => {
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
  