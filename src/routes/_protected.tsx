import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected')({
  beforeLoad: async ({ context, location }) => {
    const isLogged = context.auth.isLogged;
    if (!isLogged) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href },
      });
    }
  },
  component: () => <Outlet />,
});
