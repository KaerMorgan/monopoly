import clsx from 'clsx';

type Props = {
  cellSide: string;
  isSideField: boolean;
  color: string;
  price: number;
};

export const FieldPropertyColorLine: React.FC<Props> = ({
  cellSide,
  color,
  price,
  isSideField,
}) => {
  const sizeClassName = isSideField ? 'h-12 w-4' : 'h-4 w-12';

  const angleClassName =
    (cellSide === 'right' && 'rotate-90') || (cellSide === 'left' && '-rotate-90');

  return (
    <div
      className={clsx('absolute flex items-center justify-center p-0.5', sizeClassName)}
      style={{ backgroundColor: color, [cellSide]: '-16.5px' }}
    >
      <span className={clsx('inline-block text-xs text-white', angleClassName)}>
        {price}$
      </span>
    </div>
  );
};
