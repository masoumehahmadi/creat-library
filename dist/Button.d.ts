import React from "react";
type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    children: React.ReactNode;
};
declare const Button: ({ variant, size, onClick, children, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
