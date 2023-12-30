type Props = { onClick: () => void; classes?: string };
export const BackArrow = ({ onClick, classes }: Props) => {
  return (
    <button
      className={`transition-all m-2 ml-6 hover:ml-4 ${classes}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="50px"
        height="50px"
        fill="#ffff"
      >
        <path
          d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
          data-name="4-Arrow Left"
        />
      </svg>
    </button>
  );
};
