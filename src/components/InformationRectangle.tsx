type Props = {
  title: string;
  subTitle: string;
};
export const InformationRectangle = ({ title, subTitle }: Props) => (
  <div className="flex flex-row mx-20 gap-10">
    <div className="border w-32 h-32 m-6">img</div>
    <div className="flex flex-col mt-10">
      <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">{title}</h4>
      <span className="text-white">{subTitle}</span>
    </div>
  </div>
);
