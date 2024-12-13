import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { MessageList } from '../components/chat/MessageList';
import { MessageInput } from '../components/chat/MessageInput';
import { useAuthStore } from '../store/auth';
import { useMessagesStore } from '../store/messages';

export function Chat() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const messages = useMessagesStore((state) => state.messages);
  const addMessage = useMessagesStore((state) => state.addMessage);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSend = (content: string) => {
    addMessage({
      id: crypto.randomUUID(),
      content,
      sender: user,
      timestamp: new Date(),
    });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <Header onLogout={handleLogout} />
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}