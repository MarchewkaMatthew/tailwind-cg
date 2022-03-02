import React from "react";
import { MouseEventHandler } from "react";

export type ButtonType = "solid" | "outline" | "circle" | "clear";
export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

interface ButtonProps {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement | null, ButtonProps>((props, ref) => {
  const {
    children,
    onClick,
    type = "solid",
    variant = "primary",
    size = "large",
    disabled,
  } = props;

  console.log({ type, variant, size });


  return (
    <button
      {...props}
      type="button"
      ref={ref}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});