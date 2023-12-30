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
  return (
    <button
      className={`text-2xl mx-6 px-16 py-2 rounded-full bg-gradient-to-r from-pink-700 to-pink-500 hoverfrom-pink-600 hover:to-pink-400 ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
