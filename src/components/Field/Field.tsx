import type { FieldData, PropertyFieldData } from '../../data';
import { GoToJailField } from '../GoToJailField';
import { StartField } from '../StartField';
import { ParkingField } from '../ParkingField';
import { ChanceField } from '../ChanceField';
import { ChestField } from '../ChestField';
import { CommunalField } from '../CommunalField';
import { JailField } from '../JailField';
import { PropertyField } from '../PropertyField';
import { RailroadField } from '../RailroadField';
import { TaxField } from '../TaxField';

type Props = {
  data: FieldData;
};

export const Field: React.FC<Props> = ({ data }) => {
  const { id, title, type } = data;

  if (type === 'chance') return <ChanceField data={data} />;
  if (type === 'chest') return <ChestField data={data} />;
  if (type === 'tax') return <TaxField data={data} />;

  if (type === 'railroad') return <RailroadField data={data} />;
  if (type === 'communal') return <CommunalField data={data} />;

  if (type === 'jail') return <JailField id={id} title={title} />;
  if (type === 'start') return <StartField data={data} />;
  if (type === 'go-to-jail') return <GoToJailField id={id} />;
  if (type === 'parking') return <ParkingField data={data} />;

  return <PropertyField data={data as PropertyFieldData} />;
};
