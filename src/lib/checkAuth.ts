import type { RouterContext } from '@/routes/__root';
import { redirect } from '@tanstack/react-router';

export const checkAuth = async ({
  context,
  location,
}: {
  context: RouterContext;
  location: { href: string };
}) => {
  const isLogged = context.auth.isLogged;
  if (!isLogged) {
    throw redirect({
      to: '/login',
      search: { redirect: location.href },
    });
  }
};
