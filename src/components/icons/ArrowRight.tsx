import { Arrow } from "./Arrow";

type Props = { onClick?: () => void; size?: "large" | "small" };
export const ArrowRight = ({ onClick, size = "small" }: Props) => {
  return (
    <div className={`transition-all rotate-180`}>
      <Arrow size={size} />
    </div>
  );
};
