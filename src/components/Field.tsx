import type { FieldData } from '../data';
import { DynamicIcon } from './DynamicIcon';
import { JailField } from './JailField';

type Props = {
  data: FieldData;
};

export const Field: React.FC<Props> = ({ data }) => {
  const { id, title, color, hasSideWalk, iconName, price, subtitle } = data;
  const fieldColorStyles = color
    ? ({ '--field-color': color } as React.CSSProperties)
    : undefined;

  if (hasSideWalk) return <JailField title={title} />;

  return (
    <div className="" data-id={id}>
      {color && <div className="" style={fieldColorStyles}></div>}
      <span className="">{title}</span>
      {iconName && <DynamicIcon name={iconName} />}
      {subtitle && <span className="">{subtitle}</span>}
      {price && <span className="">{price}</span>}
    </div>
  );
};
