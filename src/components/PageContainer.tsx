import { Children, ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[] | string;
  classes: string;
};

export const PageContainer = ({ children, classes }: Props) => {
  return (
    <div
      className={`border border-black bg-gradient-to-b from-purple-neon-900 to-black w-screen absolute transition-all duration-700 h-full ${classes}`}
    >
      {children}
    </div>
  );
};
