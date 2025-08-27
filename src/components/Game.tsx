import { useAuth } from '@/store/authStore';
import { Board } from '../components/Board';
import { Button } from './ui/button';
import { useNavigate, useRouter } from '@tanstack/react-router';
import { Route as loginRoute } from '../routes/login.tsx';
import { PlayersList } from './PlayersList.tsx';

export const Game: React.FC = () => {
  const setToken = useAuth(state => state.setToken);
  const router = useRouter();
  const navigate = useNavigate();

  const logout = async () => {
    setToken('');
    await router.invalidate();
    await navigate({ to: loginRoute.to });
  };

  return (
    <main className="bg-back flex h-screen max-w-screen items-center justify-around gap-5 p-2">
      <PlayersList />
      <Board />
      <section className="flex h-full w-full max-w-70 items-center justify-center rounded-xl">
        Info
      </section>
      <Button className="absolute top-0 right-0" onClick={logout}>
        Logout
      </Button>
    </main>
  );
};
