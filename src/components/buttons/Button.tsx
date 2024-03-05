import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[] | string;
  size?: "large" | "small";
  onClick?: () => void;
  disabled?: boolean;
  classes?: string;
};

export const Button = ({
  children,
  onClick,
  classes,
  disabled = false,
  size = "small",
}: Props) => {
  const sizeClasses = () => {
    if (size === "large") return "text-2xl px-16 py-2";
    if (size === "small") return "";
  };
  const hoverClasses = () =>
    disabled ? "" : "hover:from-pink-600 hover:to-pink-400";
  return (
    <button
      disabled={disabled}
      className={`${sizeClasses()} px-5 sm:mx-6 mx-3 rounded-full bg-gradient-to-r from-pink-700 to-pink-500 ${hoverClasses} ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
