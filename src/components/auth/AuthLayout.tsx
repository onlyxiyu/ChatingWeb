import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
}

export function AuthLayout({ title, children }: AuthLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/')}
                className="mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回首页
              </Button>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                {title}
              </h2>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}