import React from "react";
import "./assets/index.css"; 
type ButtonProps={
  variant?:'primary' | 'secondary' | 'outline'|'danger';
  size?:'sm' | 'md' | 'lg';
  onClick?:()=>void;
  children:React.ReactNode;
}
const Button = ({
  variant = "primary",
  size = "md",
  onClick,
  children,
}:ButtonProps) => {
  const classname = [
  "btn", 
    `btn-${variant}`, 
    `btn-${size}`, 
  ].join(" ");
  return (
    <button className={classname} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button; 