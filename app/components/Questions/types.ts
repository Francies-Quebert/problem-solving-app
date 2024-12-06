import { allQuestionDetails } from "./data";

export type TQuestionDetails = typeof allQuestionDetails[0];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TCallback = { firstparam: any; secondParam: any; thirdParam: any };
export type RevealCodeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: ({ firstparam, secondParam, thirdParam }: TCallback) => any;
};
