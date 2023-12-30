type Props = { size?: "large" | "small" };
export const Arrow = ({ size }: Props) => {
  const pixels = size === "large" ? "50px" : "24px";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={pixels}
      height={pixels}
      fill="#ffff"
    >
      <path
        d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
        data-name="4-Arrow Left"
      />
    </svg>
  );
};
