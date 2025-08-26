import type { FieldData } from '../../data';
import { CornerField } from '../CornerField';
import { PropertyField } from './PropertyField';
import { ChanceField } from './ChanceField';
import { ChestField } from './ChestField';
import { JailField } from '../JailField';
import { TaxField } from './TaxField';
import { RailroadField } from './RailRoadField';
import { CommunalField } from './CommunalField';

type Props = {
  data: FieldData;
};

export const Field: React.FC<Props> = ({ data }) => {
  const { id, title, subtitle, type } = data;

  if (type === 'chance') return <ChanceField data={data} />;
  if (type === 'chest') return <ChestField data={data} />;
  if (type === 'tax') return <TaxField data={data} />;

  if (type === 'railroad') return <RailroadField data={data} />;
  if (type === 'communal') return <CommunalField data={data} />;

  if (type === 'jail') return <JailField id={id} title={title} subtitle={subtitle} />;
  if (type === 'start') return <CornerField data={data} />;
  if (type === 'go-to-jail') return <CornerField data={data} />;
  if (type === 'parking') return <CornerField data={data} />;

  return <PropertyField data={data} />;
};
