import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[] | string;
  onClick: () => void;
  classes?: string;
};

export const NeonButton = ({ children, onClick, classes }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`text-white border rounded border-pink-400 shadow-neon py-2 px-6 bg-pink-900 hover:bg-pink-800 ${classes}`}
    >
      {children}
    </button>
  );
};
