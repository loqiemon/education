import cls from "./Button.module.scss";
import React from "react";
import {classNames} from "@shared/lib/classNames/classNames";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export enum ThemeButton {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const Button = (props: ButtonProps) => {
  const {className, children, theme, ...otherProps} = props;
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export {Button};
