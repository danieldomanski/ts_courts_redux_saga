import React from "react";
import "../../styles/Utils.css";

const Button: React.FC = ({ children }) => (
  <button className="button__container">{children}</button>
);

export default Button;
