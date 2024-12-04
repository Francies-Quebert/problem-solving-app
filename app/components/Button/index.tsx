import React, { ReactNode } from "react";

type ButtonProps = {
  type: "blue" | "teal";
  onClick: () => void;
  children: ReactNode;
};
const Button = ({ onClick, children, type = "blue" }: ButtonProps) => {
  const variant = {
    blue: "bg-blue-400",
    teal: "bg-teal-700",
  };
  return (
    <button className={`${variant[type]} p-4 rounded-sm`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
