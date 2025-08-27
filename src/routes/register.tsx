import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { createFileRoute, useRouter, redirect } from '@tanstack/react-router';
import { useAuth } from '@/store/authStore';
import { RegisterForm } from '@/components/RegisterForm';

const fallback = '/' as const;

const formSchema = z
  .object({
    login: z.string().min(3).max(32),
    email: z.email(),
    password: z.string().min(8).max(64),
    confirmPassword: z.string().min(8).max(64),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // This specifies where the error message should appear
  });

export type RegisterFormSchema = z.infer<typeof formSchema>;

export const Route = createFileRoute('/register')({
  component: Register,
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isLogged) {
      throw redirect({ to: search.redirect || fallback });
    }
  },
});

function Register() {
  const isLogged = useAuth(state => state.isLogged);
  const setToken = useAuth(state => state.setToken);
  const router = useRouter();
  const navigate = Route.useNavigate();
  const search = Route.useSearch();

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = async (values: RegisterFormSchema) => {
    console.log('values: ', values);

    setToken('token');
    await router.invalidate();
    await navigate({ to: search.redirect || fallback });
  };

  if (isLogged) navigate({ to: '/' });

  return <RegisterForm form={form} onSubmit={onSubmit} />;
}
