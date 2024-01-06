import { ReactNode } from "react";

type Props = {
  title: string;
  subTitle: string;
  button?: ReactNode;
};
export const InformationBox = ({ title, subTitle, button }: Props) => {
  return (
    <div className="bg-black-transparent max-w-80 px-3 py-6">
      <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">{title}</h4>
      <p className="text-white mb-4 ">{subTitle}</p>
      {button}
    </div>
  );
};
