import { ReactNode } from "react";
import { BlobBlue } from "./svgs/BlobBlue";
import { BlobPink } from "./svgs/BlobPink";

type Props = {
  children: ReactNode | ReactNode[] | string;
  classes?: string;
  secondBlobEndOfPage?: boolean;
};

export const PageContainer = ({
  children,
  classes,
  secondBlobEndOfPage = false,
}: Props) => {
  return (
    <div
      className={` w-screen absolute transition-all duration-700 ${classes} bg-gradient-to-b from-purple-900 from-30% to-black `}
    >
      <div className="w-full absolute -z-10 flex justify-end">
        <BlobPink />
      </div>
      <div
        className={`w-full absolute -z-10 ${
          secondBlobEndOfPage ? "bottom-0" : ""
        }`}
      >
        <BlobBlue />
      </div>
      {children}
    </div>
  );
};
