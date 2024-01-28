import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = ({ className, ...buttonProps }) => {
  console.log(buttonProps);
  return <button className={cn(styles.button, className)} {...buttonProps} />;
};
