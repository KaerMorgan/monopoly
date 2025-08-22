import { Board } from '../components/Board';

export const Game: React.FC = () => {
  return (
    <main className="flex h-screen max-w-screen items-center justify-center gap-5 p-3">
      <section className="flex h-full w-full max-w-xs items-center justify-center rounded-xl bg-gray-400">
        Players
      </section>
      <Board />
      <section className="flex h-full w-full max-w-xs items-center justify-center rounded-xl bg-gray-400">
        Info
      </section>
    </main>
  );
};
