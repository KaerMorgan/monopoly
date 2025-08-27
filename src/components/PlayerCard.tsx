import { DynamicIcon } from './DynamicIcon';
import type { PlayerData } from './PlayersList';

type Props = {
  data: PlayerData;
};

export const PlayerCard = ({ data: { color, money, name, properties } }: Props) => {
  return (
    <div
      className="bg-player-card-bg flex h-fit w-full flex-col gap-1.5 rounded-xl p-2.5"
      style={{
        boxShadow: `
          8px 8px 24px 0px #0000001A;
          31px 31px 44px 0px #00000017;
          70px 69px 59px 0px #0000000D;
          125px 123px 70px 0px #00000003;
          195px 193px 77px 0px #00000000;
        `,
      }}
    >
      <div className="align-center flex gap-1">
        <div
          className="border-contrast-black size-5 rounded-full border"
          style={{ backgroundColor: color }}
        />
        <h3 className="text-main-black text-sm">{name}</h3>
        <DynamicIcon name="ruble" className="ml-auto" size={14} />
      </div>

      <div className="align-center flex justify-between gap-1">
        <p className="text-main-black text-xs font-light">Деньги</p>
        <p className="text-main-black text-xs font-light">{money}$</p>
      </div>

      <div className="align-center flex justify-between gap-1">
        <p className="text-main-black text-xs font-light">Улиц</p>
        <p className="text-main-black text-xs font-light">{properties}</p>
      </div>
    </div>
  );
};
