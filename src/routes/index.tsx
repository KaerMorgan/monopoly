import { Game } from '@/components/Game';
import { checkAuth } from '@/lib/checkAuth';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  // beforeLoad: checkAuth,
  component: Index,
});

function Index() {
  return <Game />;
}
