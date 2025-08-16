import { BottomRow } from './BottomRow';
import { MiddleRow } from './MiddleRow';
import { TopRow } from './TopRow/TopRow';

export const Board = () => {
  return (
    <main>
      <TopRow />
      <MiddleRow />
      <BottomRow />
    </main>
  );
};
