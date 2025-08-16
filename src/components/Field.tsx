import clsx from 'clsx';
import type { FieldData } from '../data';
import { DynamicIcon } from './DynamicIcon';
// import { JailField } from './JailField';

type Props = {
  data: FieldData;
  className?: string;
};

export const Field: React.FC<Props> = ({ className, data }) => {
  const { id, title, color, iconName, price, subtitle } = data;
  const fieldColorStyles = color
    ? ({ backgroundColor: color } as React.CSSProperties)
    : undefined;

  // if (hasSideWalk) return <JailField title={title} />;

  return (
    <div
      className={clsx(className, 'flex flex-col justify-center bg-amber-100')}
      data-id={id}
    >
      {color && (
        <div
          className="h-4 w-full justify-self-start"
          style={fieldColorStyles}
        ></div>
      )}
      <span className="text-base">{title}</span>
      {iconName && <DynamicIcon name={iconName} className="size-8" />}
      {subtitle && <span className="text-base">{subtitle}</span>}
      {price && <span className="text-base">{price}</span>}
    </div>
  );
};
