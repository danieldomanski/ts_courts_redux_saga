import React from "react";
import "../../styles/Utils.css";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
  <button className="button__container" onClick={onClick}>
    {children}
  </button>
);

export default Button;
