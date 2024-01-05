import { Children, ReactNode } from "react";
import { Blobby } from "./Blob";

type Props = {
  children: ReactNode | ReactNode[] | string;
  classes: string;
};

export const PageContainer = ({ children, classes }: Props) => {
  return (
    <div
      className={` bg-gradient-to-b from-purple-900 from-30% to-black w-screen absolute transition-all duration-700 h-full ${classes}`}
    >
      <div className="absolute -z-10">
        <Blobby />
      </div>
      {children}
    </div>
  );
};
