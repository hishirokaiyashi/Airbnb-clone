import React from "react";

import {ButtonType} from "../../type/button.type"
export interface ButtonProps {
  text: string | number;
  className?: string;
  icon?: React.ReactNode;
  type:ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ text, className, icon, type, onClick }: ButtonProps) => {
  return (
    <>
      {icon ? (
        <button
          onClick={onClick}
          type={type}
          className={` border py-[14px] px-[24px] ${className} `}
        >
          <span>{icon}</span>
          <span>{text}</span>
        </button>
      ) : (
        <button
          onClick={onClick}
          type="button"
          className={` border py-[14px] px-[24px] ${className} `}
        >
          <span>{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
