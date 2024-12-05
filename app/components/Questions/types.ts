import { questionDetails } from "./data";

export type TQuestionDetails = typeof questionDetails;

export type RevealCodeProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: () => any;
  };