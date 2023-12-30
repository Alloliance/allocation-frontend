import { ReactNode } from "react";
import { NeonButton } from "./buttons/NeonButton";

type Props = {
  title: string;
  subTitle: string;
  button?: ReactNode;
};
export const InformationBox = ({ title, subTitle, button }: Props) => {
  return (
    <div className=" max-w-80">
      <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">{title}</h4>
      <p className="text-white mb-4 ">{subTitle}</p>
      {button}
    </div>
  );
};
