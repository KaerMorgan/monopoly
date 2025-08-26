import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createFileRoute, useRouter, redirect } from '@tanstack/react-router';
import { useAuth } from '@/store/authStore';

const fallback = '/' as const;

const formSchema = z.object({
  login: z.string().min(3).max(32),
  password: z.string().min(8).max(64),
});

export const Route = createFileRoute('/login')({
  component: Login,
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isLogged) {
      throw redirect({ to: search.redirect || fallback });
    }
  },
});

function Login() {
  const isLogged = useAuth(state => state.isLogged);
  const setToken = useAuth(state => state.setToken);
  const router = useRouter();
  const navigate = Route.useNavigate();
  const search = Route.useSearch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log('values', values);

    setToken('token');
    await router.invalidate();
    await navigate({ to: search.redirect || fallback });
  };

  if (isLogged) navigate({ to: '/' });

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <Form {...form}>
        <form className="flex flex-col gap-5 p-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="login"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Player name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your player name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">LOGIN</Button>
        </form>
      </Form>
    </section>
  );
}
