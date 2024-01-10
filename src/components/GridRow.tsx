type Props = {
  leftColumn: string;
  rightColumn: React.ReactNode | string;
};

export const GridRow = ({ leftColumn, rightColumn }: Props) => (
  <>
    <div className="col-span-2">{leftColumn}</div>
    <div className="col-span-3">
      <div className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        {rightColumn}
      </div>
    </div>
  </>
);
