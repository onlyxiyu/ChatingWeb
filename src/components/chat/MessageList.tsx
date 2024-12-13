import { Message } from '../../types';
import { useAuthStore } from '../../store/auth';

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="mx-auto max-w-3xl space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.sender.id === user.id ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <img
              src={message.sender.avatar}
              alt={message.sender.username}
              className="h-8 w-8 rounded-full"
            />
            <div
              className={`rounded-lg px-4 py-2 ${
                message.sender.id === user.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-900'
              }`}
            >
              <p className="text-sm font-medium">
                {message.sender.username}
              </p>
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}