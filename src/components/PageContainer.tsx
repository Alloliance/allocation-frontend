import { Children, ReactNode } from "react";
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
      className={` w-screen absolute transition-all duration-700 ${classes}`}
    >
      <div className="absolute -z-10">
        <BlobPink />
      </div>
      {showSecondBlob ? (
        <div className="absolute -z-10">
          <BlobBlue />
        </div>
      ) : null}
      {children}
    </div>
  );
};
