import type { FieldData } from '../data';
import { DynamicIcon } from './DynamicIcon';
import { getCompoundFieldClassName } from './Field/getCompoundFieldClassName';

type Props = { data: FieldData };

export const CornerField: React.FC<Props> = ({
  data: { id, title, color, iconName },
}: Props) => {
  const compoundFieldClassName = getCompoundFieldClassName(id);

  return (
    <div className={compoundFieldClassName} data-id={id}>
      {iconName && <DynamicIcon name={iconName} size={16} color={color} />}
      <span className="text-tiny text-center">{title}</span>
    </div>
  );
};
