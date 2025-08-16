import { Field } from '../Field/Field';
import { useTopRow } from './useTopRow';

export const TopRow: React.FC = () => {
  const topRowData = useTopRow();

  return topRowData.map(field => <Field data={field} key={field.id} />);
};
