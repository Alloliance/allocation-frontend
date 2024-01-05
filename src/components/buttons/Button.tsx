import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[] | string;
  size?: "large" | "small";
  onClick: () => void;
  classes?: string;
};

export const Button = ({
  children,
  onClick,
  classes,
  size = "small",
}: Props) => {
  const sizeClasses = () => {
    if (size === "large") return "text-2xl px-16 py-2 ";
    if (size === "small") return "text-xl px-8 py-2 ";
  };
  return (
    <button
      className={`${sizeClasses} mx-6 rounded-full bg-gradient-to-r from-pink-700 to-pink-500 hoverfrom-pink-600 hover:to-pink-400 ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
