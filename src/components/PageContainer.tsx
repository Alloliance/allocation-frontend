import { ReactNode } from "react";
import { BlobBlue } from "./svgs/BlobBlue";
import { BlobPink } from "./svgs/BlobPink";

type Props = {
  children: ReactNode | ReactNode[] | string;
  classes?: string;
  showSecondBlob?: boolean;
};

export const PageContainer = ({
  children,
  classes,
  showSecondBlob = false,
}: Props) => {
  return (
    <div
      className={` w-screen absolute transition-all duration-700 ${classes} bg-gradient-to-b from-purple-900 from-30% to-black `}
    >
      <div className="w-full absolute -z-10 flex justify-end">
        <BlobPink />
      </div>
      {showSecondBlob ? (
        <div className="w-full absolute -z-10">
          <BlobBlue />
        </div>
      ) : null}
      {children}
    </div>
  );
};
