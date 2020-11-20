import React from "react";
import { IButtonProps } from "./button.props.interface";
import "./button.css";

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
