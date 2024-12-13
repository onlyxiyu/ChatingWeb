import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900">
                Welcome to Chat App
              </h1>
              <p className="mt-4 text-center text-lg text-gray-600">
                Connect with others in real-time
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Button
                onClick={() => navigate('/register')}
                className="w-full"
                size="lg"
              >
                Register
              </Button>
              <Button
                onClick={() => navigate('/login')}
                variant="outline"
                className="w-full"
                size="lg"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}