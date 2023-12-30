import { Arrow } from "./Arrow";

type Props = {
  onClick?: () => void;
  classes?: string;
  size: "large" | "small";
};
export const ArrowLeft = ({ onClick, classes, size }: Props) => {
  return (
    <button
      className={`transition-all m-2 ml-6 hover:ml-4 ${classes}`}
      onClick={onClick}
    >
      <Arrow size={size} />
    </button>
  );
};
