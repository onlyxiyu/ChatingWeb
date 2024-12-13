import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { AuthLayout } from '../components/auth/AuthLayout';
import { useAuthStore } from '../store/auth';
import { registerSchema } from '../utils/validation';
import { generateAvatar } from '../utils/avatar';
import type { z } from 'zod';

type FormData = z.infer<typeof registerSchema>;

export function Register() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: FormData) => {
    setUser({
      id: crypto.randomUUID(),
      username: data.username,
      avatar: generateAvatar(data.username),
    });
    navigate('/chat');
  };

  return (
    <AuthLayout title="创建您的账户">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="用户名"
          type="text"
          {...register('username')}
          error={errors.username?.message}
        />
        <Input
          label="密码"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
        <Input
          label="验证码"
          type="text"
          {...register('captcha')}
          error={errors.captcha?.message}
        />
        <Button type="submit" className="w-full">
          注册
        </Button>
      </form>
    </AuthLayout>
  );
}