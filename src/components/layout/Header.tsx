import { LogOut } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/auth';

interface HeaderProps {
  onLogout: () => void;
}

export function Header({ onLogout }: HeaderProps) {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar}
              alt={user.username}
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-xl font-semibold text-gray-900">
              {user.username}
            </h1>
          </div>
          <Button variant="outline" onClick={onLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}