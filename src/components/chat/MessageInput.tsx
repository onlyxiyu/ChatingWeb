import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface MessageInputProps {
  onSend: (message: string) => void;
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    onSend(newMessage);
    setNewMessage('');
  };

  return (
    <div className="border-t bg-white p-4">
      <div className="mx-auto max-w-3xl">
        <div className="flex space-x-4">
          <Input
            value={newMessage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
            placeholder="输入您要发送的消息..."
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}