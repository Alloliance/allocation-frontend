import { Arrow } from "./Arrow";

type Props = { onClick?: () => void; size?: "large" | "small" };
export const ArrowRight = ({ onClick, size = "small" }: Props) => {
  return (
    <button className={`transition-all rotate-180`} onClick={onClick}>
      <Arrow size={size} />
    </button>
  );
};
