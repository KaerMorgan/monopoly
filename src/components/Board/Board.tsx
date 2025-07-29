import { TopRow } from '../TopRow/TopRow';
import styles from './Board.m.css';

export const Board = () => {
  return (
    <main className={styles.root}>
     <TopRow />
     <MiddleRow />
     <BottomRow />
    </main>
  )
}
