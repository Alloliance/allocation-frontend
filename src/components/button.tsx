import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[] | string;
  onClick: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-white border rounded border-pink-400 shadow-neon py-2 px-6 bg-pink-700 bg-opacity-15 hover:bg-opacity-25"
    >
      {children}
    </button>
  );
};
