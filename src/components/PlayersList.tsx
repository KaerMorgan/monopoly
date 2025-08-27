import { PlayerCard } from './PlayerCard';

export interface PlayerData {
  id: number;
  name: string;
  money: number;
  properties: number;
  order: number;
  color: string;
}

const playerListPlaceholderData: Array<PlayerData> = [
  {
    id: 0,
    name: 'MorganKatarn',
    money: 2000,
    properties: 5,
    order: 0,
    color: '#A2D4A1',
  },
  {
    id: 1,
    name: 'Mr.Gramm',
    money: 3000,
    properties: 2,
    order: 1,
    color: '#FF8661',
  },
  {
    id: 2,
    name: 'Snake Solid',
    money: 1500,
    properties: 12,
    order: 2,
    color: '#E8B5BB',
  },
];

export const PlayersList = () => {
  return (
    <section className="flex h-full w-full max-w-70 flex-col gap-2">
      {playerListPlaceholderData.map(player => (
        <PlayerCard data={player} />
      ))}
    </section>
  );
};
