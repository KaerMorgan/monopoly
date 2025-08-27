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
import type { RegisterFormSchema } from '@/routes/register';
import { Link } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';
import { Route as loginRoute } from '@/routes/login.tsx';
import { Route as registerRoute } from '@/routes/register.tsx';

type Props = {
  form: UseFormReturn<RegisterFormSchema>;
  onSubmit: (values: RegisterFormSchema) => Promise<void>;
};

export const RegisterForm = ({ form, onSubmit }: Props) => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <Form {...form}>
        <form
          className="border-main-black flex flex-col gap-5 rounded-xl border-3 p-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="border-main-black flex gap-1 border-b-2 p-6">
            <Link to={loginRoute.to}>Войти</Link>
            <Link to={registerRoute.to}>Зарегистрироваться</Link>
          </div>
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
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm your password</FormLabel>
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
};
