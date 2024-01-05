import { Arrow } from "./Arrow";

type Props = { onClick?: () => void; size?: "large" | "small" };
export const ArrowUp = ({ onClick, size = "small" }: Props) => {
  return (
    <button
      className={`transition-all m-2 relative top-4 hover:top-2 rotate-90`}
      onClick={onClick}
    >
      <Arrow size={size} />
    </button>
  );
};
