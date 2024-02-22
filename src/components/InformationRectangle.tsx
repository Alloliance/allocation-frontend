type Props = {
  imageSrc: string;
  title: string;
  subTitle: string;
};
export const InformationRectangle = ({ imageSrc, title, subTitle }: Props) => (
  <div className="flex flex-row sm:gap-10 gap-3 mr-3">
    <div className="flex items-start justify-center sm:m-6 mt-3 sm:min-w-24 min-w-10">
      <img src={imageSrc} width="100" style={{ filter: "grayscale(100%)" }} />
    </div>
    <div className="flex flex-col justify-center">
      <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl break-all w-full">
        {title}
      </h4>
      <span className="text-white break-all w-full">{subTitle}</span>
    </div>
  </div>
);
