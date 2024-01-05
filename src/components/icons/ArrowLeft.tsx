import { Arrow } from "./Arrow";

type Props = {
  onClick?: () => void;
  classes?: string;
  size: "large" | "small";
};
export const ArrowLeft = ({ onClick, classes, size }: Props) => {
  return <Arrow size={size} />;
};
