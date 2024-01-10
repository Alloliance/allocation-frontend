type Props = {
  imageSrc: string;
  title: string;
  subTitle: string;
};
export const InformationRectangle = ({ imageSrc, title, subTitle }: Props) => (
  <div className="flex flex-row gap-10">
    <div className="flex justify-center m-6 min-w-24">
      <img src={imageSrc} width="100" style={{ filter: "grayscale(100%)" }} />
    </div>
    <div className="flex flex-col justify-center">
      <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">{title}</h4>
      <span className="text-white">{subTitle}</span>
    </div>
  </div>
);
